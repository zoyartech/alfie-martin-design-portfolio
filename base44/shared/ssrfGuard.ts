/**
 * SSRF protection: validate that a URL points to a public, non-internal destination.
 * Rejects loopback, private (RFC 1918), link-local, and other reserved IP ranges.
 */

const BLOCKED_HOSTNAMES = new Set([
  'localhost',
  '0.0.0.0',
  '::1',
  'ip6-localhost',
]);

function isPrivateIp(ip: string): boolean {
  // Strip IPv6 bracket notation if present
  const clean = ip.replace(/^\[|]$/g, '');

  // IPv4 checks
  const v4Parts = clean.split('.').map(Number);
  if (v4Parts.length === 4 && v4Parts.every((p) => Number.isInteger(p) && p >= 0 && p <= 255)) {
    const [a, b] = v4Parts;
    if (a === 0) return true;                       // 0.0.0.0/8
    if (a === 10) return true;                      // 10.0.0.0/8
    if (a === 127) return true;                     // 127.0.0.0/8 (loopback)
    if (a === 169 && b === 254) return true;        // 169.254.0.0/16 (link-local / cloud metadata)
    if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12
    if (a === 192 && b === 168) return true;        // 192.168.0.0/16
    if (a === 100 && b >= 64 && b <= 127) return true; // 100.64.0.0/10 (CGNAT)
    return false;
  }

  // IPv6 checks
  const lower = clean.toLowerCase();
  if (lower === '::1' || lower === '::' || lower === '0:0:0:0:0:0:0:1') return true;
  if (lower.startsWith('fc') || lower.startsWith('fd')) return true;  // IPv6 ULA
  if (lower.startsWith('fe80')) return true;                            // IPv6 link-local
  // IPv4-mapped IPv6 (e.g. ::ffff:169.254.169.254) — extract the embedded IPv4
  // and re-check it against the private IPv4 ranges.
  const mapped = lower.match(/::ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/);
  if (mapped) {
    return isPrivateIp(mapped[1]);
  }
  return false;
}

export async function assertSafeUrl(rawUrl: string): Promise<URL> {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error('Invalid URL format');
  }

  const protocol = parsed.protocol.toLowerCase();
  if (protocol !== 'http:' && protocol !== 'https:') {
    throw new Error(`Blocked protocol: ${protocol} — only http and https are allowed`);
  }

  const hostname = parsed.hostname.toLowerCase().replace(/^\[|]$/g, '');

  if (BLOCKED_HOSTNAMES.has(hostname)) {
    throw new Error(`Blocked hostname: ${hostname}`);
  }

  // If the hostname is already a literal IP, check it directly.
  if (isPrivateIp(hostname)) {
    throw new Error(`Blocked internal IP address: ${hostname}`);
  }

  // For non-IP hostnames, resolve DNS and reject if ANY resolved record (A or AAAA)
  // is internal. Checking both IPv4 (A) and IPv6 (AAAA) prevents attackers from
  // bypassing validation via private IPv6 records. Validation happens here,
  // immediately before the caller's fetch, to minimize the DNS-rebinding window.
  // This prevents DNS-based SSRF bypasses (e.g. a public domain pointing to 169.254.169.254).
  if (hostname.includes('.') && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname) && !hostname.includes(':')) {
    try {
      // Resolve both record types in parallel. A domain may only have one type,
      // so a failure on one is acceptable as long as the other yields records.
      const [v4Result, v6Result] = await Promise.allSettled([
        Deno.resolveDns(hostname, 'A'),
        Deno.resolveDns(hostname, 'AAAA'),
      ]);

      const v4Records = v4Result.status === 'fulfilled' ? v4Result.value : [];
      const v6Records = v6Result.status === 'fulfilled' ? v6Result.value : [];
      const records = [...v4Records, ...v6Records];

      if (records.length === 0) {
        throw new Error(`Could not resolve hostname: ${hostname}`);
      }
      for (const ip of records) {
        if (isPrivateIp(ip)) {
          throw new Error(`Hostname ${hostname} resolves to internal IP ${ip}`);
        }
      }
    } catch (e) {
      // Re-throw our own validation errors verbatim; treat all other failures as unsafe.
      if (e instanceof Error && e.message.startsWith('Blocked')) throw e;
      if (e instanceof Error && e.message.startsWith('Hostname')) throw e;
      if (e instanceof Error && e.message.startsWith('Could not')) throw e;
      throw new Error(`DNS resolution failed for ${hostname}: ${e.message}`);
    }
  }

  return parsed;
}
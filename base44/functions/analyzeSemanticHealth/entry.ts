import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();
        
        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { url } = await req.json();
        
        if (!url) {
            return Response.json({ error: 'URL is required' }, { status: 400 });
        }

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Base44Bot/1.0; +https://base44.com)'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
        }
        
        const html = await response.text();
        
        const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        
        const head = headMatch ? headMatch[1].substring(0, 10000) : '';
        let body = bodyMatch ? bodyMatch[1] : html;
        body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        body = body.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        body = body.substring(0, 15000);

        const prompt = `Analyze this webpage for Semantic AI Optimization (SAO) health.
Check for:
1. Missing or poor Schema markup (JSON-LD)
2. Heading structure (H1, H2, H3 logical flow)
3. Content patterns (are they AI-friendly, modular, answering questions directly?)
4. Provenance metadata (author, date published)

HTML Head excerpt:
${head}

HTML Body excerpt (scripts/styles removed):
${body}

Return a JSON with this exact schema:
{
  "score": number (0-100),
  "schema": { "status": "Good"|"Warning"|"Poor", "details": "string" },
  "headings": { "status": "Good"|"Warning"|"Poor", "details": "string" },
  "content": { "status": "Good"|"Warning"|"Poor", "details": "string" },
  "provenance": { "status": "Good"|"Warning"|"Poor", "details": "string" },
  "recommendations": ["string"]
}
`;

        const llmRes = await base44.integrations.Core.InvokeLLM({
            prompt: prompt,
            response_json_schema: {
                type: "object",
                properties: {
                    score: { type: "number" },
                    schema: { type: "object", properties: { status: { type: "string" }, details: { type: "string" } } },
                    headings: { type: "object", properties: { status: { type: "string" }, details: { type: "string" } } },
                    content: { type: "object", properties: { status: { type: "string" }, details: { type: "string" } } },
                    provenance: { type: "object", properties: { status: { type: "string" }, details: { type: "string" } } },
                    recommendations: { type: "array", items: { type: "string" } }
                }
            }
        });

        return Response.json({ analysis: llmRes });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
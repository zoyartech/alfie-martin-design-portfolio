import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();
        
        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { siteName, siteDescription, urls } = await req.json();
        
        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return Response.json({ error: 'URLs are required' }, { status: 400 });
        }

        // Fetch meta data for each URL (up to 10 URLs to avoid timeout)
        const urlData = [];
        for (const url of urls.slice(0, 10)) {
            try {
                const response = await fetch(url, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Base44Bot/1.0;)' }
                });
                if (response.ok) {
                    const html = await response.text();
                    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
                    
                    urlData.push({
                        url,
                        title: titleMatch ? titleMatch[1].trim() : url,
                        description: descMatch ? descMatch[1].trim() : ''
                    });
                } else {
                    urlData.push({ url, title: url, description: 'Failed to fetch page data' });
                }
            } catch (e) {
                urlData.push({ url, title: url, description: 'Error fetching page data' });
            }
        }

        const prompt = `Generate an AI-optimized 'llms.txt' file for the following site.
Site Name: ${siteName || 'Unknown'}
Site Description: ${siteDescription || 'No description provided.'}

Here is the core content structure based on the provided URLs:
${urlData.map(u => `- URL: ${u.url}\n  Title: ${u.title}\n  Summary: ${u.description}`).join('\n\n')}

Requirements for the llms.txt:
1. Use Markdown format.
2. Include YAML frontmatter at the top with:
   - title: [Site Name]
   - description: [Short summary of the site for AI agents]
   - version: 1.0.0
3. A brief section explaining what this site provides.
4. A structured list of the core content pages, including the URL and a clean, concise summary of what agents can find there.
5. Emphasize clarity and modularity for AI extraction.

Output ONLY the raw markdown content for the llms.txt file. Do not include markdown code block wrappers like \`\`\`markdown or \`\`\` text. Just the content itself.`;

        const llmRes = await base44.integrations.Core.InvokeLLM({
            prompt: prompt
        });

        // Clean up potential markdown wrappers if the LLM includes them
        let content = llmRes;
        if (content.startsWith('```markdown')) {
            content = content.replace(/^```markdown\n/, '').replace(/\n```$/, '');
        } else if (content.startsWith('```')) {
            content = content.replace(/^```\n/, '').replace(/\n```$/, '');
        }

        return Response.json({ llmsTxt: content });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
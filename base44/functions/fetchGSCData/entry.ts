import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();
        
        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { accessToken } = await base44.asServiceRole.connectors.getConnection("google_search_console");

        // 1. Fetch available sites
        const sitesRes = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        
        if (!sitesRes.ok) {
            const err = await sitesRes.text();
            throw new Error(`GSC API error: ${err}`);
        }
        
        const sitesData = await sitesRes.json();
        
        if (!sitesData.siteEntry || sitesData.siteEntry.length === 0) {
            return Response.json({ error: "No sites found in Search Console" }, { status: 404 });
        }
        
        // Take the first verified site
        const siteUrl = sitesData.siteEntry[0].siteUrl;

        // 2. Fetch search analytics for the last 30 days
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const queryRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
            method: "POST",
            headers: { 
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                startDate,
                endDate,
                dimensions: ["date"]
            })
        });
        
        if (!queryRes.ok) {
            const err = await queryRes.text();
            throw new Error(`GSC Query error: ${err}`);
        }

        const queryData = await queryRes.json();

        return Response.json({ siteUrl, analytics: queryData.rows || [] });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
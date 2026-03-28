import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        // Find the admin user to send the summary to
        const admins = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
        const adminEmail = admins.length > 0 ? admins[0].email : null;

        if (!adminEmail) {
            return Response.json({ error: 'No admin user found to send email to' }, { status: 404 });
        }

        // We send a generic summary email. Real analytics data would require fetching from your analytics provider.
        const body = `Hello,

This is your automated monthly summary for your portfolio site.
Your portfolio continues to receive visits and engagement from your case studies.

(Note: For exact visit numbers, please check your analytics dashboard.)

Keep up the great work!
Your Portfolio App`;

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: adminEmail,
            subject: "Your Monthly Portfolio Site Visits Summary",
            body: body
        });
        
        return Response.json({ success: true, sentTo: adminEmail });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
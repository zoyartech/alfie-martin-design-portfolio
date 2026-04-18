import React, { useState } from 'react';
import { FileText, Copy, Check, Loader2, Download, Globe, AlertCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LlmsTxtGenerator() {
  const [siteName, setSiteName] = useState('');
  const [siteDescription, setSiteDescription] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    
    const urls = urlInput.split('\n').map(u => u.trim()).filter(u => u.startsWith('http'));
    if (urls.length === 0) {
      setError('Please provide at least one valid URL starting with http:// or https://');
      return;
    }

    setLoading(true);
    setError('');
    setGeneratedText('');

    try {
      const res = await base44.functions.invoke('generateLlmsTxt', {
        siteName,
        siteDescription,
        urls
      });
      
      if (res.data && res.data.llmsTxt) {
        setGeneratedText(res.data.llmsTxt);
      } else if (res.data && res.data.error) {
        setError(res.data.error);
      } else {
        setError('Failed to generate llms.txt. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred while generating.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'llms.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full bg-white shadow-lg border-slate-200">
      <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-xl text-slate-900">llms.txt Generator</CardTitle>
            <CardDescription className="text-slate-500 mt-1">
              Provide your core content URLs. We'll fetch the metadata and generate an AI-friendly Markdown file for agents to crawl.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Site Name</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="e.g. Acme SaaS"
                  className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Site Description</label>
              <textarea 
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
                placeholder="Briefly describe what your site is about..."
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm h-20 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Core Content URLs</label>
              <p className="text-xs text-slate-500 mb-2">Enter one full URL per line (up to 10 URLs recommended).</p>
              <textarea 
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/about&#10;https://example.com/docs/api&#10;https://example.com/pricing"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm h-32 resize-none whitespace-nowrap"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-lg flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <Button 
              onClick={handleGenerate} 
              disabled={loading || !urlInput.trim()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Crawling & Generating...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  Generate llms.txt
                </>
              )}
            </Button>
          </div>

          {/* Output Display */}
          <div className="flex flex-col h-full">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Generated Content</label>
            <div className="relative flex-1 border border-slate-200 rounded-lg bg-slate-950 overflow-hidden flex flex-col min-h-[300px]">
              {generatedText ? (
                <>
                  <div className="flex justify-between items-center bg-slate-900 border-b border-slate-800 px-4 py-2">
                    <span className="text-xs font-mono text-slate-400">llms.txt</span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={handleCopy}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors flex items-center gap-1.5"
                        title="Copy code"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        <span className="text-xs font-medium">{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                      <button 
                        onClick={handleDownload}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors flex items-center gap-1.5"
                        title="Download .txt"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-xs font-medium">Save</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto p-4">
                    <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                      {generatedText}
                    </pre>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-600 p-6 text-center">
                  <FileText className="w-12 h-12 mb-3 opacity-20" />
                  <p className="text-sm">Your AI-optimized plain text content will appear here.</p>
                </div>
              )}
            </div>
            {generatedText && (
               <p className="text-xs text-slate-500 mt-3 flex items-center gap-1.5">
                 <Check className="w-3.5 h-3.5 text-emerald-500" />
                 Save this as <code className="bg-slate-100 px-1 rounded">llms.txt</code> in your root directory (e.g. yoursite.com/llms.txt).
               </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
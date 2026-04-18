import React, { useState } from 'react';
import { Search, Activity, AlertCircle, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function SemanticHealthAnalyzer() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!url) return;
    
    let targetUrl = url;
    if (!targetUrl.startsWith('http')) {
      targetUrl = 'https://' + targetUrl;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const res = await base44.functions.invoke('analyzeSemanticHealth', { url: targetUrl });
      if (res.data && res.data.analysis) {
        setResults(res.data.analysis);
      } else if (res.data && res.data.error) {
        setError(res.data.error);
      } else {
        setError("Failed to analyze the URL. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred while analyzing. Make sure the URL is accessible.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status === 'Good') return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (status === 'Warning') return 'text-amber-700 bg-amber-50 border-amber-200';
    return 'text-rose-700 bg-rose-50 border-rose-200';
  };

  const getStatusIcon = (status) => {
    if (status === 'Good') return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    if (status === 'Warning') return <AlertCircle className="w-5 h-5 text-amber-500" />;
    return <AlertCircle className="w-5 h-5 text-rose-500" />;
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
      <div className="p-6 md:p-8 bg-slate-900 text-white">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-400" />
          Semantic Health Analyzer
        </h3>
        <p className="text-slate-400 mb-6 max-w-2xl">
          Enter a URL to crawl and analyze its readiness for AI agents. We'll check for semantic markup, entity structure, heading clarity, and provenance metadata.
        </p>
        
        <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/blog/article" 
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
              required
            />
          </div>
          <button 
            type="submit"
            disabled={loading || !url}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Analyze Page"}
          </button>
        </form>
        {error && <p className="text-rose-400 text-sm mt-3">{error}</p>}
      </div>

      {results && (
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Score */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm min-w-[200px]">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">SAO Score</p>
              <div className={`text-6xl font-black ${
                results.score >= 80 ? 'text-emerald-500' : 
                results.score >= 50 ? 'text-amber-500' : 'text-rose-500'
              }`}>
                {results.score}
              </div>
              <p className="text-sm font-medium text-slate-400 mt-2">out of 100</p>
            </div>

            {/* Metrics */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Schema & Entities', data: results.schema },
                { title: 'Heading Structure', data: results.headings },
                { title: 'Content Modularity', data: results.content },
                { title: 'Provenance', data: results.provenance }
              ].map((metric, i) => (
                <div key={i} className={`p-4 rounded-xl border ${getStatusColor(metric.data.status)} bg-opacity-50`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800">{metric.title}</h4>
                    {getStatusIcon(metric.data.status)}
                  </div>
                  <p className="text-sm font-medium opacity-90 leading-relaxed">
                    {metric.data.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Actionable Recommendations</h4>
            <ul className="space-y-3">
              {results.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
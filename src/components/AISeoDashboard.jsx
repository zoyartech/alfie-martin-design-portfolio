import React, { useState } from "react";
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';
import { 
  TrendingUp, TrendingDown, AlertCircle, Sparkles, Activity, 
  Search, FileText, Zap, Radar as RadarIcon, Eye, Target, Plus, User, Check, RefreshCw, Bot
} from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AISeoDashboard() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Q3 AI Overviews", tasks: [
        { id: 1, keyword: "ai overview optimization", assignee: "Sarah", status: "In Progress" },
        { id: 2, keyword: "search generative experience", assignee: "David", status: "Pending" }
    ]}
  ]);
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [newCampaignName, setNewCampaignName] = useState("");
  const [newCampaignAssignee, setNewCampaignAssignee] = useState("");
  const [competitorInput, setCompetitorInput] = useState("");
  const [activeCompetitor, setActiveCompetitor] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [gscData, setGscData] = useState(null);
  const [gscError, setGscError] = useState("");

  const handleSyncGSC = async () => {
    setIsSyncing(true);
    setGscError("");
    try {
      const res = await base44.functions.invoke('fetchGSCData', {});
      if (res.data && res.data.analytics) {
        setGscData(res.data);
      } else if (res.data && res.data.error) {
        setGscError(res.data.error);
      }
    } catch (e) {
      console.error(e);
      setGscError("Failed to fetch Google Search Console data");
    }
    setIsSyncing(false);
  };

  const handleKeywordSelect = (e, kw) => {
    e.stopPropagation();
    if (selectedKeywords.includes(kw.keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== kw.keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, kw.keyword]);
    }
  };

  const handleCreateCampaign = () => {
    if (!newCampaignName || selectedKeywords.length === 0) return;
    const newTasks = selectedKeywords.map((kw, i) => ({
      id: Date.now() + i,
      keyword: kw,
      assignee: newCampaignAssignee || "Unassigned",
      status: "Pending"
    }));
    setCampaigns([{ id: Date.now(), name: newCampaignName, tasks: newTasks }, ...campaigns]);
    setSelectedKeywords([]);
    setNewCampaignName("");
    setNewCampaignAssignee("");
    setIsCampaignModalOpen(false);
  };

  const handleRowClick = (kw) => {
    setSelectedItem({
      title: kw.keyword,
      type: "keyword",
      data: kw
    });
  };

  const handleChartClick = (data) => {
    if (data && data.activePayload && data.activePayload.length > 0) {
      setSelectedItem({
        title: data.activePayload[0].payload.name + " Performance",
        type: "chart",
        data: data.activePayload[0].payload
      });
    }
  };

  const getMockCompPos = (kw, comp) => {
    if (!comp) return null;
    const base = parseInt(kw.pos);
    const hash = comp.length + kw.keyword.length;
    const diff = (hash % 10) - 4; 
    return Math.max(1, base + diff);
  };

  const totalClicks = gscData ? gscData.analytics.reduce((acc, row) => acc + row.clicks, 0) : 142800;
  const avgCtr = gscData && gscData.analytics.length > 0 ? ((gscData.analytics.reduce((acc, row) => acc + row.ctr, 0) / gscData.analytics.length) * 100).toFixed(2) + "%" : "3.4%";

  const kpiData = [
    { title: "AI Content Score", value: "87/100", trend: "+4.2", positive: true, icon: Sparkles },
    { title: "Organic Clicks (30d)", value: gscData ? totalClicks.toLocaleString() : "142.8K", trend: gscData ? "" : "+18.3%", positive: true, icon: Activity },
    { title: "Average CTR", value: avgCtr, trend: gscData ? "" : "+1.2%", positive: true, icon: Target },
    { title: "Ranked Keywords", value: "3,847", trend: "+312", positive: true, icon: Search },
  ];

  const keywordOpps = [
    { keyword: "ai content optimization", vol: "12,400", pos: "3", delta: "+2", intent: "Informational", ai: 94 },
    { keyword: "automated seo tools", vol: "8,100", pos: "7", delta: "-1", intent: "Commercial", ai: 88 },
    { keyword: "llm generated content ranking", vol: "4,200", pos: "1", delta: "—", intent: "Informational", ai: 97 },
    { keyword: "search generative experience", vol: "18,600", pos: "12", delta: "+5", intent: "Informational", ai: 76 },
    { keyword: "ai overview optimization", vol: "9,300", pos: "5", delta: "+3", intent: "Commercial", ai: 91 },
    { keyword: "programmatic seo strategy", vol: "6,700", pos: "9", delta: "-2", intent: "Transactional", ai: 82 },
  ];

  const comparisonKeywords = selectedKeywords.length > 0 
    ? keywordOpps.filter(kw => selectedKeywords.includes(kw.keyword))
    : keywordOpps;

  const serpComparisonData = comparisonKeywords.map(kw => ({
    keyword: kw.keyword.length > 15 ? kw.keyword.substring(0, 15) + '...' : kw.keyword,
    "Our Rank": parseInt(kw.pos),
    "Competitor Rank": getMockCompPos(kw, activeCompetitor)
  }));

  const signals = [
    { text: "AI Overview displacement detected on 3 high-traffic pages", time: "2h ago", type: "warning" },
    { text: "Content freshness decay: 12 pages haven't been updated in 90+ days", time: "5h ago", type: "warning" },
    { text: "New keyword cluster identified: 'agentic search optimization' (est. 4.2K vol)", time: "8h ago", type: "success" },
    { text: "Google algorithm update detected — monitoring SERP volatility", time: "1d ago", type: "info" },
  ];

  const serpFeatures = [
    { name: "AI Overview", value: "14/42", trend: "up" },
    { name: "Featured Snippet", value: "23/58", trend: "up" },
    { name: "People Also Ask", value: "31/89", trend: "flat" },
    { name: "Knowledge Panel", value: "4/12", trend: "down" },
    { name: "Image Pack", value: "8/34", trend: "up" },
  ];

  const competitorData = [
    { name: "SearchPilot", overlap: "42%", score: 78, delta: -3 },
    { name: "ContentEdge", overlap: "38%", score: 65, delta: 5 },
    { name: "RankSci", overlap: "55%", score: 71, delta: 1 },
    { name: "Clearscope", overlap: "31%", score: 82, delta: -1 },
  ];

  const llmSources = [
    { name: 'ChatGPT (OpenAI)', sessions: '42.5K', percentage: 45, trend: '+12%', color: 'bg-[#10a37f]' },
    { name: 'Claude (Anthropic)', sessions: '28.3K', percentage: 30, trend: '+18%', color: 'bg-[#d97757]' },
    { name: 'Gemini (Google)', sessions: '14.1K', percentage: 15, trend: '+5%', color: 'bg-[#4285f4]' },
    { name: 'Perplexity', sessions: '6.6K', percentage: 7, trend: '+24%', color: 'bg-[#2563eb]' },
    { name: 'Other LLMs', sessions: '2.8K', percentage: 3, trend: '+2%', color: 'bg-slate-400' },
  ];

  const brandPositioningData = [
    { subject: 'Brand Reputation', OurBrand: 80, Competitor: 60, fullMark: 100 },
    { subject: 'Customer Loyalty', OurBrand: 90, Competitor: 70, fullMark: 100 },
    { subject: 'Customer Service', OurBrand: 85, Competitor: 65, fullMark: 100 },
    { subject: 'Sustainability', OurBrand: 75, Competitor: 85, fullMark: 100 },
    { subject: 'Quality Materials', OurBrand: 88, Competitor: 75, fullMark: 100 },
    { subject: 'Social Responsibility', OurBrand: 70, Competitor: 80, fullMark: 100 },
  ];

  const chartData = gscData && gscData.analytics.length > 0
    ? gscData.analytics.map(row => ({
        name: row.keys[0].split('-').slice(1).join('/'),
        organic: row.clicks,
        ai: Math.round(row.clicks * 0.4), // Simulated AI traffic estimation based on overall organic volume
        impressions: row.impressions,
        ctr: (row.ctr * 100).toFixed(2)
      }))
    : [
        { name: 'Jan', organic: 80, ai: 40 },
        { name: 'Feb', organic: 85, ai: 50 },
        { name: 'Mar', organic: 90, ai: 55 },
        { name: 'Apr', organic: 100, ai: 70 },
        { name: 'May', organic: 110, ai: 80 },
        { name: 'Jun', organic: 125, ai: 105 },
        { name: 'Jul', organic: 142, ai: 125 },
      ];

  return (
    <div className="w-full bg-slate-50 p-6 font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            AI SEO Dashboard
          </h2>
          <p className="text-slate-500 mt-1">Real-time search visibility and AI content optimization</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          {gscError && <span className="text-sm text-rose-500 font-medium bg-rose-50 px-2 py-1 rounded-md">{gscError}</span>}
          <button 
            onClick={handleSyncGSC}
            disabled={isSyncing}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? "animate-spin" : ""}`} />
            {isSyncing ? "Syncing..." : gscData ? "Synced with GSC" : "Connect GSC"}
          </button>
          <Badge variant="outline" className="bg-white px-3 py-1 text-sm border-slate-200">
            Last updated: Just now
          </Badge>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, idx) => (
          <Card key={idx} className="bg-white shadow-sm border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</p>
                  <h3 className="text-3xl font-bold text-slate-900">{kpi.value}</h3>
                </div>
                <div className={`p-2 rounded-lg ${kpi.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  <kpi.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                {kpi.positive ? 
                  <TrendingUp className="w-4 h-4 text-emerald-500" /> : 
                  <TrendingDown className="w-4 h-4 text-emerald-500" />
                }
                <span className={kpi.positive ? "text-emerald-600" : "text-emerald-600"}>{kpi.trend}</span>
                <span className="text-slate-400 font-normal">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 bg-white shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Traffic Origins</CardTitle>
            <CardDescription>Organic Search vs AI-Driven Traffic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} onClick={handleChartClick} style={{ cursor: 'pointer' }}>
                  <defs>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="organic" name="Organic Search" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorOrganic)" />
                  <Area type="monotone" dataKey="ai" name="AI Traffic" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorAi)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Signals */}
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center gap-2">
                <RadarIcon className="w-5 h-5 text-indigo-500" />
                Signals
              </CardTitle>
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-0">{signals.length}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {signals.map((signal, idx) => (
                <div key={idx} className="flex gap-3 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className={`p-1.5 rounded-full shrink-0 mt-0.5 ${
                    signal.type === 'warning' ? 'bg-rose-100 text-rose-600' :
                    signal.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <AlertCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 leading-tight mb-1">{signal.text}</p>
                    <span className="text-xs text-slate-400 font-medium">{signal.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Keywords Table */}
        <Card className="lg:col-span-2 bg-white shadow-sm border-slate-200">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-500" />
                Keyword Opportunities
                <Badge variant="outline" className="ml-2 bg-slate-50 text-slate-500 border-slate-200">AI-Ranked</Badge>
              </CardTitle>
              {selectedKeywords.length > 0 && (
                <button 
                  onClick={() => setIsCampaignModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create Campaign ({selectedKeywords.length})
                </button>
              )}
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-slate-500 font-medium border-b border-slate-200">
                  <th className="pb-3 px-4 w-10"></th>
                  <th className="pb-3 px-4">Keyword</th>
                  <th className="pb-3 px-4 text-right">Volume</th>
                  <th className="pb-3 px-4 text-center">Pos.</th>
                  <th className="pb-3 px-4 text-center">Δ</th>
                  <th className="pb-3 px-4">Intent</th>
                  <th className="pb-3 px-4 text-center">AI Score</th>
                </tr>
              </thead>
              <tbody>
                {keywordOpps.map((kw, idx) => (
                  <tr key={idx} className={`border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer ${selectedKeywords.includes(kw.keyword) ? 'bg-blue-50/50' : ''}`} onClick={() => handleRowClick(kw)}>
                    <td className="py-3 px-4" onClick={(e) => handleKeywordSelect(e, kw)}>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedKeywords.includes(kw.keyword) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 bg-white'}`}>
                        {selectedKeywords.includes(kw.keyword) && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-900">{kw.keyword}</td>
                    <td className="py-3 px-4 text-right text-slate-600">{kw.vol}</td>
                    <td className="py-3 px-4 text-center font-medium">{kw.pos}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                        kw.delta.startsWith('+') ? 'bg-emerald-50 text-emerald-600' :
                        kw.delta.startsWith('-') ? 'bg-rose-50 text-rose-600' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {kw.delta}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        kw.intent === 'Informational' ? 'bg-blue-50 text-blue-700' :
                        kw.intent === 'Commercial' ? 'bg-violet-50 text-violet-700' :
                        'bg-amber-50 text-amber-700'
                      }`}>
                        {kw.intent}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5 font-bold text-slate-800">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        {kw.ai}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* SERP & Competitors */}
        <div className="space-y-6">
          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-500" />
                LLM Traffic Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {llmSources.map((source, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-end mb-1.5">
                      <span className="text-sm font-medium text-slate-700">{source.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-bold text-slate-900">{source.sessions}</span>
                        <span className="text-xs font-medium text-emerald-600 ml-2">{source.trend}</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className={`${source.color} h-2 rounded-full`} style={{ width: `${source.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-500" />
                SERP Features Owned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {serpFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">{feature.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{feature.value}</span>
                      {feature.trend === 'up' && <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />}
                      {feature.trend === 'down' && <TrendingDown className="w-3.5 h-3.5 text-rose-500" />}
                      {feature.trend === 'flat' && <div className="w-3.5 h-0.5 bg-slate-300 rounded" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-500" />
                Competitor Radar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitorData.map((comp, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">
                        {comp.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{comp.name}</p>
                        <p className="text-xs text-slate-500">{comp.overlap} keyword overlap</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">{comp.score}</p>
                      <p className={`text-xs font-medium ${comp.delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {comp.delta > 0 ? '+' : ''}{comp.delta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced SERP Comparison Section */}
      <div className="mt-8 mb-8">
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="pb-3 border-b border-slate-100">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-500" />
                  Advanced SERP Comparison
                </CardTitle>
                <CardDescription>
                  {selectedKeywords.length > 0 
                    ? `Comparing ${selectedKeywords.length} selected keywords against competitor.` 
                    : "Select keywords in the table above to filter this comparison."}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Competitor domain (e.g. searchpilot.com)"
                  className="px-3 py-1.5 border border-slate-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={competitorInput}
                  onChange={e => setCompetitorInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && setActiveCompetitor(competitorInput)}
                />
                <button 
                  onClick={() => setActiveCompetitor(competitorInput)}
                  className="px-4 py-1.5 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800"
                >
                  Compare
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {!activeCompetitor ? (
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-slate-500">
                Enter a competitor domain above to generate the comparison chart.
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serpComparisonData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="keyword" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} dy={10} />
                    <YAxis reversed={true} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value, name) => [`Position ${value}`, name]}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="Our Rank" fill="#3b82f6" radius={[0, 0, 4, 4]} barSize={32} />
                    <Bar dataKey="Competitor Rank" fill="#f43f5e" radius={[0, 0, 4, 4]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Strategy & Campaigns Section */}
      <div className="mt-8 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          Strategy & Content Campaigns
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(campaign => (
            <Card key={campaign.id} className="bg-white shadow-sm border-slate-200">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">{campaign.name}</CardTitle>
                <CardDescription>{campaign.tasks.length} targeted keywords</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {campaign.tasks.map(task => (
                    <div key={task.id} className="flex flex-col gap-1.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-900">{task.keyword}</span>
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                          task.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                          task.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {task.assignee}
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-amber-500" />
                          AI Draft
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          {campaigns.length === 0 && (
             <div className="col-span-full p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200 border-dashed">
               No campaigns created yet. Select keywords above to start a campaign.
             </div>
          )}
        </div>
      </div>

      {/* Brand Positioning Section */}
      <div className="mt-8 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-start-3 lg:col-span-1">
          <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Brand Positioning vs Competitors</CardTitle>
              <CardDescription>Compare AI Favorability on key topics with competitors.</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex justify-center">
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={brandPositioningData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                    <Radar name="Our Brand" dataKey="OurBrand" stroke="#f97316" strokeWidth={2} fill="#f97316" fillOpacity={0.3} dot={{ r: 4, fill: '#f97316' }} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isCampaignModalOpen} onOpenChange={setIsCampaignModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Create Content Campaign
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Campaign Name</label>
              <input 
                type="text" 
                value={newCampaignName}
                onChange={(e) => setNewCampaignName(e.target.value)}
                placeholder="e.g. Q4 Technical SEO Push"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Assign to Team Member</label>
              <input 
                type="text" 
                value={newCampaignAssignee}
                onChange={(e) => setNewCampaignAssignee(e.target.value)}
                placeholder="e.g. Content Team, Sarah"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <p className="text-sm font-medium text-slate-700 mb-2">Selected Keywords ({selectedKeywords.length})</p>
              <div className="flex flex-wrap gap-2">
                {selectedKeywords.map(kw => (
                  <span key={kw} className="inline-flex items-center px-2 py-1 rounded bg-white border border-slate-200 text-xs font-medium text-slate-600">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 flex justify-end gap-3">
              <button 
                onClick={() => setIsCampaignModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateCampaign}
                disabled={!newCampaignName}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create & Assign Tasks
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal View */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              {selectedItem?.title} Details
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedItem?.type === 'keyword' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm font-medium text-slate-500 mb-1">Search Volume</p>
                    <p className="text-2xl font-bold text-slate-900">{selectedItem.data.vol}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm font-medium text-slate-500 mb-1">Position</p>
                    <p className="text-2xl font-bold text-slate-900">{selectedItem.data.pos} <span className="text-sm font-medium text-emerald-600 ml-1">{selectedItem.data.delta}</span></p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm font-medium text-slate-500 mb-1">Intent</p>
                    <p className="text-2xl font-bold text-slate-900">{selectedItem.data.intent}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm font-medium text-slate-500 mb-1">AI Score</p>
                    <p className="text-2xl font-bold text-amber-600 flex items-center gap-1"><Sparkles className="w-4 h-4"/>{selectedItem.data.ai}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Historical Trend</h4>
                  <div className="h-64 w-full bg-slate-50 rounded-xl border border-slate-100 p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={[
                        { date: 'Week 1', pos: parseInt(selectedItem.data.pos) + 5 },
                        { date: 'Week 2', pos: parseInt(selectedItem.data.pos) + 3 },
                        { date: 'Week 3', pos: parseInt(selectedItem.data.pos) + 2 },
                        { date: 'Week 4', pos: parseInt(selectedItem.data.pos) }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                        <YAxis reversed axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                        <Line type="monotone" dataKey="pos" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6'}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}
            {selectedItem?.type === 'chart' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <p className="text-sm font-medium text-blue-600 mb-1">Organic Search Traffic</p>
                    <p className="text-4xl font-bold text-blue-900">{selectedItem.data.organic}k</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                    <p className="text-sm font-medium text-emerald-600 mb-1">AI-Driven Traffic</p>
                    <p className="text-4xl font-bold text-emerald-900">{selectedItem.data.ai}k</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                   <h4 className="text-lg font-semibold text-slate-900 mb-2">Month Summary</h4>
                   <p className="text-slate-600">In {selectedItem.data.name}, total traffic reached {(selectedItem.data.organic + selectedItem.data.ai).toLocaleString()}k sessions. AI-driven traffic accounted for {Math.round((selectedItem.data.ai / (selectedItem.data.organic + selectedItem.data.ai)) * 100)}% of the total volume, continuing the upward growth trend.</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
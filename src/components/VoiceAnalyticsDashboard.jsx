import React from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area,
  BarChart, Bar, PieChart, Pie, Cell } from
"recharts";
import { Activity, AlertTriangle, CheckCircle, Mic, TrendingUp } from "lucide-react";

// Mock data for analytics
const accuracyData = [
{ week: 'W1', accuracy: 82, target: 95 },
{ week: 'W2', accuracy: 85, target: 95 },
{ week: 'W3', accuracy: 89, target: 95 },
{ week: 'W4', accuracy: 92, target: 95 },
{ week: 'W5', accuracy: 94, target: 95 },
{ week: 'W6', accuracy: 96, target: 95 },
{ week: 'W7', accuracy: 97, target: 95 },
{ week: 'W8', accuracy: 98, target: 95 }];


const errorData = [
{ name: 'Background Noise', value: 45 },
{ name: 'Muffled Speech', value: 25 },
{ name: 'Complex Med Terms', value: 20 },
{ name: 'Accent/Dialect', value: 10 }];


const usageData = [
{ day: 'Mon', sessions: 42, commands: 310 },
{ day: 'Tue', sessions: 56, commands: 425 },
{ day: 'Wed', sessions: 51, commands: 380 },
{ day: 'Thu', sessions: 64, commands: 490 },
{ day: 'Fri', sessions: 58, commands: 450 },
{ day: 'Sat', sessions: 12, commands: 85 },
{ day: 'Sun', sessions: 8, commands: 40 }];


const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6'];

export default function VoiceAnalyticsDashboard() {
  return (
    <div className="w-full font-sans">
      <div className="mb-8">
        <h3 className="text-slate-100 mb-2 text-2xl font-semibold">Model Performance Analytics</h3>
        <p className="text-slate-100">Real-time monitoring of voice recognition accuracy, error classifications, and clinical usage patterns.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Overall Accuracy</div>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle className="w-4 h-4" /></div>
          </div>
          <div className="text-slate-200 mb-1 text-3xl font-light">98.2%</div>
          <div className="text-emerald-500 text-xs font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +2.4% this month</div>
        </div>

        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Error Rate</div>
            <div className="bg-purple-900 text-slate-100 p-2 rounded-lg"><AlertTriangle className="w-4 h-4" /></div>
          </div>
          <div className="text-slate-100 mb-1 text-3xl font-light">1.8%</div>
          <div className="text-emerald-500 text-xs font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> -1.2% this month</div>
        </div>

        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Daily Commands</div>
            <div className="bg-blue-500 text-blue-600 p-2 rounded-lg"><Mic className="text-slate-100 lucide lucide-mic w-4 h-4" /></div>
          </div>
          <div className="text-slate-200 mb-1 text-3xl font-light">385</div>
          <div className="text-emerald-500 text-xs font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +45 this week</div>
        </div>

        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Active Sessions</div>
            <div className="bg-sky-500 text-indigo-600 p-2 rounded-lg"><Activity className="w-4 h-4" /></div>
          </div>
          <div className="text-slate-200 mb-1 text-3xl font-light">54</div>
          <div className="text-emerald-500 text-xs font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +12 this week</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Accuracy Trend */}
        <div className="bg-slate-950 p-6 rounded-2xl lg:col-span-2 border border-slate-200 shadow-sm">
          <h4 className="text-slate-100 mb-6 text-sm font-semibold">Recognition Accuracy Trend</h4>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={accuracyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} domain={[70, 100]} />
                <RechartsTooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '13px' }}
                  labelStyle={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }} />
                
                <Area type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorAccuracy)" name="Accuracy %" />
                <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" dot={false} name="Target %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Error Breakdown */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-slate-100 mb-6 text-sm font-semibold">Error Classification</h4>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={errorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value">
                  
                  {errorData.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  )}
                </Pie>
                <RechartsTooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '13px' }} />
                
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {errorData.map((entry, index) =>
            <div key={entry.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-slate-600">{entry.name}</span>
                </div>
                <span className="text-slate-100 font-medium">{entry.value}%</span>
              </div>
            )}
          </div>
        </div>

        {/* Session Usage */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900 mb-6">Weekly Usage Frequency</h4>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <RechartsTooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f1f5f9' }} />
                
                <Bar yAxisId="left" dataKey="commands" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Voice Commands" maxBarSize={40} />
                <Line yAxisId="right" type="monotone" dataKey="sessions" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} name="Active Sessions" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>);

}
import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell
} from 'recharts';
import { Target, Activity, TrendingUp } from 'lucide-react';

const conversionData = [
  { month: 'Jan', control: 2.1, variant: 2.1 },
  { month: 'Feb', control: 2.2, variant: 2.4 },
  { month: 'Mar', control: 2.1, variant: 2.8 },
  { month: 'Apr', control: 2.3, variant: 3.2 },
  { month: 'May', control: 2.2, variant: 3.6 },
  { month: 'Jun', control: 2.4, variant: 4.1 },
];

const significanceData = [
  { name: 'Hero Copy', lift: 15, pValue: 0.02 },
  { name: 'Social Proof', lift: 8, pValue: 0.08 },
  { name: 'Invite Flow', lift: 22, pValue: 0.01 },
  { name: 'Paywall', lift: 12, pValue: 0.04 },
  { name: 'Upsell', lift: -2, pValue: 0.45 },
];

const impactData = [
  { name: 'Acquisition', value: 45000 },
  { name: 'Activation', value: 25000 },
  { name: 'Engagement', value: 35000 },
  { name: 'Retention', value: 55000 },
  { name: 'Monetization', value: 85000 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">Dashboard</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Experiment Analytics</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Visualize performance data, A/B test significance, and the total business impact of your growth design experiments over time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Target className="w-6 h-6" /></div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase">Total Lift</p>
                <h3 className="text-2xl font-black text-slate-900">+24.5%</h3>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Activity className="w-6 h-6" /></div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase">Significant Results</p>
                <h3 className="text-2xl font-black text-slate-900">18 / 24</h3>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase">Revenue Impact</p>
                <h3 className="text-2xl font-black text-slate-900">$245k</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Conversion Rate Trends</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(val) => `${val}%`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" />
                  <Line type="monotone" dataKey="control" name="Control" stroke="#94a3b8" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="variant" name="Variant" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">A/B Test Significance (Lift %)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={significanceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(val) => `${val}%`} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} width={100} />
                  <Tooltip 
                    cursor={{ fill: '#f1f5f9' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="lift" name="Lift (%)" radius={[0, 4, 4, 0]}>
                    {significanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.pValue < 0.05 ? '#10b981' : '#cbd5e1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Statistically Significant (p &lt; 0.05)</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-slate-300"></div> Not Significant</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Pie Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Total Impact by Lifecycle Phase</h3>
              <p className="text-slate-600 mb-6 text-sm">Distribution of estimated annual revenue impact across different stages of the user journey.</p>
              
              <div className="space-y-4">
                {impactData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="font-medium text-slate-700">{entry.name}</span>
                    </div>
                    <span className="font-bold text-slate-900">${(entry.value).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `$${value.toLocaleString()}`}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
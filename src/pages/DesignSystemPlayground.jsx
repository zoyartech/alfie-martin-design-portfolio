import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Palette, Type, Square } from "lucide-react";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DesignSystemPlayground() {
  const [primaryColor, setPrimaryColor] = useState("#0f172a");
  const [secondaryColor, setSecondaryColor] = useState("#f1f5f9");
  const [borderRadius, setBorderRadius] = useState(6);
  const [fontFamily, setFontFamily] = useState("system-ui, sans-serif");
  const [baseFontSize, setBaseFontSize] = useState(16);

  const resetTokens = () => {
    setPrimaryColor("#0f172a");
    setSecondaryColor("#f1f5f9");
    setBorderRadius(6);
    setFontFamily("system-ui, sans-serif");
    setBaseFontSize(16);
  };

  // The dynamic styles applied to the preview container
  const previewStyles = {
    "--theme-primary": primaryColor,
    "--theme-secondary": secondaryColor,
    "--theme-radius": `${borderRadius}px`,
    fontFamily: fontFamily,
    fontSize: `${baseFontSize}px`,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* Header */}
      <div className="pt-32 pb-12 px-6 lg:px-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-light mb-4 text-slate-900">
              Design System Playground
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Live-edit component variants and styling tokens to see changes reflected in real-time across UI patterns.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Editor Panel */}
          <div className="lg:col-span-4 space-y-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Palette className="w-4 h-4" /> Theme Editor
              </h2>
              <Button variant="ghost" size="sm" onClick={resetTokens} className="h-8 text-xs px-2 text-slate-500">
                <RefreshCw className="w-3 h-3 mr-2" /> Reset
              </Button>
            </div>

            <div className="space-y-6">
              {/* Colors */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Colors</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium">Primary</label>
                    <div className="flex gap-2">
                      <Input 
                        type="color" 
                        value={primaryColor} 
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-12 h-10 p-1 cursor-pointer"
                      />
                      <Input 
                        type="text" 
                        value={primaryColor} 
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="font-mono text-xs uppercase"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-medium">Secondary Base</label>
                    <div className="flex gap-2">
                      <Input 
                        type="color" 
                        value={secondaryColor} 
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-12 h-10 p-1 cursor-pointer"
                      />
                      <Input 
                        type="text" 
                        value={secondaryColor} 
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="font-mono text-xs uppercase"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Type className="w-4 h-4" /> Typography
                </h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-medium">Font Family</label>
                  <Select value={fontFamily} onValueChange={setFontFamily}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system-ui, sans-serif">System Sans</SelectItem>
                      <SelectItem value="'Inter', sans-serif">Inter</SelectItem>
                      <SelectItem value="'PT Serif', serif">PT Serif</SelectItem>
                      <SelectItem value="'JetBrains Mono', monospace">JetBrains Mono</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium">Base Size ({baseFontSize}px)</label>
                  </div>
                  <Slider 
                    value={[baseFontSize]} 
                    min={12} max={24} step={1}
                    onValueChange={(val) => setBaseFontSize(val[0])}
                  />
                </div>
              </div>

              {/* Shape */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Square className="w-4 h-4" /> Shape
                </h3>
                
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium">Border Radius ({borderRadius}px)</label>
                  </div>
                  <Slider 
                    value={[borderRadius]} 
                    min={0} max={32} step={1}
                    onValueChange={(val) => setBorderRadius(val[0])}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Preview Panel */}
          <div className="lg:col-span-8 space-y-8">
            <div 
              className="bg-white p-8 rounded-xl shadow-md border border-slate-200 transition-all duration-200"
              style={previewStyles}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .playground-preview-btn {
                  background-color: var(--theme-primary);
                  border-radius: var(--theme-radius);
                  color: #fff;
                  transition: opacity 0.2s;
                }
                .playground-preview-btn:hover {
                  opacity: 0.9;
                }
                .playground-preview-btn-outline {
                  background-color: transparent;
                  border: 1px solid var(--theme-primary);
                  color: var(--theme-primary);
                  border-radius: var(--theme-radius);
                }
                .playground-preview-btn-outline:hover {
                  background-color: var(--theme-secondary);
                }
                .playground-preview-card {
                  border-radius: calc(var(--theme-radius) + 4px);
                  background-color: #fff;
                  border: 1px solid #e2e8f0;
                  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                  overflow: hidden;
                }
                .playground-preview-input {
                  border-radius: var(--theme-radius);
                  border: 1px solid #cbd5e1;
                  padding: 0.5rem 0.75rem;
                  width: 100%;
                  outline: none;
                }
                .playground-preview-input:focus {
                  border-color: var(--theme-primary);
                  box-shadow: 0 0 0 1px var(--theme-primary);
                }
                .playground-preview-badge {
                  background-color: var(--theme-secondary);
                  color: var(--theme-primary);
                  border-radius: calc(var(--theme-radius) * 2);
                  padding: 0.125rem 0.625rem;
                  font-size: 0.75em;
                  font-weight: 500;
                }
              `}} />

              <div className="space-y-12">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold" style={{ color: primaryColor }}>Typography & Hierarchy</h1>
                  <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                    This is a preview of the base typography scale. The font family is currently set to {fontFamily}. 
                    Notice how the reading experience changes as you adjust the base font size and typeface.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Interactive Elements</h2>
                  <div className="flex flex-wrap gap-4">
                    <button className="playground-preview-btn px-4 py-2 font-medium">
                      Primary Action
                    </button>
                    <button className="playground-preview-btn-outline px-4 py-2 font-medium">
                      Secondary Action
                    </button>
                    <button className="px-4 py-2 font-medium text-slate-600 hover:text-slate-900 transition-colors" style={{ borderRadius: borderRadius }}>
                      Ghost Button
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Forms & Inputs</h2>
                  <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <input type="email" placeholder="you@example.com" className="playground-preview-input" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Password</label>
                      <input type="password" placeholder="••••••••" className="playground-preview-input" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Cards & Surfaces</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="playground-preview-card p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold" style={{ color: primaryColor }}>Project Alpha</h3>
                        <span className="playground-preview-badge">Active</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-6">
                        A showcase of how surface treatments, borders, and rounded corners compound to create a distinct visual identity.
                      </p>
                      <div className="flex justify-end">
                        <button className="playground-preview-btn px-4 py-2 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="playground-preview-card bg-slate-50 border-dashed border-2">
                      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: secondaryColor, color: primaryColor }}>
                          <span className="text-xl">+</span>
                        </div>
                        <h3 className="font-medium text-slate-900">Create New Asset</h3>
                        <p className="text-xs text-slate-500 mt-1">Start from a blank canvas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
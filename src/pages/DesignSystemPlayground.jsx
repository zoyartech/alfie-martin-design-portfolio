import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Palette, Type, Square, Moon, Sun, Layout, Monitor, Smartphone, Tablet, GripVertical, Code, Download } from "lucide-react";
import { createPageUrl } from "@/utils";
import ComponentShowcase from "./ComponentShowcase";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function DesignSystemPlayground() {
  const [primaryColor, setPrimaryColor] = useState("#0f172a");
  const [secondaryColor, setSecondaryColor] = useState("#f1f5f9");
  const [borderRadius, setBorderRadius] = useState(6);
  const [fontFamily, setFontFamily] = useState("system-ui, sans-serif");
  const [baseFontSize, setBaseFontSize] = useState(16);
  const [spacing, setSpacing] = useState(1);
  const [shadows, setShadows] = useState(1);
  const [motionSpeed, setMotionSpeed] = useState(0.2);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewport, setViewport] = useState("desktop");
  const [previewSections, setPreviewSections] = useState([
  "typography", "interactive", "forms", "cards", "templates"]
  );

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(previewSections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPreviewSections(items);
  };

  const resetTokens = () => {
    setPrimaryColor("#0f172a");
    setSecondaryColor("#f1f5f9");
    setBorderRadius(6);
    setFontFamily("system-ui, sans-serif");
    setBaseFontSize(16);
    setSpacing(1);
    setShadows(1);
    setMotionSpeed(0.2);
  };

  const getLuminance = (hex) => {
    let rgb = hex.replace(/^#/, '');
    if (rgb.length === 3) rgb = rgb[0] + rgb[0] + rgb[1] + rgb[1] + rgb[2] + rgb[2];
    const r = parseInt(rgb.slice(0, 2), 16) / 255;
    const g = parseInt(rgb.slice(2, 4), 16) / 255;
    const b = parseInt(rgb.slice(4, 6), 16) / 255;
    const a = [r, g, b].map((v) => {
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (color1, color2) => {
    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    return (brightest + 0.05) / (darkest + 0.05);
  };

  const getContrastSuggestion = (ratio) => {
    if (ratio >= 7) return { text: "AAA Pass", icon: "check", color: "text-green-600", bg: "bg-green-100", tip: "Excellent contrast." };
    if (ratio >= 4.5) return { text: "AA Pass", icon: "check", color: "text-green-600", bg: "bg-green-100", tip: "Good contrast for all text." };
    if (ratio >= 3) return { text: "AA Large", icon: "alert", color: "text-amber-600", bg: "bg-amber-100", tip: "Passes for large text (18pt+) only. Consider darkening the primary color or lightening the background." };
    return { text: "Fail", icon: "x", color: "text-red-600", bg: "bg-red-100", tip: "Insufficient contrast. Adjust the colors significantly to meet WCAG standards." };
  };

  const bgHex = isDarkMode ? "#020617" : "#ffffff";
  const primaryContrast = getContrastRatio(primaryColor, bgHex);
  const secondaryContrast = getContrastRatio(secondaryColor, bgHex);
  const primaryStatus = getContrastSuggestion(primaryContrast);
  const secondaryStatus = getContrastSuggestion(secondaryContrast);

  const exportTokens = (format) => {
    let content = "";
    let filename = "";
    let mimeType = "text/plain";

    if (format === "json") {
      content = JSON.stringify({
        primaryColor,
        secondaryColor,
        borderRadius,
        fontFamily,
        baseFontSize,
        spacing,
        shadows,
        motionSpeed
      }, null, 2);
      filename = "tokens.json";
      mimeType = "application/json";
    } else if (format === "css") {
      content = ":root {\\n  --theme-primary: " + primaryColor + ";\\n  --theme-secondary: " + secondaryColor + ";\\n  --theme-radius: " + borderRadius + "px;\\n  --theme-font-family: " + fontFamily + ";\\n  --theme-font-size: " + baseFontSize + "px;\\n  --theme-spacing: " + spacing + ";\\n  --theme-shadow-intensity: " + shadows + ";\\n  --theme-motion-speed: " + motionSpeed + "s;\\n}";
      filename = "tokens.css";
      mimeType = "text/css";
    } else if (format === "tailwind") {
      content = "module.exports = {\\n  theme: {\\n    extend: {\\n      colors: {\\n        primary: '" + primaryColor + "',\\n        secondary: '" + secondaryColor + "',\\n      },\\n      borderRadius: {\\n        DEFAULT: '" + borderRadius + "px',\\n      },\\n      fontFamily: {\\n        sans: '" + fontFamily + "',\\n      },\\n    }\\n  }\\n}";
      filename = "tailwind.theme.js";
      mimeType = "text/javascript";
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // The dynamic styles applied to the preview container
  const previewStyles = {
    "--theme-primary": primaryColor,
    "--theme-secondary": secondaryColor,
    "--theme-bg": isDarkMode ? "#020617" : "#ffffff",
    "--theme-card-bg": isDarkMode ? "#0f172a" : "#ffffff",
    "--theme-text": isDarkMode ? "#f8fafc" : "#0f172a",
    "--theme-text-muted": isDarkMode ? "#94a3b8" : "#475569",
    "--theme-border": isDarkMode ? "#1e293b" : "#e2e8f0",
    "--theme-radius": `${borderRadius}px`,
    fontFamily: fontFamily,
    fontSize: `${baseFontSize}px`,
    backgroundColor: "var(--theme-bg)",
    color: "var(--theme-text)",
    padding: `${spacing * 2}rem`,
    gap: `${spacing}rem`,
    boxShadow: isDarkMode ? 'none' : `0 ${shadows * 10}px ${shadows * 15}px -3px rgb(0 0 0 / 0.1), 0 ${shadows * 4}px ${shadows * 6}px -4px rgb(0 0 0 / 0.1)`,
    transition: `all ${motionSpeed}s ease-in-out`
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
            transition={{ duration: 0.6 }}>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-light text-slate-900">
                  Design System Playground
                </h1>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-full">

                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>dark mode</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  className="gap-2"
                  variant="outline"
                  onClick={() => document.getElementById('component-library')?.scrollIntoView({ behavior: 'smooth' })}>

                  <Layout className="w-4 h-4" /> View Library
                </Button>
                <Button asChild className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
                  <Link to="/DeveloperHandoff">
                    <Code className="w-4 h-4" /> Developer Handoff
                  </Link>
                </Button>
              </div>
            </div>
            <div className="text-lg text-slate-600 max-w-3xl space-y-6 mt-4">
              <p>
                Live-edit component variants and styling tokens to see changes reflected in real-time across UI patterns.
              </p>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">Why this exists</h2>
                <p>
                  I built this system because I was rebuilding the same five things on every project. Buttons that almost matched. Spacing that drifted by 2px between screens. Form fields with three different focus states depending on which file I copied from. The playground is where I keep the canonical versions. This document is how I keep track of what they are and how they should behave.
                </p>
                <p className="mt-2">
                  It is also a portfolio piece. I want anyone who lands here to see how I think about systems: tokens before components, behavior before decoration, accessibility before everything.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">Principles</h2>
                <ul className="space-y-3">
                  <li><strong>Clarity over cleverness.</strong> If a component needs a tooltip to be understood, the component is wrong. I rewrite before I document.</li>
                  <li><strong>Tokens before components.</strong> Every color, space, radius, and shadow is a named token. Components reference tokens. Screens reference components. I never hard-code a value at the screen level.</li>
                  <li><strong>Predictability is a feature.</strong> A button should look and behave the same whether it lives in a marketing page, an onboarding flow, or an admin panel. Surprise is friction.</li>
                  <li><strong>Accessibility is the baseline, not the polish pass.</strong> WCAG 2.1 AA is the floor. Focus states, contrast ratios, keyboard paths, and screen reader behavior get specified at the same time as visual design, not after.</li>
                </ul>
              </div>
            </div>
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
              <div className="flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 text-xs px-2 text-slate-500">
                      <Download className="w-3 h-3 mr-2" /> Export
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => exportTokens("json")}>Export as JSON</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => exportTokens("css")}>Export CSS Variables</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => exportTokens("tailwind")}>Export Tailwind Config</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="sm" onClick={resetTokens} className="h-8 text-xs px-2 text-slate-500">
                  <RefreshCw className="w-3 h-3 mr-2" /> Reset
                </Button>
              </div>
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
                        className="w-12 h-10 p-1 cursor-pointer" />
                      
                      <Input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="font-mono text-xs uppercase" />
                      
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-medium">Secondary Base</label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-12 h-10 p-1 cursor-pointer" />
                      
                      <Input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="font-mono text-xs uppercase" />
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility Analyzer */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">WCAG Contrast</h3>
                <div className="space-y-3">
                  <div className="flex flex-col gap-1.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-700">Primary on Background</span>
                      <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${primaryStatus.bg} ${primaryStatus.color}`}>
                        {primaryStatus.text} ({primaryContrast.toFixed(2)}:1)
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">{primaryStatus.tip}</p>
                    <div 
                      className="mt-1 w-full h-8 rounded border flex items-center justify-center text-xs font-medium" 
                      style={{ backgroundColor: bgHex, color: primaryColor, borderColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}
                    >
                      Sample Text
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-700">Secondary on Background</span>
                      <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${secondaryStatus.bg} ${secondaryStatus.color}`}>
                        {secondaryStatus.text} ({secondaryContrast.toFixed(2)}:1)
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">{secondaryStatus.tip}</p>
                    <div 
                      className="mt-1 w-full h-8 rounded border flex items-center justify-center text-xs font-medium" 
                      style={{ backgroundColor: bgHex, color: secondaryColor, borderColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}
                    >
                      Sample Text
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
                    onValueChange={(val) => setBaseFontSize(val[0])} />
                  
                </div>
              </div>

              {/* Shape, Space & Motion */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Square className="w-4 h-4" /> Layout & Effects
                </h3>
                
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium">Border Radius ({borderRadius}px)</label>
                  </div>
                  <Slider
                    value={[borderRadius]}
                    min={0} max={32} step={1}
                    onValueChange={(val) => setBorderRadius(val[0])} />
                  
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium">Spacing Multiplier ({spacing}x)</label>
                  </div>
                  <Slider
                    value={[spacing]}
                    min={0.5} max={3} step={0.1}
                    onValueChange={(val) => setSpacing(val[0])} />
                  
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium">Shadow Intensity ({shadows}x)</label>
                  </div>
                  <Slider
                    value={[shadows]}
                    min={0} max={3} step={0.1}
                    onValueChange={(val) => setShadows(val[0])} />
                  
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium">Motion Speed ({motionSpeed}s)</label>
                  </div>
                  <Slider
                    value={[motionSpeed]}
                    min={0} max={1} step={0.05}
                    onValueChange={(val) => setMotionSpeed(val[0])} />
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Preview Panel */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                Preview
              </h2>
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-sm">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 rounded-md transition-all ${viewport === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                  onClick={() => setViewport("mobile")}>
                  
                  <Smartphone className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Mobile</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 rounded-md transition-all ${viewport === 'tablet' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                  onClick={() => setViewport("tablet")}>
                  
                  <Tablet className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Tablet</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 rounded-md transition-all ${viewport === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                  onClick={() => setViewport("desktop")}>
                  
                  <Monitor className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Desktop</span>
                </Button>
              </div>
            </div>

            <div className={`transition-all duration-500 mx-auto ${viewport === 'mobile' ? 'w-[375px] max-w-full' : viewport === 'tablet' ? 'w-[768px] max-w-full' : 'w-full'}`}>
            <div
                className="p-8 rounded-xl shadow-md border transition-all duration-200 overflow-hidden"
                style={{ ...previewStyles, borderColor: "var(--theme-border)" }}>
                
              <style dangerouslySetInnerHTML={{ __html: `
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
                  background-color: var(--theme-card-bg);
                  border: 1px solid var(--theme-border);
                  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                  overflow: hidden;
                }
                .playground-preview-input {
                  background-color: var(--theme-bg);
                  color: var(--theme-text);
                  border-radius: var(--theme-radius);
                  border: 1px solid var(--theme-border);
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
              ` }} />

              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="preview-sections">
                  {(provided) =>
                    <div className="space-y-12" {...provided.droppableProps} ref={provided.innerRef}>
                      {previewSections.map((sectionId, index) =>
                      <Draggable key={sectionId} draggableId={sectionId} index={index}>
                          {(provided) =>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="relative group bg-white/5 p-4 rounded-xl -m-4 hover:bg-slate-100/50 transition-colors">
                          
                              <div
                            {...provided.dragHandleProps}
                            className="absolute -left-2 top-6 opacity-0 group-hover:opacity-100 p-1 cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600 transition-opacity">
                            
                                <GripVertical className="w-5 h-5" />
                              </div>
                              
                              {sectionId === "typography" &&
                          <div className="space-y-4">
                                  <h1 className="text-3xl font-bold" style={{ color: primaryColor }}>Typography & Hierarchy</h1>
                                  <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--theme-text-muted)" }}>
                                    This is a preview of the base typography scale. The font family is currently set to {fontFamily}. 
                                    Notice how the reading experience changes as you adjust the base font size and typeface.
                                  </p>
                                </div>
                          }

                              {sectionId === "interactive" &&
                          <div className="space-y-4">
                                  <h2 className="text-xl font-semibold border-b pb-2" style={{ borderColor: "var(--theme-border)" }}>Interactive Elements</h2>
                                  <div className="flex flex-wrap gap-4">
                                    <button className="playground-preview-btn px-4 py-2 font-medium">
                                      Primary Action
                                    </button>
                                    <button className="playground-preview-btn-outline px-4 py-2 font-medium">
                                      Secondary Action
                                    </button>
                                    <button className="px-4 py-2 font-medium hover:opacity-80 transition-colors" style={{ borderRadius: borderRadius, color: "var(--theme-text-muted)" }}>
                                      Ghost Button
                                    </button>
                                  </div>
                                </div>
                          }

                              {sectionId === "forms" &&
                          <div className="space-y-4">
                                  <h2 className="text-xl font-semibold border-b pb-2" style={{ borderColor: "var(--theme-border)" }}>Forms & Inputs</h2>
                                  <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                                    <div className="space-y-2">
                                      <label className="text-sm font-medium">Email Address</label>
                                      <input type="email" placeholder="you@example.com" className="playground-preview-input" />
                                    </div>
                                    <div className="space-y-2">
                                      <label className="text-sm font-medium">Password</label>
                                      <input type="password" placeholder="••••••••" className="playground-preview-input" />
                                    </div>
                                  </div>
                                </div>
                          }

                              {sectionId === "cards" &&
                          <div className="space-y-4">
                                  <h2 className="text-xl font-semibold border-b pb-2" style={{ borderColor: "var(--theme-border)" }}>Cards & Surfaces</h2>
                                  <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="playground-preview-card p-6">
                                      <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-bold" style={{ color: primaryColor }}>Project Alpha</h3>
                                        <span className="playground-preview-badge">Active</span>
                                      </div>
                                      <p className="text-sm mb-6" style={{ color: "var(--theme-text-muted)" }}>
                                        A showcase of how surface treatments, borders, and rounded corners compound to create a distinct visual identity.
                                      </p>
                                      <div className="flex justify-end">
                                        <button className="playground-preview-btn px-4 py-2 text-sm font-medium">
                                          View Details
                                        </button>
                                      </div>
                                    </div>
                                    
                                    <div className="playground-preview-card border-dashed border-2" style={{ backgroundColor: "var(--theme-bg)" }}>
                                      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                                        <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: secondaryColor, color: primaryColor }}>
                                          <span className="text-xl">+</span>
                                        </div>
                                        <h3 className="font-medium" style={{ color: "var(--theme-text)" }}>Create New Asset</h3>
                                        <p className="text-xs mt-1" style={{ color: "var(--theme-text-muted)" }}>Start from a blank canvas</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          }

                              {sectionId === "templates" &&
                          <div className="space-y-4">
                                  <h2 className="text-xl font-semibold border-b pb-2" style={{ borderColor: "var(--theme-border)" }}>Layout Templates</h2>
                                  <div className="playground-preview-card flex flex-col overflow-hidden" style={{ height: "200px" }}>
                                    <div className="h-10 flex items-center px-4 shrink-0" style={{ borderBottom: "1px solid var(--theme-border)", backgroundColor: "var(--theme-bg)" }}>
                                      <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--theme-border)" }}></div>
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--theme-border)" }}></div>
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--theme-border)" }}></div>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 min-h-0">
                                      <div className="w-32 shrink-0 p-3 flex flex-col gap-2" style={{ borderRight: "1px solid var(--theme-border)", backgroundColor: "var(--theme-secondary)" }}>
                                        <div className="h-4 rounded" style={{ backgroundColor: "var(--theme-border)", width: "80%" }}></div>
                                        <div className="h-4 rounded" style={{ backgroundColor: "var(--theme-border)", width: "60%" }}></div>
                                        <div className="h-4 rounded" style={{ backgroundColor: "var(--theme-border)", width: "90%" }}></div>
                                      </div>
                                      <div className="flex-1 p-4 flex flex-col gap-4" style={{ backgroundColor: "var(--theme-bg)" }}>
                                        <div className="h-6 rounded" style={{ backgroundColor: primaryColor, width: "40%" }}></div>
                                        <div className="flex gap-3">
                                          <div className="flex-1 h-20 rounded" style={{ border: "1px solid var(--theme-border)" }}></div>
                                          <div className="flex-1 h-20 rounded" style={{ border: "1px solid var(--theme-border)" }}></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          }
                            </div>
                        }
                        </Draggable>
                      )}
                      {provided.placeholder}
                    </div>
                    }
                </Droppable>
              </DragDropContext>
              
            </div>
            </div>
          </div>
          
        </div>
      </div>

      <div id="component-library" className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="max-w-[90rem] mx-auto">
          <ComponentShowcase isEmbedded={true} />
        </div>
      </div>
    </div>);

}
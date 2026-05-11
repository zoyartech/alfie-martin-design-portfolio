import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Search, Check, ChevronRight, Circle, Play, Pause, Settings, 
  User, Mail, Lock, Eye, EyeOff, CalendarIcon, UploadCloud, Bell, Activity, 
  CreditCard, ChevronDown, Plus, Trash2, Heart, Share2, MessageCircle,
  MoreVertical, Home, Star, Download, LogOut, CheckCircle2, AlertCircle, Info,
  Command, Palette, Layout, Type, Upload, Paperclip, Send,
  Bold, Italic, Underline, List, ListOrdered, ChevronLeft
} from "lucide-react";
import { createPageUrl } from "@/utils";
import ReactQuill from "react-quill";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Calendar } from "@/components/ui/calendar";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from "recharts";

const Section = ({ title, description, children, id }) => (
  <section id={id} className="scroll-mt-32 border-b border-slate-200 pb-16 mb-16">
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">{title}</h2>
      {description && <p className="text-slate-500 mt-2 text-lg">{description}</p>}
    </div>
    <div className="space-y-12">
      {children}
    </div>
  </section>
);

const Block = ({ title, children, fullWidth }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium text-slate-900">{title}</h3>
    <div className={`p-6 bg-white border border-slate-200 rounded-xl flex ${fullWidth ? 'flex-col' : 'flex-wrap items-center'} gap-6 overflow-hidden`}>
      {children}
    </div>
  </div>
);

const chartData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
];

const pieData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ComponentShowcase({ isEmbedded = false }) {
  const [activeTab, setActiveTab] = useState("buttons");
  const [date, setDate] = useState(new Date());

  const scrollTo = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: "buttons", label: "Buttons & Actions" },
    { id: "inputs", label: "Inputs & Forms" },
    { id: "navigation", label: "Navigation" },
    { id: "data", label: "Data Display" },
    { id: "feedback", label: "Feedback & Overlays" },
    { id: "charts", label: "Charts & Metrics" },
    { id: "patterns", label: "Complex Patterns" }
  ];

  return (
    <div className={isEmbedded ? "pb-24 font-sans w-full" : "min-h-screen bg-slate-50 text-slate-900 pb-24 font-sans"}>
      {!isEmbedded && (
        <div className="sticky top-0 z-50 pt-8 pb-4 px-6 lg:px-12 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-[90rem] mx-auto flex items-center justify-between">
             <div>
               <Link to={createPageUrl("DesignSystemPlayground")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-2">
                 <ArrowLeft className="w-4 h-4 mr-2" /> Back to Design System
               </Link>
               <h1 className="text-2xl font-bold">Component Library & Showcase</h1>
               <p className="text-slate-500 text-sm">Extensive collection of all UI components, tokens, and blocks.</p>
             </div>
          </div>
        </div>
      )}
      
      <div className={isEmbedded ? "w-full py-12 flex flex-col lg:flex-row gap-12 items-start relative" : "max-w-[90rem] mx-auto px-6 lg:px-12 py-12 flex gap-12 items-start relative"}>
         <div className={`w-64 shrink-0 sticky hidden lg:block space-y-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm ${isEmbedded ? "top-24" : "top-40"}`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-4">Categories</h4>
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                {item.label}
              </button>
            ))}
         </div>

         <div className="flex-1 min-w-0">
            <Section id="buttons" title="Buttons & Actions" description="Interactive triggers and commands for users to take action.">
              <Block title="Standard Buttons">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
                <Button disabled>Disabled</Button>
              </Block>
              <Block title="Icon & Floating Action Buttons">
                <Button size="icon"><Settings className="w-4 h-4" /></Button>
                <Button className="gap-2"><Mail className="w-4 h-4" /> With Icon</Button>
                <Button className="rounded-full w-14 h-14 shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white" size="icon"><Plus className="w-6 h-6" /></Button>
              </Block>
              <Block title="Button Groups & Toggles">
                <div className="flex rounded-md shadow-sm">
                  <Button variant="outline" className="rounded-r-none">Left</Button>
                  <Button variant="outline" className="rounded-none border-x-0">Middle</Button>
                  <Button variant="outline" className="rounded-l-none">Right</Button>
                </div>
                <ToggleGroup type="single" defaultValue="a">
                  <ToggleGroupItem value="a">Map</ToggleGroupItem>
                  <ToggleGroupItem value="b">List</ToggleGroupItem>
                  <ToggleGroupItem value="c">Grid</ToggleGroupItem>
                </ToggleGroup>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
              </Block>
            </Section>

            <Section id="inputs" title="Inputs & Forms" description="Data entry, selection controls, and form patterns.">
              <Block title="Text Inputs" fullWidth>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>Standard Input</Label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Search / Icon Input</Label>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <Input className="pl-9" placeholder="Search components..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Password Input</Label>
                    <div className="relative">
                      <Input type="password" defaultValue="password123" />
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-10 w-10"><Eye className="w-4 h-4 text-slate-400" /></Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Number Input</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Text Area</Label>
                    <Textarea placeholder="Type your message here." />
                  </div>
                </div>
              </Block>
              
              <Block title="Selection Controls">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                  <div className="space-y-4">
                    <Label className="text-base">Checkboxes</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="font-normal">Accept terms and conditions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" defaultChecked />
                      <Label htmlFor="marketing" className="font-normal">Marketing emails</Label>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-base">Radio Group</Label>
                    <RadioGroup defaultValue="comfortable">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1" className="font-normal">Default</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2" className="font-normal">Comfortable</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-base">Switches / Toggles</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode" className="font-normal">Airplane Mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" defaultChecked />
                      <Label htmlFor="notifications" className="font-normal">Notifications</Label>
                    </div>
                  </div>
                </div>
              </Block>
              
              <Block title="Advanced Inputs" fullWidth>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>Select / Dropdown</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Combobox / Autocomplete (Mock)</Label>
                    <Button variant="outline" className="w-full justify-between font-normal text-slate-500">
                      Search framework... <ChevronDown className="w-4 h-4 opacity-50" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Slider / Range Slider</Label>
                    <div className="pt-2"><Slider defaultValue={[50]} max={100} step={1} /></div>
                  </div>
                  <div className="space-y-2">
                    <Label>Date Picker</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>{date ? date.toDateString() : "Pick a date"}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>OTP / Pin Input</Label>
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div className="space-y-2">
                    <Label>File Uploader</Label>
                    <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer text-center">
                      <UploadCloud className="w-6 h-6 mb-2 text-slate-400" />
                      <span className="text-sm font-medium">Click or drag file to upload</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Color Picker</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="color" className="w-12 h-10 p-1 cursor-pointer" defaultValue="#3b82f6" />
                      <Input value="#3b82f6" readOnly className="font-mono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Tags / Chips / Pill Inputs</Label>
                    <div className="flex flex-wrap gap-2 p-2 border border-slate-200 rounded-md bg-white">
                      <Badge variant="secondary" className="gap-1 pr-1">Design <button><Trash2 className="w-3 h-3 text-slate-500 hover:text-slate-900"/></button></Badge>
                      <Badge variant="secondary" className="gap-1 pr-1">Development <button><Trash2 className="w-3 h-3 text-slate-500 hover:text-slate-900"/></button></Badge>
                      <input className="outline-none text-sm flex-1 min-w-[100px]" placeholder="Add tag..." />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Rich Text Editor</Label>
                    <div className="border border-slate-200 rounded-md overflow-hidden bg-white">
                      <ReactQuill theme="snow" value="<p>Write your <strong>rich</strong> text <em>here</em>.</p>" />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="space-y-1">
                      <Label className="text-red-500">Validation & Error States</Label>
                      <Input className="border-red-500" defaultValue="invalid-email" />
                      <p className="text-xs text-red-500 font-medium">Please enter a valid email address.</p>
                      <p className="text-xs text-slate-500">Helper text describes what to do.</p>
                    </div>
                  </div>
                </div>
              </Block>
            </Section>

            <Section id="navigation" title="Navigation" description="Components that help users move through the application.">
              <Block title="Breadcrumbs & Pagination" fullWidth>
                <div className="space-y-8">
                  <div>
                    <Label className="mb-3 block text-slate-500">Breadcrumbs</Label>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                  <div>
                    <Label className="mb-3 block text-slate-500">Pagination</Label>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationNext href="#" /></PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </Block>

              <Block title="Tabs & Menus" fullWidth>
                <div className="space-y-8">
                  <div>
                    <Label className="mb-3 block text-slate-500">Horizontal Tabs</Label>
                    <Tabs defaultValue="account" className="w-full max-w-[400px]">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className="p-4 border rounded-lg mt-2 bg-slate-50 text-sm">Account settings content.</TabsContent>
                      <TabsContent value="password" className="p-4 border rounded-lg mt-2 bg-slate-50 text-sm">Password settings content.</TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="flex gap-4">
                    <div>
                      <Label className="mb-3 block text-slate-500">Dropdown Menu</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuItem>Billing</DropdownMenuItem>
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div>
                      <Label className="mb-3 block text-slate-500">Context Menu (Right Click)</Label>
                      <ContextMenu>
                        <ContextMenuTrigger className="flex h-10 w-48 items-center justify-center rounded-md border border-dashed text-sm">
                          Right click here
                        </ContextMenuTrigger>
                        <ContextMenuContent className="w-64">
                          <ContextMenuItem inset>Back</ContextMenuItem>
                          <ContextMenuItem inset disabled>Forward</ContextMenuItem>
                          <ContextMenuItem inset>Reload</ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    </div>
                  </div>
                </div>
              </Block>
            </Section>

            <Section id="data" title="Data Display" description="Components for displaying data, content, and information.">
              <Block title="Cards, Tiles & Layouts" fullWidth>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create project</CardTitle>
                      <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-20 bg-slate-50 border rounded-md border-dashed flex items-center justify-center text-slate-400 text-sm">Content Area</div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Deploy</Button>
                    </CardFooter>
                  </Card>
                  
                  <div className="space-y-4">
                    <Label className="text-slate-500">Accordions / Disclosure</Label>
                    <Accordion type="single" collapsible className="w-full bg-white border rounded-lg px-4">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetic.</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </Block>

              <Block title="Tables & Lists" fullWidth>
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell><Badge variant="secondary">Paid</Badge></TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV002</TableCell>
                      <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Block>

              <Block title="Indicators, Avatars & Badges">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white"><AvatarFallback className="bg-blue-100 text-blue-700">A</AvatarFallback></Avatar>
                    <Avatar className="border-2 border-white"><AvatarFallback className="bg-green-100 text-green-700">B</AvatarFallback></Avatar>
                    <Avatar className="border-2 border-white"><AvatarFallback className="bg-slate-100 text-slate-700">+3</AvatarFallback></Avatar>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="flex items-center gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">In Progress</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Draft</Badge>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="flex h-3 w-3 rounded-full bg-amber-500"></span>
                  <span className="flex h-3 w-3 rounded-full bg-red-500"></span>
                </div>
              </Block>
            </Section>

            <Section id="feedback" title="Feedback & Overlays" description="Modals, toasts, alerts and state indicators.">
              <Block title="Overlays & Dialogs">
                <Dialog>
                  <DialogTrigger asChild><Button variant="outline">Open Modal</Button></DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">Form content goes here...</div>
                    <DialogFooter><Button type="submit">Save changes</Button></DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild><Button variant="destructive">Delete Item</Button></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-600 hover:bg-red-700">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Sheet>
                  <SheetTrigger asChild><Button variant="secondary">Open Drawer/Sheet</Button></SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>This action cannot be undone.</SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </Block>

              <Block title="Contextual Feedback">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild><Button variant="outline" size="icon"><Info className="w-4 h-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>Add to library</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <HoverCard>
                  <HoverCardTrigger asChild><Button variant="link">@nextjs</Button></HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar><AvatarFallback>VC</AvatarFallback></Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <Popover>
                  <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-slate-500">Set the dimensions for the layer.</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button variant="outline" onClick={() => toast("Event has been created", { description: "Sunday, December 03, 2023 at 9:00 AM" })}>
                  Show Toast/Snackbar
                </Button>
              </Block>

              <Block title="Alerts & Status" fullWidth>
                <div className="grid gap-4 w-full">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
                  </Alert>
                </div>
              </Block>

              <Block title="Loading & Progress" fullWidth>
                <div className="grid md:grid-cols-2 gap-8 w-full">
                  <div className="space-y-4">
                    <Label className="text-slate-500">Progress Bar</Label>
                    <Progress value={60} className="w-full" />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-slate-500">Skeletons / Spinners</Label>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[150px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Block>
            </Section>

            <Section id="charts" title="Charts & Metrics" description="Data visualization components using Recharts.">
              <Block title="KPI / Stat Tiles" fullWidth>
                <div className="grid md:grid-cols-3 gap-4 w-full">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <CreditCard className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-slate-500">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                      <User className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-slate-500">+180.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                      <Activity className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-slate-500">+201 since last hour</p>
                    </CardContent>
                  </Card>
                </div>
              </Block>

              <Block title="Bar & Line Charts" fullWidth>
                <div className="grid md:grid-cols-2 gap-8 h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <RechartsTooltip />
                      <Bar dataKey="total" fill="#0f172a" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <RechartsTooltip />
                      <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Block>
              
              <Block title="Area & Donut Charts" fullWidth>
                <div className="grid md:grid-cols-2 gap-8 h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <RechartsTooltip />
                      <Area type="monotone" dataKey="total" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Block>
            </Section>

            <Section id="patterns" title="Complex Patterns" description="Commonly used combinations of components.">
              <Block title="Authentication Forms" fullWidth>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Login</CardTitle>
                      <CardDescription>Enter your email below to login to your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sign in</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Add a new payment method to your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                        <Label className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 bg-white p-4 hover:bg-slate-50 [&:has([data-state=checked])]:border-slate-900 cursor-pointer">
                          <RadioGroupItem value="card" className="sr-only" />
                          <CreditCard className="mb-2 h-6 w-6" />
                          Card
                        </Label>
                        <Label className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 bg-white p-4 hover:bg-slate-50 cursor-pointer">
                          <RadioGroupItem value="paypal" className="sr-only" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="mb-2 h-6 w-6 object-contain" />
                          PayPal
                        </Label>
                        <Label className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 bg-white p-4 hover:bg-slate-50 cursor-pointer">
                          <RadioGroupItem value="apple" className="sr-only" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="mb-2 h-6 w-6 object-contain" />
                          Apple
                        </Label>
                      </RadioGroup>
                      <div className="space-y-2">
                        <Label>Name</Label>
                        <Input placeholder="First Last" />
                      </div>
                      <div className="space-y-2">
                        <Label>Card number</Label>
                        <Input placeholder="0000 0000 0000 0000" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Continue</Button>
                    </CardFooter>
                  </Card>
                </div>
              </Block>
              
              <Block title="Chat & Comments" fullWidth>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="space-y-4 max-w-lg mx-auto bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="flex gap-4">
                      <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-800">
                          Hey! I just reviewed the latest design system updates. The new components look fantastic.
                        </div>
                        <span className="text-xs text-slate-400 pl-1">10:42 AM</span>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-row-reverse">
                      <Avatar><AvatarFallback className="bg-blue-600 text-white">ME</AvatarFallback></Avatar>
                      <div className="flex-1 space-y-1 flex flex-col items-end">
                        <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-sm text-sm text-white">
                          Thanks John! I've also added the complex patterns you requested. Let me know if you need any adjustments.
                        </div>
                        <span className="text-xs text-slate-400 pr-1 flex items-center gap-1">10:45 AM <CheckCircle2 className="w-3 h-3 text-blue-500" /></span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex gap-2">
                      <Input placeholder="Type a message..." className="rounded-full" />
                      <Button size="icon" className="rounded-full shrink-0"><Send className="w-4 h-4" /></Button>
                    </div>
                  </div>
                </div>
              </Block>
            </Section>
         </div>
      </div>
    </div>
  );
}
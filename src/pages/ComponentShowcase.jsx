import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Layout, MousePointerClick, GripVertical, Trash2 } from "lucide-react";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const COMPONENTS = [
  { id: "navbar", title: "Navigation Bar", type: "navbar" },
  { id: "hero", title: "Hero Section", type: "hero" },
  { id: "card_grid", title: "Card Grid", type: "card_grid" },
  { id: "sidebar", title: "Sidebar (Mock)", type: "sidebar" },
  { id: "footer", title: "Footer", type: "footer" },
];

const NavbarMock = () => (
  <div className="w-full bg-white border-b border-slate-200 p-4 flex justify-between items-center shadow-sm">
    <div className="font-bold text-slate-800 text-lg">BrandLogo</div>
    <div className="flex gap-6 text-sm font-medium text-slate-500">
      <span className="text-slate-900 cursor-pointer">Home</span>
      <span className="hover:text-slate-900 cursor-pointer">Features</span>
      <span className="hover:text-slate-900 cursor-pointer">Pricing</span>
    </div>
    <Button size="sm">Sign In</Button>
  </div>
);

const HeroMock = () => (
  <div className="w-full bg-slate-50 py-24 px-8 text-center border-b border-slate-200 flex flex-col items-center">
    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide uppercase">New Release 2.0</div>
    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Build better interfaces</h1>
    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
      A beautiful, fully-featured component library built with Tailwind CSS and Framer Motion. 
      Drag and drop to compose your perfect layout.
    </p>
    <div className="flex gap-4">
      <Button size="lg">Get Started</Button>
      <Button variant="outline" size="lg">View Documentation</Button>
    </div>
  </div>
);

const CardGridMock = () => (
  <div className="w-full bg-white p-12 border-b border-slate-200">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold text-slate-900">Features you'll love</h2>
      <p className="text-slate-500 mt-2">Everything you need to build your app quickly.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg mb-4 flex items-center justify-center font-bold">{i}</div>
          <h3 className="font-semibold text-slate-800 text-lg mb-2">Feature Block {i}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Beautifully designed components that you can copy and paste into your apps. Accessible and customizable.
          </p>
        </div>
      ))}
    </div>
  </div>
);

const SidebarMock = () => (
  <div className="w-full flex bg-slate-100 border-b border-slate-200" style={{ height: '400px' }}>
    <div className="w-64 bg-slate-900 text-white p-6 h-full flex flex-col gap-4">
      <div className="font-bold text-xl border-b border-slate-800 pb-4 mb-2 flex items-center gap-2">
        <Layout className="w-5 h-5 text-blue-400" /> AppDash
      </div>
      <div className="text-sm bg-blue-600 px-3 py-2 rounded-md font-medium cursor-pointer">Overview</div>
      <div className="text-sm text-slate-400 hover:text-white px-3 py-2 cursor-pointer transition-colors">Analytics</div>
      <div className="text-sm text-slate-400 hover:text-white px-3 py-2 cursor-pointer transition-colors">Customers</div>
      <div className="text-sm text-slate-400 hover:text-white px-3 py-2 cursor-pointer transition-colors mt-auto">Settings</div>
    </div>
    <div className="flex-1 p-8">
      <div className="h-8 w-48 bg-slate-200 rounded mb-6"></div>
      <div className="h-32 w-full bg-white rounded-lg border border-slate-200 shadow-sm mb-4"></div>
      <div className="h-32 w-full bg-white rounded-lg border border-slate-200 shadow-sm"></div>
    </div>
  </div>
);

const FooterMock = () => (
  <div className="w-full bg-white p-12 border-t border-slate-200">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div className="max-w-xs">
        <div className="font-bold text-slate-800 text-lg mb-4">BrandLogo</div>
        <p className="text-sm text-slate-500">Making the web a better place, one component at a time.</p>
      </div>
      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-slate-900">Product</span>
          <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Features</span>
          <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Pricing</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-slate-900">Company</span>
          <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">About</span>
          <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Blog</span>
        </div>
      </div>
    </div>
  </div>
);

export default function ComponentShowcase() {
  const [workspaceItems, setWorkspaceItems] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === "toolbox" && destination.droppableId === "workspace") {
      const itemConfig = COMPONENTS[source.index];
      const newItem = {
        ...itemConfig,
        instanceId: `${itemConfig.id}-${Date.now()}`
      };
      
      const newItems = Array.from(workspaceItems);
      newItems.splice(destination.index, 0, newItem);
      setWorkspaceItems(newItems);
    } else if (source.droppableId === "workspace" && destination.droppableId === "workspace") {
      const newItems = Array.from(workspaceItems);
      const [reorderedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, reorderedItem);
      setWorkspaceItems(newItems);
    }
  };

  const removeItem = (index) => {
    const newItems = Array.from(workspaceItems);
    newItems.splice(index, 1);
    setWorkspaceItems(newItems);
  };

  const renderComponent = (type) => {
    switch (type) {
      case "navbar": return <NavbarMock />;
      case "hero": return <HeroMock />;
      case "card_grid": return <CardGridMock />;
      case "sidebar": return <SidebarMock />;
      case "footer": return <FooterMock />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="pt-32 pb-8 px-6 lg:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex gap-4 mb-8">
            <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <span className="text-slate-300">|</span>
            <Link to={createPageUrl("DesignSystemPlayground")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Design Playground
            </Link>
          </div>
          
          <h1 className="text-4xl font-light mb-4 text-slate-900 flex items-center gap-3">
            <Layout className="w-8 h-8 text-blue-600" /> Component Showcase
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Drag and drop components to build layouts and preview themes in context. 
            Reorder items in the workspace by dragging them.
          </p>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 py-12">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Toolbox Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                    <MousePointerClick className="w-4 h-4 text-blue-600" /> Building Blocks
                  </h2>
                </div>
                
                <Droppable droppableId="toolbox" isDropDisabled={true}>
                  {(provided) => (
                    <div 
                      ref={provided.innerRef} 
                      {...provided.droppableProps}
                      className="space-y-3"
                    >
                      {COMPONENTS.map((item, index) => (
                        <Draggable key={`toolbox-${item.id}`} draggableId={`toolbox-${item.id}`} index={index}>
                          {(provided, snapshot) => (
                            <React.Fragment>
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`p-3 bg-white border rounded-lg flex items-center gap-3 shadow-sm transition-all ${
                                  snapshot.isDragging ? 'border-blue-500 ring-2 ring-blue-200 z-50' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                                }`}
                              >
                                <GripVertical className="w-4 h-4 text-slate-400" />
                                <span className="text-sm font-medium text-slate-700">{item.title}</span>
                              </div>
                              {snapshot.isDragging && (
                                <div className="p-3 bg-slate-50 border border-slate-200 border-dashed rounded-lg flex items-center gap-3 opacity-50">
                                  <GripVertical className="w-4 h-4 text-slate-300" />
                                  <span className="text-sm font-medium text-slate-400">{item.title}</span>
                                </div>
                              )}
                            </React.Fragment>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Drag blocks from here into the dashed drop zone on the right to compose a page layout.
                  </p>
                </div>
              </div>
            </div>

            {/* Workspace Area */}
            <div className="lg:col-span-9">
              <Droppable droppableId="workspace">
                {(provided, snapshot) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-[600px] rounded-xl border-2 transition-all flex flex-col overflow-hidden ${
                      snapshot.isDraggingOver ? 'border-blue-400 border-solid bg-blue-50/30 ring-4 ring-blue-50' : 'border-slate-300 border-dashed bg-slate-100/50'
                    }`}
                  >
                    {workspaceItems.length === 0 && !snapshot.isDraggingOver && (
                      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-12 text-center h-full min-h-[600px]">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                          <Layout className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="font-semibold text-slate-700 text-lg mb-2">Workspace is empty</h3>
                        <p className="text-sm max-w-sm">Drag components from the building blocks sidebar and drop them here to start composing your layout.</p>
                      </div>
                    )}
                    
                    <div className="flex flex-col w-full h-full min-h-[600px] bg-slate-50">
                      {workspaceItems.map((item, index) => (
                        <Draggable key={item.instanceId} draggableId={item.instanceId} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className={`relative group bg-white ${snapshot.isDragging ? 'opacity-90 z-50 shadow-2xl ring-2 ring-blue-400' : ''}`}
                            >
                              {/* Overlay controls */}
                              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex gap-2">
                                <div 
                                  {...provided.dragHandleProps}
                                  className="p-2 bg-white/95 backdrop-blur rounded shadow-md border border-slate-200 cursor-grab active:cursor-grabbing hover:bg-slate-50 transition-colors text-slate-600"
                                >
                                  <GripVertical className="w-4 h-4" />
                                </div>
                                <button 
                                  onClick={() => removeItem(index)}
                                  className="p-2 bg-white/95 backdrop-blur rounded shadow-md border border-slate-200 text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              
                              {/* Component Render */}
                              <div className="w-full pointer-events-none group-hover:pointer-events-auto">
                                {renderComponent(item.type)}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      
                      {workspaceItems.length > 0 && (
                        <div className="w-full py-12 flex justify-center text-slate-400 bg-slate-50/50 flex-1 border-t border-dashed border-slate-200">
                          <span className="text-xs font-medium tracking-widest uppercase">End of Layout</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
            
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
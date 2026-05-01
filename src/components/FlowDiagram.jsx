import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function FlowDiagram({ defaultNodes = [], defaultEdges = [] }) {
  const [nodes, setNodes] = useState(defaultNodes);
  const [edges, setEdges] = useState(defaultEdges);
  const reactFlowWrapper = useRef(null);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = () => {
    const newNode = {
      id: `node-${Date.now()}`,
      position: { x: Math.random() * 200 + 100, y: Math.random() * 200 + 100 },
      data: { label: 'New Node' },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onNodeDoubleClick = useCallback((event, node) => {
    const newLabel = window.prompt("Edit node label:", node.data.label);
    if (newLabel !== null) {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: {
                ...n.data,
                label: newLabel,
              },
            };
          }
          return n;
        })
      );
    }
  }, []);

  const onEdgeDoubleClick = useCallback((event, edge) => {
    const newLabel = window.prompt("Edit edge label:", edge.label || "");
    if (newLabel !== null) {
      setEdges((eds) =>
        eds.map((e) => {
          if (e.id === edge.id) {
            return { ...e, label: newLabel };
          }
          return e;
        })
      );
    }
  }, []);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <div className="w-full h-full bg-slate-50/50" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeDoubleClick={onNodeDoubleClick}
              onEdgeDoubleClick={onEdgeDoubleClick}
              onPaneMouseEnter={() => setTooltipOpen(true)}
              onPaneMouseLeave={() => setTooltipOpen(false)}
              onNodeMouseEnter={() => setTooltipOpen(true)}
              onNodeMouseLeave={() => setTooltipOpen(false)}
              onEdgeMouseEnter={() => setTooltipOpen(true)}
              onEdgeMouseLeave={() => setTooltipOpen(false)}
              fitView
            >
              <Controls />
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
              <Panel position="top-right" className="bg-white/90 p-3 rounded-lg shadow-sm border border-slate-200">
                <button 
                  onClick={addNode}
                  className="w-full bg-slate-900 text-white px-3 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-slate-800 transition"
                >
                  + Add Node
                </button>
                <div className="text-[10px] text-slate-500 mt-3 text-center uppercase tracking-wider font-semibold">
                  Editing Shortcuts
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  <span className="font-medium text-slate-900">Double-click</span> to rename<br/>
                  <span className="font-medium text-slate-900">Backspace</span> to delete
                </div>
              </Panel>
            </ReactFlow>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>click blue circles to read details</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
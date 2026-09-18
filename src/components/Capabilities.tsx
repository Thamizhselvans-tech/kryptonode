import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_NODES, TechNode } from '../data/portfolioData';
import { Cpu, Network, Shield, Zap, Terminal, Activity, Layers } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(TECH_NODES[0].id);

  const selectedNode = TECH_NODES.find((n: TechNode) => n.id === selectedNodeId) || TECH_NODES[0];

  const categories = ['All', 'Frontend', 'Backend', 'AI', 'Cloud', 'Database'];
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredNodes = activeCategory === 'All' 
    ? TECH_NODES 
    : TECH_NODES.filter((n: TechNode) => n.category === activeCategory);

  return (
    <section id="capabilities" className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-3">
              <Network className="w-4 h-4" />
              <span>[ 03 — INTERCONNECTED ECOSYSTEM ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 tracking-tight font-sans">
              We don't just use technology —{' '}
              <span className="text-deepblue underline decoration-electric/30 underline-offset-4">
                we connect technology.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-muted max-w-md font-sans">
            Inspect our connected technology ecosystem below. Select any node to view its integration pathways and data latency specs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-deepblue text-milk-100 shadow-subtle'
                  : 'bg-softblue/60 text-navy-800 hover:bg-softblue border border-deepblue/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Technology Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Canvas (Visual Node Grid) */}
          <div className="lg:col-span-8 bg-softblue/50 border border-deepblue/15 rounded-3xl p-6 sm:p-8 relative min-h-[460px] shadow-card overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

            <div className="flex items-center justify-between z-10 mb-6 pb-3 border-b border-deepblue/10">
              <span className="text-xs font-mono uppercase tracking-wider text-muted flex items-center gap-2">
                <Terminal className="w-4 h-4 text-electric" />
                ECOSYSTEM TOPOLOGY MATRIX
              </span>
              <span className="text-[11px] font-mono text-electric bg-milk-100 px-3 py-1 rounded-full border border-electric/30">
                10 Integrated Nodes
              </span>
            </div>

            {/* Interactive Graph Node Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10 my-auto">
              {filteredNodes.map((node: TechNode) => {
                const isSelected = node.id === selectedNodeId;
                const isConnected = selectedNode.connections.includes(node.id);

                return (
                  <motion.div
                    key={node.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-deepblue text-milk-100 border-electric shadow-electric-glow z-20'
                        : isConnected
                        ? 'bg-milk-100 text-deepblue border-electric/50 shadow-subtle ring-2 ring-electric/20'
                        : 'bg-milk-100/90 text-navy-800 border-deepblue/10 hover:border-electric/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-softblue text-electric uppercase font-semibold">
                        {node.category}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                      )}
                      {isConnected && !isSelected && (
                        <span className="text-[10px] font-mono text-electric font-semibold">Connected</span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold tracking-tight font-sans">
                      {node.name}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Canvas Footer Status */}
            <div className="flex items-center justify-between z-10 pt-4 mt-6 border-t border-deepblue/10 text-xs text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-electric animate-pulse" />
                Active Neural Mesh Active
              </span>
              <span>Click node to reveal connections</span>
            </div>
          </div>

          {/* Right Inspector Panel */}
          <div className="lg:col-span-4 bg-navy-800 text-milk-100 border border-electric/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-floating">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs font-mono text-electric uppercase tracking-wider">
                  NODE SPECIFICATION
                </span>
                <span className="text-xs font-mono px-2.5 py-1 bg-electric/20 text-electric rounded-md border border-electric/30">
                  {selectedNode.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-sans tracking-tight mb-4 text-milk-100">
                {selectedNode.name}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans mb-8">
                {selectedNode.description}
              </p>

              <div className="mb-6">
                <h4 className="text-[11px] font-mono text-electric uppercase tracking-wider mb-3">
                  Direct Integration Mesh ({selectedNode.connections.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.connections.map((connId: string) => {
                    const connNode = TECH_NODES.find((n: TechNode) => n.id === connId);
                    return (
                      <span
                        key={connId}
                        onClick={() => setSelectedNodeId(connId)}
                        className="px-3 py-1 bg-white/10 hover:bg-electric text-milk-100 text-xs font-mono rounded-lg border border-white/10 cursor-pointer transition-colors"
                      >
                        → {connNode ? connNode.name : connId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Shield className="w-4 h-4 text-electric shrink-0" />
                <span className="text-[11px] text-gray-300 font-sans">
                  End-to-End Type Safety & Microservice Isolation Enforced.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

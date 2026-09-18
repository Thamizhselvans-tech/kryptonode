import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Server, Cpu, Database, Code } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const InteractiveHeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nodes = [
    { id: 0, label: 'Core Engine', icon: Cpu, latency: '1.2ms', status: 'Optimal', x: 220, y: 140 },
    { id: 1, label: 'Neural Mesh', icon: Zap, latency: '14ms', status: 'Active', x: 420, y: 100 },
    { id: 2, label: 'Data Hub', icon: Database, latency: '0.8ms', status: 'Synced', x: 460, y: 280 },
    { id: 3, label: 'API Gateway', icon: Server, latency: '4ms', status: 'Secured', x: 180, y: 320 },
    { id: 4, label: 'UI Synthesizer', icon: Code, latency: '60fps', status: 'Rendered', x: 320, y: 220 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-[5/4] sm:aspect-square max-w-[560px] mx-auto flex items-center justify-center p-4 select-none"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-obsidian-800/90 rounded-3xl -z-10 border border-cyber-mint/20 shadow-floating-dark overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyber-mint/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyber-cyan/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-80" />
      </div>

      {/* Orbit Rings with Motion */}
      <motion.div
        animate={{
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full overflow-visible drop-shadow-sm"
        >
          <defs>
            <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#00FF9D" />
            </linearGradient>
          </defs>

          {/* Kryptonode Main Orbital Ring */}
          <circle cx="320" cy="220" r="190" fill="none" stroke="url(#orbitGrad)" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.4" />
          <circle cx="320" cy="220" r="130" fill="none" stroke="#00D2FF" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.3" />
          
          {/* Connecting Polyline Paths */}
          <line x1="220" y1="140" x2="420" y2="100" stroke="#00D2FF" strokeWidth="1.5" opacity="0.3" />
          <line x1="420" y1="100" x2="460" y2="280" stroke="#00FF9D" strokeWidth="1.5" opacity="0.3" />
          <line x1="460" y1="280" x2="320" y2="220" stroke="#00D2FF" strokeWidth="1.5" opacity="0.4" />
          <line x1="320" y1="220" x2="180" y2="320" stroke="#00FF9D" strokeWidth="1.5" opacity="0.3" />
          <line x1="180" y1="320" x2="220" y2="140" stroke="#00D2FF" strokeWidth="1.5" opacity="0.3" />
          <line x1="220" y1="140" x2="320" y2="220" stroke="#00FF9D" strokeWidth="2" opacity="0.5" />

          {/* Animated Glowing Signal Lines connecting to active node */}
          <motion.line
            x1="320"
            y1="220"
            x2={nodes[activeNode].x}
            y2={nodes[activeNode].y}
            stroke="#00FF9D"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 20 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />

          {/* Orbiting Satellite Node Dot */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 320 220"
              to="360 320 220"
              dur="24s"
              repeatCount="indefinite"
            />
            <circle cx="510" cy="220" r="7" fill="#00FF9D" className="shadow-cyber-glow" />
            <circle cx="510" cy="220" r="14" fill="none" stroke="#00FF9D" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* SVG Nodes */}
          {nodes.map((node, index) => {
            const isSelected = activeNode === index;
            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => setActiveNode(index)}
              >
                {/* Node Outer Ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 22 : 16}
                  fill={isSelected ? '#0B1728' : '#060D17'}
                  stroke={isSelected ? '#00FF9D' : '#00D2FF'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                  className="transition-all duration-300"
                />

                {/* Pulse Ring on Selected */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="30"
                    fill="none"
                    stroke="#00FF9D"
                    strokeWidth="1"
                    opacity="0.6"
                    className="animate-ping"
                  />
                )}

                {/* Node Core Center */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 7 : 5}
                  fill={isSelected ? '#00FF9D' : '#00D2FF'}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Top Status Card */}
        <motion.div
          animate={{ x: mousePos.x * -1.2, y: mousePos.y * -1.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="absolute top-6 left-6 bg-obsidian-900/90 backdrop-blur-md border border-cyber-mint/20 p-3 rounded-2xl shadow-floating-dark flex items-center gap-3 z-10"
        >
          <div className="w-8 h-8 rounded-xl bg-cyber-mint/20 flex items-center justify-center text-cyber-mint">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{COMPANY_INFO.shortName} System</div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyber-mint animate-pulse" />
              100% Deterministic Engine
            </div>
          </div>
        </motion.div>

        {/* Selected Node Telemetry Card */}
        <motion.div
          key={activeNode}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 right-6 bg-obsidian-950 text-white p-4 rounded-2xl shadow-floating-dark border border-cyber-mint/30 max-w-[220px] z-20"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <span className="text-[10px] font-mono uppercase text-cyber-mint tracking-wider font-bold">
              {nodes[activeNode].label}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-mint/20 text-cyber-mint border border-cyber-mint/30 font-semibold">
              {nodes[activeNode].status}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-gray-400 font-sans">Execution Latency</span>
            <span className="text-sm font-mono font-bold text-cyber-cyan">{nodes[activeNode].latency}</span>
          </div>
          <div className="mt-2 text-[11px] text-gray-300 font-sans leading-tight">
            Connected to Kryptonode microservices.
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
          className="absolute bottom-10 left-12 bg-obsidian-900/90 backdrop-blur-md border border-cyber-cyan/20 px-3 py-2 rounded-xl shadow-subtle flex items-center gap-2"
        >
          <ShieldCheck className="w-4 h-4 text-cyber-mint" />
          <span className="text-[11px] font-mono text-gray-200">BUILD • INNOVATE • LEAD</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

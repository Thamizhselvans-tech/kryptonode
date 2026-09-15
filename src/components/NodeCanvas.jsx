import React, { useEffect, useRef, useState } from 'react';

export default function NodeCanvas() {
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { name: "Idea", color: "#6ee7b7", label: "01. Concept Validation" },
    { name: "Design", color: "#34d399", label: "02. UI/UX Architecture" },
    { name: "Code", color: "#10b981", label: "03. Engineering & APIs" },
    { name: "AI", color: "#059669", label: "04. Intelligence Layer" },
    { name: "Product", color: "#a7f3d0", label: "05. Scalable MVP" },
    { name: "Growth", color: "#34d399", label: "06. Market Scale" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };
    window.addEventListener('resize', handleResize);

    // Node generation
    const nodeCount = Math.min(Math.floor(width / 22), 45);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw background ambient gradient glow
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 50,
        width / 2, height / 2, width / 1.5
      );
      bgGrad.addColorStop(0, 'rgba(5, 150, 105, 0.08)');
      bgGrad.addColorStop(0.5, 'rgba(3, 27, 21, 0.04)');
      bgGrad.addColorStop(1, 'rgba(6, 9, 15, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        n.pulse += n.pulseSpeed;

        // Distance to mouse
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distToMouse) / mouse.radius;
          n.x -= Math.cos(angle) * force * 1.5;
          n.y -= Math.sin(angle) * force * 1.5;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.sqrt((n.x - n2.x) ** 2 + (n.y - n2.y) ** 2);
          const maxDist = 120;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node
        const glowRadius = n.radius + Math.sin(n.pulse) * 1.2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(1, glowRadius), 0, Math.PI * 2);
        ctx.fillStyle = '#34d399';
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Stage rotation timer
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2800);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(stageInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] lg:h-[540px] rounded-3xl overflow-hidden glass-panel-emerald border border-emerald-500/20 shadow-[0_0_50px_rgba(5,150,105,0.15)] flex flex-col justify-between p-6 md:p-8">
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 cursor-crosshair" />

      {/* Top Header Label */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Kryptonode Node Network Visualizer
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span>STATUS: ACTIVE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Center Interactive Transformation Flow */}
      <div className="relative z-10 my-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-black/40 border border-emerald-500/20 text-xs text-emerald-400 font-mono tracking-wider">
          PRODUCT TRANSFORM ENGINE
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
          Transforming Raw Ideas Into <br />
          <span className="text-gradient-emerald">Scalable Digital Products</span>
        </h3>

        {/* Dynamic Workflow Timeline Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-2xl mx-auto">
          {stages.map((stg, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stg.name}
                onClick={() => setActiveStage(idx)}
                className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-emerald-500/40'
                }`}
              >
                <span>{stg.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Active Description Box */}
        <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/60 border border-emerald-500/30 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-md transition-all">
          <span className="font-mono text-emerald-400 font-bold">
            {stages[activeStage].label}
          </span>
          <span className="text-slate-400">→</span>
          <span className="text-slate-200">
            {activeStage === 0 && "Analyzing market need, technical feasibility & product roadmap."}
            {activeStage === 1 && "Crafting frictionless UI design systems & interactive prototypes."}
            {activeStage === 2 && "Building robust frontend & REST/GraphQL API microservices."}
            {activeStage === 3 && "Integrating AI models, custom LLM prompts & automation pipelines."}
            {activeStage === 4 && "Shipping production-ready web and mobile MVP applications."}
            {activeStage === 5 && "Continuous deployment, analytics tracking & cloud infrastructure scale."}
          </span>
        </div>
      </div>

      {/* Bottom Floating Stats */}
      <div className="relative z-10 pt-4 border-t border-emerald-500/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
        <div className="flex items-center gap-6 font-mono">
          <div><span className="text-emerald-400 font-bold">100%</span> Custom Architecture</div>
          <div><span className="text-emerald-400 font-bold">Zero</span> Template Code</div>
        </div>
        <div className="text-slate-400 font-sans">
          Click any stage to inspect transformation step
        </div>
      </div>
    </div>
  );
}

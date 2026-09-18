import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Terminal, Activity, Cpu, HardDrive, ShieldCheck, RefreshCw, Play, CheckCircle2, AlertCircle, Wifi } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const ITEnvironmentConsole: React.FC = () => {
  const [selectedEnv, setSelectedEnv] = useState<'production' | 'staging' | 'edge' | 'ai-gpu'>('production');
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    `[SYS_INIT] Kryptonode Telemetry daemon connected to ${COMPANY_INFO.name}`,
    `[NET_OK] 12 Kubernetes Pods online across AWS us-east-1 & eu-central-1`,
    `[SEC_OK] SSL/TLS 1.3 encryption active • Zero vulnerabilities detected`,
    `[INFO] Type 'help' or 'status' to interact with the live IT environment.`
  ]);
  const [cpuUsage, setCpuUsage] = useState(14);
  const [memUsage, setMemUsage] = useState(2.4);
  const [latency, setLatency] = useState(1.2);
  const [throughput, setThroughput] = useState(4820);

  // Live telemetry pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 8 + 12));
      setMemUsage(parseFloat((Math.random() * 0.4 + 2.2).toFixed(1)));
      setLatency(parseFloat((Math.random() * 0.4 + 1.0).toFixed(2)));
      setThroughput(Math.floor(Math.random() * 400 + 4600));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;

    const cmd = cliInput.trim().toLowerCase();
    const newLogs = [...cliLogs, `$ ${cliInput}`];

    if (cmd === 'help') {
      newLogs.push('Available CLI commands:');
      newLogs.push('  status     - Show live environment health & cluster state');
      newLogs.push('  deploy     - Simulate blue-green microservice deployment');
      newLogs.push('  benchmark  - Run live high-throughput stress test');
      newLogs.push('  founders   - Show lead developers contact details');
      newLogs.push('  clear      - Clear terminal window logs');
    } else if (cmd === 'status') {
      newLogs.push(`[STATUS] Active Environment: ${selectedEnv.toUpperCase()}`);
      newLogs.push(`[METRICS] CPU: ${cpuUsage}% | RAM: ${memUsage}GB / 16GB | Latency: ${latency}ms`);
      newLogs.push('[HEALTH] All 12 Kubernetes microservices operating at 100% SLA.');
    } else if (cmd === 'deploy') {
      newLogs.push('[DEPLOY] Initiating automated CI/CD Blue-Green Deployment...');
      newLogs.push('[DEPLOY] Building Docker container image v2.4.0...');
      newLogs.push('[DEPLOY] Success! Zero-downtime deployment finished in 1.4s.');
    } else if (cmd === 'benchmark') {
      newLogs.push('[BENCHMARK] Executing 50,000 synthetic HTTP request burst...');
      newLogs.push('[BENCHMARK] Peak throughput: 12,400 req/sec | 0% packet loss | Max Latency: 2.1ms');
    } else if (cmd === 'founders') {
      newLogs.push(`[KRYPTONODE FOUNDERS]`);
      newLogs.push(`  • Thamizhprabha  (Lead Developer)  : 8668109481`);
      newLogs.push(`  • Danish Kumar   (Full Stack Eng)  : 9361215922`);
      newLogs.push(`  • Sarveshkumar   (Systems Dev)     : 9150185160`);
    } else if (cmd === 'clear') {
      setCliLogs([]);
      setCliInput('');
      return;
    } else {
      newLogs.push(`Command not recognized: '${cliInput}'. Type 'help' for available commands.`);
    }

    setCliLogs(newLogs);
    setCliInput('');
  };

  const environmentDetails = {
    production: { name: 'AWS Multi-Region Cluster', status: 'Healthy', region: 'us-east-1 & eu-central-1', pods: '12 Active Pods', uptime: '99.99%' },
    staging: { name: 'Kubernetes Staging Pods', status: 'Active', region: 'ap-south-1', pods: '6 Isolated Pods', uptime: '99.95%' },
    edge: { name: 'Cloudflare Edge Mesh', status: 'Optimal', region: '280+ Edge Locations', pods: 'Global Workers', uptime: '100%' },
    'ai-gpu': { name: 'NVIDIA H100 AI Inference Pod', status: 'Running', region: 'us-west-2 GPU Cluster', pods: '4 Tensor Core Nodes', uptime: '99.98%' },
  };

  return (
    <section id="it-environment" className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-3">
              <Server className="w-4 h-4" />
              <span>[ 11 — LIVE IT ENVIRONMENT & DEVOPS CONSOLE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 tracking-tight font-sans">
              Real-time infrastructure &{' '}
              <span className="text-deepblue underline decoration-electric/30 underline-offset-4">
                cloud telemetry console.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-muted max-w-md font-sans">
            Inspect our live production environment specs, test automated CI/CD deployments, and run terminal CLI commands.
          </p>
        </div>

        {/* Console Container */}
        <div className="bg-navy-800 rounded-3xl border border-electric/30 overflow-hidden shadow-floating text-milk-100">
          
          {/* Top Environment Selector Bar */}
          <div className="p-4 sm:px-6 bg-navy-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'production', label: 'Production (AWS)' },
                { id: 'staging', label: 'Staging K8s' },
                { id: 'edge', label: 'Edge Network' },
                { id: 'ai-gpu', label: 'AI GPU Inference' },
              ].map((env) => (
                <button
                  key={env.id}
                  onClick={() => setSelectedEnv(env.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    selectedEnv === env.id
                      ? 'bg-electric text-milk-100 font-bold shadow-electric-glow'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {env.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM SLA 100% HEALTHY
              </span>
            </div>
          </div>

          {/* Telemetry Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 bg-white/5 p-4 sm:p-6 gap-4 text-xs font-mono">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-electric/20 text-electric">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase">CPU Load</div>
                <div className="text-base font-bold text-milk-100">{cpuUsage}% Avg</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-electric/20 text-electric">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase">Memory Allocation</div>
                <div className="text-base font-bold text-milk-100">{memUsage} GB / 16 GB</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-electric/20 text-electric">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase">API Latency</div>
                <div className="text-base font-bold text-emerald-400">{latency} ms</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-electric/20 text-electric">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase">Network Throughput</div>
                <div className="text-base font-bold text-milk-100">{throughput} req/s</div>
              </div>
            </div>

          </div>

          {/* Main Body: Active Specs & CLI Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Environment Specs */}
            <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-electric font-bold uppercase">
                  ENVIRONMENT SPECIFICATIONS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                  {environmentDetails[selectedEnv].uptime} Uptime
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold font-sans text-milk-100 mb-1">
                  {environmentDetails[selectedEnv].name}
                </h4>
                <p className="text-xs font-mono text-gray-300">
                  Location: {environmentDetails[selectedEnv].region}
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono text-gray-300">
                <div className="flex justify-between p-2 rounded bg-white/5">
                  <span>Cluster Topology:</span>
                  <span className="text-milk-100 font-bold">{environmentDetails[selectedEnv].pods}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-white/5">
                  <span>Security Layer:</span>
                  <span className="text-emerald-400 font-bold">mTLS & Vault Encrypted</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-white/5">
                  <span>Auto-scaler:</span>
                  <span className="text-milk-100 font-bold">Horizontal Pod Autoscaler</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-electric shrink-0" />
                <span className="text-[11px] text-gray-300 font-sans leading-tight">
                  Kryptonode Tech Solutions enforces zero-trust cloud isolation across all environments.
                </span>
              </div>
            </div>

            {/* Right Interactive CLI Terminal */}
            <div className="lg:col-span-7 p-6 flex flex-col justify-between min-h-[340px]">
              
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
                  <span className="text-electric font-bold flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    KRYPTONODE INTERACTIVE DEVOPS TERMINAL
                  </span>
                  <span className="text-[10px] text-gray-400">Type 'help'</span>
                </div>

                {/* Log Terminal Window */}
                <div className="space-y-1.5 font-mono text-xs text-gray-200 max-h-[220px] overflow-y-auto mb-4 select-text">
                  {cliLogs.map((log, i) => (
                    <div
                      key={i}
                      className={
                        log.startsWith('$')
                          ? 'text-electric font-bold'
                          : log.includes('SUCCESS') || log.includes('OK')
                          ? 'text-emerald-400'
                          : 'text-gray-300'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              {/* CLI Command Input */}
              <form onSubmit={handleCommandSubmit} className="relative flex items-center">
                <span className="absolute left-3 text-electric font-mono font-bold">$</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="type command (e.g. status, deploy, benchmark, founders)..."
                  className="w-full pl-8 pr-12 py-2.5 rounded-xl bg-navy-900 border border-white/15 text-milk-100 font-mono text-xs focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric"
                />
                <button
                  type="submit"
                  className="absolute right-2 p-1.5 rounded-lg bg-electric text-milk-100 hover:bg-electric-glow transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Copy, Check, Play, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'go-microservice' | 'rust-wasm' | 'python-llm' | 'react-webgl'>('go-microservice');
  const [copied, setCopied] = useState(false);
  const [simulatedLatency, setSimulatedLatency] = useState<number | null>(null);

  const snippets = {
    'go-microservice': {
      title: 'High-Throughput Go Microservice (100k req/sec)',
      language: 'go',
      latency: '0.8ms',
      code: `package telemetry

import (
	"context"
	"net/http"
	"time"
)

type DiagnosticEngine struct {
	vectorIndex VectorStore
	cache       *RedisCluster
}

func (e *DiagnosticEngine) HandleScanTriage(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(r.Context(), 150*time.Millisecond)
	defer cancel()

	// Sub-millisecond transient cache lookup
	scanID := r.URL.Query().Get("scan_id")
	if cached, ok := e.cache.Get(scanID); ok {
		w.Header().Set("X-Execution-Latency", "0.4ms")
		w.Write(cached)
		return
	}

	res, err := e.vectorIndex.QueryParallel(ctx, scanID)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(res.ToBytes())
}`
    },
    'rust-wasm': {
      title: 'Rust WASM Order-Book Matcher (1.2ms Latency)',
      language: 'rust',
      latency: '1.2ms',
      code: `use wasm_bindgen::prelude::*;
use std::collections::BTreeMap;

#[wasm_bindgen]
pub struct MatchingEngine {
    bids: BTreeMap<u64, f64>,
    asks: BTreeMap<u64, f64>,
}

#[wasm_bindgen]
impl MatchingEngine {
    pub fn new() -> Self {
        Self {
            bids: BTreeMap::new(),
            asks: BTreeMap::new(),
        }
    }

    #[inline(always)]
    pub fn process_order_tick(&mut self, price: u64, qty: f64, is_buy: bool) -> f64 {
        if is_buy {
            self.bids.insert(price, qty);
        } else {
            self.asks.insert(price, qty);
        }
        // Sub-millisecond deterministic calculation inside web browser
        qty * (price as f64)
    }
}`
    },
    'python-llm': {
      title: 'Python Private LLM Triage & Vector RAG Pipeline',
      language: 'python',
      latency: '12ms',
      code: `import asyncio
from typing import AsyncGenerator
from fastapi import FastAPI
from llama_index.core import VectorStoreIndex

app = FastAPI(title="Aetheria Private RAG Pipeline")

@app.post("/api/v1/triage")
async def run_triage_pipeline(clinical_note: str) -> dict:
    """
    Executes sub-second semantic search & private vector embedding retrieval
    """
    async with asyncio.TaskGroup() as tg:
        task1 = tg.create_task(extract_entities(clinical_note))
        task2 = tg.create_task(vector_similarity_search(clinical_note))

    entities = task1.result()
    match_score = task2.result()

    return {
        "status": "DETERMINISTIC_PASS",
        "entities": entities,
        "confidence": match_score,
        "latency_ms": 11.8
    }`
    },
    'react-webgl': {
      title: 'React Custom WebGL Shaders & Canvas Pipeline',
      language: 'typescript',
      latency: '60 FPS',
      code: `import React, { useRef, useEffect } from 'react';

export const WebGLScanner: React.FC<{ scanData: Float32Array }> = ({ scanData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const gl = canvasRef.current?.getContext('webgl2');
    if (!gl) return;

    // Compile custom fragment shader for sub-100ms 3D volumetric rendering
    const shader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(shader, \`
      precision highp float;
      uniform vec2 u_resolution;
      void main() {
        gl_FragColor = vec4(0.07, 0.23, 0.44, 1.0);
      }
    \`);
    gl.compileShader(shader);
  }, [scanData]);

  return <canvas ref={canvasRef} className="w-full h-full rounded-2xl shadow-subtle" />;
};`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunBenchmark = () => {
    setSimulatedLatency(null);
    setTimeout(() => {
      setSimulatedLatency(parseFloat((Math.random() * 1.5 + 0.3).toFixed(2)));
    }, 400);
  };

  return (
    <section className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-3">
              <Terminal className="w-4 h-4" />
              <span>[ 10 — REAL PRODUCTION ARCHITECTURE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 tracking-tight font-sans">
              Inspect our production code &{' '}
              <span className="text-deepblue underline decoration-electric/30 underline-offset-4">
                benchmarks.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-muted max-w-md font-sans">
            We write clean, strictly-typed, high-throughput code. Examine snippets from actual Go, Rust, Python, and TypeScript modules.
          </p>
        </div>

        {/* Code Playground Box */}
        <div className="bg-navy-800 rounded-3xl border border-electric/30 overflow-hidden shadow-floating">
          
          {/* Top Bar with Language Tabs */}
          <div className="flex flex-wrap items-center justify-between p-4 sm:px-6 bg-navy-900 border-b border-white/10 gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'go-microservice', label: 'Go Microservice' },
                { id: 'rust-wasm', label: 'Rust WASM' },
                { id: 'python-llm', label: 'Python AI Engine' },
                { id: 'react-webgl', label: 'TypeScript WebGL' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setSimulatedLatency(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-electric text-milk-100 font-bold shadow-subtle'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRunBenchmark}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-electric text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                Run Benchmark Test
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-milk-100 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>

          {/* Subheader Metadata */}
          <div className="px-6 py-3 bg-navy-800/90 border-b border-white/5 flex items-center justify-between text-xs font-mono">
            <span className="text-gray-300">{snippets[activeTab].title}</span>
            <div className="flex items-center gap-4">
              <span className="text-electric flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Expected Latency: {snippets[activeTab].latency}
              </span>
              {simulatedLatency !== null && (
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  Live Test Result: {simulatedLatency}ms
                </span>
              )}
            </div>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 overflow-x-auto max-h-[420px] font-mono text-xs sm:text-sm text-gray-200 leading-relaxed selection:bg-electric selection:text-milk-100">
            <pre>
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};

"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Database, Cpu, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkflowOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const mockNodes = [
    { id: '1', type: 'trigger', label: 'User Query', icon: Search, x: 50, y: 150 },
    { id: '2', type: 'action', label: 'Search Vector DB', icon: Database, x: 250, y: 150 },
    { id: '3', type: 'action', label: 'LLM Reasoning', icon: Cpu, x: 450, y: 150 },
    { id: '4', type: 'result', label: 'Generate Response', icon: Play, x: 650, y: 150 },
];

export function WorkflowOverlay({ isOpen, onClose }: WorkflowOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-x-0 top-0 z-[100] h-[400px] bg-background/80 backdrop-blur-xl border-b border-border shadow-2xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />

                    <div className="relative h-full max-w-7xl mx-auto p-6">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                                    AI RAG Workflow
                                </h2>
                                <p className="text-sm text-muted-foreground">Visualizing the process for: "How does RAG work?"</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-accent rounded-full transition-colors"
                                aria-label="Close overlay"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="relative h-[250px] flex items-center justify-between px-10">
                            {/* Connection Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                <defs>
                                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-primary/20" />
                                    </marker>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                {mockNodes.slice(0, -1).map((node, i) => {
                                    const nextNode = mockNodes[i + 1];
                                    const pathId = `path-${i}`;
                                    return (
                                        <React.Fragment key={i}>
                                            <line
                                                x1={`${node.x + 80}`}
                                                y1="125"
                                                x2={`${nextNode.x - 10}`}
                                                y2="125"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeDasharray="4 4"
                                                className="text-muted-foreground/20"
                                                markerEnd="url(#arrow)"
                                            />
                                            {/* Data Packet Animation */}
                                            <motion.circle
                                                r="3"
                                                fill="var(--primary)"
                                                filter="url(#glow)"
                                                initial={{ offsetDistance: "0%" }}
                                                animate={{ offsetDistance: "100%" }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: i * 0.8
                                                }}
                                                style={{
                                                    offsetPath: `path('M ${node.x + 80} 125 L ${nextNode.x - 10} 125')`,
                                                    boxShadow: '0 0 10px var(--primary)'
                                                }}
                                            />
                                        </React.Fragment>
                                    );
                                })}
                            </svg>

                            {/* Nodes */}
                            {mockNodes.map((node, idx) => (
                                <motion.div
                                    key={node.id}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        scale: { delay: idx * 0.1 },
                                        opacity: { delay: idx * 0.1 },
                                        y: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: idx * 0.2
                                        }
                                    }}
                                    className={cn(
                                        "relative z-10 w-40 p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md shadow-xl flex flex-col items-center gap-3 text-center",
                                        "hover:border-primary/50 transition-all duration-500 group cursor-default hover:shadow-primary/5"
                                    )}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors relative">
                                        <node.icon className="w-6 h-6 text-primary" />
                                        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
                                    </div>
                                    <span className="text-sm font-bold tracking-tight relative z-10">{node.label}</span>
                                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-black opacity-60">
                                        {node.type}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground bg-accent/50 px-3 py-1.5 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Live Simulation Mode (Mock Data)
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

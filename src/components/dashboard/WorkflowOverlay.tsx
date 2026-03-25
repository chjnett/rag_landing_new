"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Database, Cpu, Search, FileText, Upload, MessageSquare, GitBranch, CheckCircle, Activity, AlertTriangle, Wrench, GitCommit, Settings, GitMerge, Box, Cloud, Network, Maximize, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkflowOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
}

const serviceArchitectures: Record<string, any[]> = {
    "AI Solution": [
        { id: '1', type: 'trigger', label: 'User Request', icon: Search, x: 50, y: 150 },
        { id: '2', type: 'process', label: 'Prompt Engineer', icon: FileText, x: 250, y: 150 },
        { id: '3', type: 'action', label: 'LLM Agent', icon: Cpu, x: 450, y: 150 },
        { id: '4', type: 'result', label: 'Response Gen', icon: MessageSquare, x: 650, y: 150 },
    ],
    "RAG Optimization": [
        { id: '1', type: 'ingest', label: 'Data Ingestion', icon: Upload, x: 50, y: 150 },
        { id: '2', type: 'process', label: 'Vector Embedding', icon: Database, x: 250, y: 150 },
        { id: '3', type: 'action', label: 'Semantic Search', icon: Search, x: 450, y: 150 },
        { id: '4', type: 'result', label: 'LLM Generation', icon: Play, x: 650, y: 150 },
    ],
    "MLOps": [
        { id: '1', type: 'trigger', label: 'Data Pipeline', icon: GitBranch, x: 50, y: 150 },
        { id: '2', type: 'process', label: 'Model Training', icon: Cpu, x: 250, y: 150 },
        { id: '3', type: 'action', label: 'Model Testing', icon: CheckCircle, x: 450, y: 150 },
        { id: '4', type: 'result', label: 'Deploy & Monitor', icon: Activity, x: 650, y: 150 },
    ],
    "AIOps": [
        { id: '1', type: 'trigger', label: 'Log Collection', icon: FileText, x: 50, y: 150 },
        { id: '2', type: 'process', label: 'Anomaly Detect', icon: AlertTriangle, x: 250, y: 150 },
        { id: '3', type: 'action', label: 'Root Cause', icon: Search, x: 450, y: 150 },
        { id: '4', type: 'result', label: 'Auto Remediation', icon: Wrench, x: 650, y: 150 },
    ],
    "DevOps": [
        { id: '1', type: 'trigger', label: 'Code Commit', icon: GitCommit, x: 50, y: 150 },
        { id: '2', type: 'process', label: 'Build & Test', icon: Settings, x: 250, y: 150 },
        { id: '3', type: 'action', label: 'CI/CD Pipeline', icon: GitMerge, x: 450, y: 150 },
        { id: '4', type: 'result', label: 'Auto Deployment', icon: Box, x: 650, y: 150 },
    ],
    "Cloud Architecture": [
        { id: '1', type: 'trigger', label: 'Hybrid Cloud', icon: Cloud, x: 50, y: 150 },
        { id: '2', type: 'process', label: 'Load Balancing', icon: Network, x: 250, y: 150 },
        { id: '3', type: 'action', label: 'Auto Scaling', icon: Maximize, x: 450, y: 150 },
        { id: '4', type: 'result', label: 'High Availability', icon: Shield, x: 650, y: 150 },
    ],
};

export function WorkflowOverlay({ isOpen, onClose, serviceName }: WorkflowOverlayProps) {
    const defaultNodes = serviceArchitectures["RAG Optimization"];
    const nodes = serviceArchitectures[serviceName] || defaultNodes;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-x-0 top-[80px] z-[100] h-[400px] bg-background/95 backdrop-blur-2xl border-y border-border shadow-2xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />

                    <div className="relative h-full max-w-7xl mx-auto p-6 z-10">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                                    {serviceName} Architecture
                                </h2>
                                <p className="text-sm text-muted-foreground mt-1">Live visualization of processing nodes and pipeline.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-accent rounded-full transition-colors bg-background/50 border border-border"
                                aria-label="Close overlay"
                            >
                                <X className="w-5 h-5 text-foreground" />
                            </button>
                        </div>

                        <div className="relative h-[250px] flex items-center justify-between px-2 md:px-10 w-full">
                            {nodes.map((node, idx) => (
                                <React.Fragment key={node.id}>
                                    <motion.div
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
                                        className="relative z-10 w-32 md:w-40 p-4 md:p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-md shadow-xl flex flex-col items-center gap-3 text-center hover:border-primary/50 transition-all duration-500 group cursor-default hover:shadow-primary/5 shrink-0"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors relative">
                                            <node.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                            <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-60 transition-opacity rounded-full" />
                                        </div>
                                        <span className="text-sm font-bold tracking-tight relative z-10 text-foreground">{node.label}</span>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-black opacity-80">
                                            {node.type}
                                        </div>
                                    </motion.div>

                                    {/* Responsive Connection Line */}
                                    {idx !== nodes.length - 1 && (
                                        <div className="hidden sm:block flex-1 mx-2 md:mx-4 relative min-w-[30px] h-6 flex items-center">
                                            <div className="absolute inset-x-0 w-full h-full pointer-events-none">
                                                <svg width="100%" height="100%" preserveAspectRatio="none" style={{ overflow: "visible" }}>
                                                    {/* Background Dashed Line */}
                                                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-primary/20" />

                                                    {/* Infinite Moving Flow (Black Dots) */}
                                                    <motion.line
                                                        x1="0" y1="50%" x2="100%" y2="50%"
                                                        stroke="var(--foreground)"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                        strokeDasharray="0 24"
                                                        initial={{ strokeDashoffset: 24 }}
                                                        animate={{ strokeDashoffset: 0 }}
                                                        transition={{
                                                            duration: 1.2,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }}
                                                    />
                                                </svg>
                                            </div>

                                            {/* Arrowhead */}
                                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 text-primary/40">
                                                <svg width="10" height="10" viewBox="0 0 10 10">
                                                    <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-medium text-foreground bg-primary/10 border border-primary/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                            Live Simulation Mode
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

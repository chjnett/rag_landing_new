"use client";

import { motion } from 'framer-motion';
import { Code, CheckCircle2, Trophy, Clock, Brain, ListCheck, Save, ArrowLeft, Database } from 'lucide-react';
import Link from 'next/link';

export default function CodingTestEntry() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Link
                href="/admin/dashboard"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
            </Link>

            <header>
                <h1 className="text-3xl font-black tracking-tight mb-2">Log Test Session</h1>
                <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Update daily performance metrics</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <section className="glass-card p-8 rounded-3xl space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Platform</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-accent/50">
                                    <option>LeetCode</option>
                                    <option>Programmers</option>
                                    <option>Baekjoon</option>
                                    <option>HackerRank</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Difficulty</label>
                                <div className="flex gap-2">
                                    {['Easy', 'Medium', 'Hard'].map(d => (
                                        <button key={d} className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest border-accent/20 text-accent">
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Problem Title</label>
                            <input
                                type="text"
                                placeholder="e.g. 3Sum, Reversing Linked List..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-accent/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Solution Summary</label>
                            <textarea
                                placeholder="Briefly describe the algorithm used..."
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-accent/50"
                            />
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                            <button className="flex-1 py-4 bg-accent hover:bg-accent-hover text-black font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 group">
                                <Save className="w-5 h-5" />
                                Commit Session
                            </button>
                        </div>
                    </section>
                </div>

                <aside className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl text-center flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-4">
                            <Trophy className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-xl font-bold">Daily Streak</h3>
                        <p className="text-4xl font-black text-accent mt-2">14</p>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-1">Steady Progress</p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Suggested Tasks</h3>
                        <div className="space-y-3">
                            {[
                                { label: 'System Design', icon: Brain },
                                { label: 'SQL Tuning', icon: Database },
                                { label: 'Data Structures', icon: ListCheck },
                            ].map((task, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                    <task.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                                    <span className="text-xs font-bold">{task.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

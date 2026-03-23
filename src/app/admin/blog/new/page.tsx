"use client";

import { motion } from 'framer-motion';
import { Save, Eye, Layout, Type, Image as ImageIcon, Link as LinkIcon, Send } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function NewBlogPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [preview, setPreview] = useState(false);

    return (
        <div className="space-y-8 pb-20">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black tracking-tight mb-1">New Technical Post</h1>
                    <p className="text-white/40 text-sm font-medium uppercase tracking-widest">PostgreSQL & RAG Focused</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setPreview(!preview)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all font-bold text-sm"
                    >
                        {preview ? <Type className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {preview ? "Edit Mode" : "Preview"}
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 bg-accent hover:bg-accent-hover text-black rounded-lg transition-all font-black text-sm uppercase tracking-widest">
                        <Send className="w-4 h-4" />
                        Publish
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <input
                        type="text"
                        placeholder="Article Title..."
                        className="w-full bg-transparent border-none text-4xl font-extrabold focus:outline-none placeholder:text-white/10"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {preview ? (
                        <div className="glass-card p-8 rounded-2xl min-h-[500px] prose prose-invert max-w-none">
                            <h1 className="text-white">{title || "Untitled Post"}</h1>
                            <p className="text-white/60">
                                {content || "No content yet..."}
                            </p>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-lg mt-4 font-mono text-sm">
                // Preview of markdown code blocks
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-all"><Type className="w-4 h-4" /></button>
                                <button className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-all"><ImageIcon className="w-4 h-4" /></button>
                                <button className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-all"><LinkIcon className="w-4 h-4" /></button>
                            </div>
                            <textarea
                                placeholder="Write your technical analysis in Markdown..."
                                className="w-full h-[500px] bg-white/5 border border-white/10 rounded-2xl p-8 focus:outline-none focus:border-accent/40 transition-all text-lg leading-relaxed font-mono"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                    )}
                </div>

                <aside className="space-y-6">
                    <section className="glass-card p-6 rounded-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Post Settings</h3>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Category</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white/80 focus:outline-none">
                                    <option>Backend Architecture</option>
                                    <option>Frontend Systems</option>
                                    <option>RAG & AI</option>
                                    <option>Infrastructure</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Tags</label>
                                <input type="text" placeholder="Next.js, Python, etc." className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm focus:outline-none" />
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-full h-px bg-white/5" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-white/60">Featured Post</span>
                                <div className="w-10 h-5 bg-accent/20 border border-accent/40 rounded-full flex items-center px-1">
                                    <div className="w-3 h-3 bg-accent rounded-full translate-x-5" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="glass-card p-6 rounded-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">SEO Preview</h3>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                            <div className="h-3 w-3/4 bg-blue-400/20 rounded" />
                            <div className="h-2 w-full bg-green-400/20 rounded" />
                            <div className="h-2 w-5/6 bg-white/10 rounded" />
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
}

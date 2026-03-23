"use client";

import { motion } from 'framer-motion';
import {
    RefreshCw,
    Power,
    Plus,
    FileText,
    Code,
    CheckCircle2,
    AlertCircle,
    Database,
    Search,
    Layout
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminDashboard() {
    const [isSyncing, setIsSyncing] = useState(false);

    const handleSync = () => {
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 2000);
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-1">System Console</h1>
                    <p className="text-sm text-muted-foreground font-medium">Operational control panel and logs.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleSync}
                        disabled={isSyncing}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md border border-border transition-all font-bold text-xs disabled:opacity-50"
                    >
                        <RefreshCw className={cn("w-3.5 h-3.5", isSyncing && "animate-spin")} />
                        {isSyncing ? "Syncing..." : "Sync Database"}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-background border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground rounded-md transition-all font-bold text-xs">
                        <Power className="w-3.5 h-3.5" />
                        Full Reboot
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-foreground">
                {/* Main Actions Area */}
                <div className="lg:col-span-3 space-y-6">
                    <section className="card-minimal p-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Quick Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Link href="#" className="p-6 bg-background hover:bg-secondary border border-border rounded-lg transition-all flex flex-col items-center gap-3">
                                <Database className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-wider">New Project</span>
                            </Link>
                            <Link href="/admin/blog/new" className="p-6 bg-background hover:bg-secondary border border-border rounded-lg transition-all flex flex-col items-center gap-3">
                                <FileText className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-wider">Draft Post</span>
                            </Link>
                            <Link href="/admin/coding-test" className="p-6 bg-background hover:bg-secondary border border-border rounded-lg transition-all flex flex-col items-center gap-3">
                                <Code className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-wider">Log Test</span>
                            </Link>
                        </div>
                    </section>

                    <section className="card-minimal p-0">
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Operational Logs</h2>
                            <div className="relative">
                                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Filter stderr..."
                                    className="bg-background border border-border rounded-md py-1 pl-9 pr-3 text-xs focus:outline-none w-48 font-mono"
                                />
                            </div>
                        </div>
                        <div className="p-6 space-y-4 font-mono text-[10px]">
                            <div className="flex gap-4 p-2 hover:bg-secondary/30 rounded border-l-2 border-primary transition-all">
                                <span className="text-muted-foreground">21:05:44</span>
                                <span className="text-primary font-bold">INFO</span>
                                <span className="text-muted-foreground">system_monitor_v2 initialized successfully</span>
                            </div>
                            <div className="flex gap-4 p-2 hover:bg-secondary/30 rounded border-l-2 border-destructive transition-all">
                                <span className="text-muted-foreground">21:02:12</span>
                                <span className="text-destructive font-bold">WARN</span>
                                <span className="text-muted-foreground">RAG node 01: request timeout from pg_vector</span>
                            </div>
                            <div className="flex gap-4 p-2 hover:bg-secondary/30 rounded border-l-2 border-primary transition-all">
                                <span className="text-muted-foreground">20:45:01</span>
                                <span className="text-primary font-bold">INFO</span>
                                <span className="text-muted-foreground">db_sync complete: 12 entries updated</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Info Sidebar Area */}
                <aside className="space-y-6">
                    <section className="card-minimal p-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Cluster Health</h2>
                        <div className="space-y-6">
                            {[
                                { label: 'CPU Usage', val: 12, color: 'bg-primary' },
                                { label: 'Memory Usage', val: 78, color: 'bg-primary/60' },
                                { label: 'Disk IO', val: 4, color: 'bg-primary' },
                            ].map((m) => (
                                <div key={m.label} className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                        <span>{m.label}</span>
                                        <span className="text-foreground">{m.val}%</span>
                                    </div>
                                    <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                                        <div className={cn("h-full transition-all", m.color)} style={{ width: `${m.val}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="card-minimal p-6 border-primary/20 bg-secondary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                                <Layout className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest">Metadata Model</p>
                                <p className="text-[10px] text-muted-foreground font-mono">cluster_v4_active</p>
                            </div>
                        </div>
                        <button className="w-full py-2 text-[10px] font-bold text-muted-foreground border border-border hover:border-muted-foreground hover:text-foreground rounded transition-all uppercase tracking-widest">
                            Advanced Config
                        </button>
                    </section>
                </aside>
            </div>
        </div>
    );
}

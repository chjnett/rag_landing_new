"use client";

import { motion } from 'framer-motion';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/admin/dashboard');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-minimal p-8 w-full max-w-md"
            >
                <div className="flex flex-col items-center mb-10">
                    <div className="w-12 h-12 rounded bg-primary flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Console Access</h1>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em] font-medium">Authentication Required</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Identity</label>
                        <div className="relative">
                            <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full bg-background border border-border rounded-md py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Access Key</label>
                        <div className="relative">
                            <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="Secret Key"
                                className="w-full bg-background border border-border rounded-md py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                    >
                        Authenticate
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </form>

                <div className="mt-10 pt-6 border-t border-border mt-auto">
                    <p className="text-[9px] text-muted-foreground/30 font-mono text-center tracking-widest">
                        SECURE_TERMINAL_V2.0 // NO_UNAUTHORIZED_ACCESS
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

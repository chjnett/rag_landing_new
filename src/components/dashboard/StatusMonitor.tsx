"use client";

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { mockStats } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function StatusMonitor() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {mockStats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-minimal p-6 flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                        <div className="flex h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase">Live</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

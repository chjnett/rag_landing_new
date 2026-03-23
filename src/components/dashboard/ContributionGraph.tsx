"use client";

import { motion } from 'framer-motion';
import { generateContributionData } from '@/lib/mock-data';
import { useMemo, useState, useEffect } from 'react';

export function ContributionGraph() {
    const [mounted, setMounted] = useState(false);
    const data = useMemo(() => generateContributionData(), []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="card-minimal p-6 border-zinc-800 h-[200px] animate-pulse bg-secondary/20" />;

    const getColor = (count: number) => {
        if (count === 0) return 'bg-[#161b22]'; // GitHub base empty color
        if (count < 3) return 'bg-[#0e4429]';
        if (count < 6) return 'bg-[#006d32]';
        if (count < 9) return 'bg-[#26a641]';
        return 'bg-[#39d353]'; // GitHub bright green
    };

    const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

    return (
        <div className="card-minimal p-6 border-zinc-800">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-medium">81 contributions in the last year</h3>
                <button className="text-[10px] text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors">
                    Contribution settings ▾
                </button>
            </div>

            <div className="relative overflow-x-auto pb-2">
                <div className="flex gap-4 text-[10px] text-muted-foreground mb-2 px-8">
                    {months.map(m => <span key={m} className="flex-1 min-w-[32px]">{m}</span>)}
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col justify-between text-[10px] text-muted-foreground pb-4 pt-1">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                    </div>

                    <div className="flex-1 grid grid-flow-col grid-rows-7 gap-[3px]">
                        {data.map((day, i) => (
                            <motion.div
                                key={day.date}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.001 }}
                                className={`w-[11px] h-[11px] rounded-[2px] ${getColor(day.count)} cursor-crosshair border border-transparent hover:border-zinc-400 transition-all`}
                                title={`${day.date}: ${day.count} contributions`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <button className="text-[11px] text-[#58a6ff] hover:underline">
                    Learn how we count contributions
                </button>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span>Less</span>
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#161b22]" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429]" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#006d32]" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641]" />
                    <div className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353]" />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}

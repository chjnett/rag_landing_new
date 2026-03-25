import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export interface TechStackData {
    id: string;
    name: string;
    subTitle?: string;
    status: string;
    icon: string;
    tags: string[];
    bgColor?: string;
    statusColor?: string;
    proficiency?: any[];
    experience?: string;
}

interface TechStackProps {
    stack: TechStackData;
    index: number;
    showRadarCharts?: boolean;
}

export function TechStackCard({ stack, index, showRadarCharts = true }: TechStackProps) {
    const [isExpOpen, setIsExpOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                onClick={() => setIsExpOpen(true)}
                className={cn(
                    "card-minimal p-6 flex flex-col gap-4 group h-full cursor-pointer relative",
                    "!bg-card/40 backdrop-blur-xl border-white/5 hover:border-primary/30 transition-all duration-300 rounded-[24px]",
                    "border border-white/10"
                )}
            >
                <div className="flex justify-between items-start z-10">
                    <div className="w-12 h-12 p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                        {stack.icon ? (
                            <img src={stack.icon} alt={stack.name} className="w-full h-full object-contain" />
                        ) : (
                            <div className="w-full h-full bg-primary/20 rounded-md" />
                        )}
                    </div>
                    <span className={cn(
                        "text-[9px] font-black px-2 py-0.5 rounded-full border border-current font-mono uppercase tracking-[0.1em] backdrop-blur-md",
                        stack.statusColor || "text-muted-foreground border-border"
                    )}>
                        {stack.status || "Active"}
                    </span>
                </div>

                <div className="z-10">
                    <h3 className="text-xl font-bold tracking-tight text-white">
                        {stack.name} <span className="text-muted-foreground font-medium text-sm block sm:inline">{stack.subTitle}</span>
                    </h3>
                </div>

                {/* 기술 숙련도 방사형 차트 */}
                <AnimatePresence>
                    {showRadarCharts && stack.proficiency && stack.proficiency.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 160 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="w-full mt-2 relative"
                        >
                            <div className="absolute inset-0 w-full h-full min-h-[160px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={stack.proficiency}>
                                        <PolarGrid stroke="rgba(255,255,255,0.05)" />
                                        <PolarAngleAxis
                                            dataKey="subject"
                                            tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 8, fontWeight: 700 }}
                                        />
                                        <Radar
                                            name={stack.name}
                                            dataKey="A"
                                            stroke="var(--primary, #3b82f6)"
                                            fill="var(--primary, #3b82f6)"
                                            fillOpacity={0.15}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-1.5 mt-auto z-10">
                    {(stack.tags || []).map(tag => (
                        <span
                            key={tag}
                            className="text-[9px] font-bold px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-muted-foreground hover:text-white transition-all duration-300 hover:border-primary/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* 백그라운드 빛샘 효과 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors" />
            </motion.div>

            {/* 카드 클릭 시 나타나는 상세 경험 모달 */}
            <AnimatePresence>
                {isExpOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsExpOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-2xl bg-[#0d1117] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    {stack.icon ? (
                                        <img src={stack.icon} alt={stack.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <div className="w-full h-full bg-primary/20 rounded-md" />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black tracking-tight text-white">{stack.name}</h2>
                                    <p className="text-muted-foreground font-medium">{stack.subTitle || 'Experience & Achievements'}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] border-b border-white/10 pb-2">경험 및 성과</h4>
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 min-h-[200px] max-h-[400px] overflow-y-auto custom-scrollbar">
                                    {stack.experience ? (
                                        <p className="text-sm leading-relaxed text-white/90 whitespace-pre-wrap">
                                            {stack.experience}
                                        </p>
                                    ) : (
                                        <p className="text-sm italic text-muted-foreground text-center py-10">
                                            등록된 경험 정보가 없습니다.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsExpOpen(false)}
                                className="mt-8 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                            >
                                닫기
                            </motion.button>

                            {/* 모달 배경 빛샘 효과 */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

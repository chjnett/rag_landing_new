"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Skeleton } from '@/components/ui/Skeleton';
import { useContentStore } from '@/store/useContentStore';
import { TechStackCard } from '@/components/dashboard/TechStackCard';
import { ServiceCards } from '@/components/dashboard/ServiceCards';
import { WorkflowOverlay } from '@/components/dashboard/WorkflowOverlay';

export default function LandingPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeWorkflow, setActiveWorkflow] = React.useState<string | null>(null);
  const { content, isLoaded: contentLoaded } = useContentStore();
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 200]);
  const heroImageScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  React.useEffect(() => {
    if (contentLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [contentLoaded]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-clip">

      <WorkflowOverlay
        isOpen={!!activeWorkflow}
        onClose={() => setActiveWorkflow(null)}
        serviceName={activeWorkflow || "AI Solution"}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center text-center pt-20 pb-40 space-y-12 overflow-hidden">
          <div className="space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md"
            >
              <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              Enterprise AI Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-white"
            >
              The Future of <br className="hidden md:block" />
              <span className="text-white/40">
                AI Solutions & MLOps
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed tracking-tight"
            >
              RAG 기반 맞춤형 LLM부터 AIOps, Cloud 인프라까지.<br />
              비즈니스 가치를 극대화하는 엔드투엔드 AI 기술 솔루션.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
                Consult with AI Experts
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                Explore Architecture
              </button>
            </motion.div>
          </div>

          {/* Cinematic Hero Image */}
          <motion.div
            style={{ y: heroImageY, scale: heroImageScale }}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto relative mt-12"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-3xl shadow-2xl">
                <img
                  src="/main.png"
                  alt="AI Infrastructure Visual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Visual Accents */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
          </motion.div>
        </section>

        {/* Services Cards Section */}
        <ServiceCards onSelectService={setActiveWorkflow} />

        {/* 2. Core Capabilities (Tech Stacks) */}
        <section className="py-32" id="solutions">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">Proven Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              당사의 핵심 기술 스택과 전문성을 확인해보세요. 각 분야별 최고 수준의 인프라 구축 역량을 입증합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="card-minimal p-6 flex flex-col gap-4 min-h-[350px] border-border bg-card">
                  <Skeleton className="w-12 h-12 rounded-xl bg-muted" />
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-3/4 bg-muted" />
                    <Skeleton className="h-4 w-1/2 bg-muted" />
                  </div>
                  <Skeleton className="h-40 w-full mt-4 bg-muted" />
                  <div className="flex gap-2 mt-auto">
                    <Skeleton className="h-6 w-16 bg-muted" />
                    <Skeleton className="h-6 w-16 bg-muted" />
                  </div>
                </div>
              ))
            ) : (
              content.techStacks.map((stack: any, index: number) => (
                <div key={stack.id} className="col-span-1">
                  <TechStackCard stack={stack} index={index} />
                </div>
              ))
            )}
          </div>
        </section>

        {/* 3. CTA Section */}
        <section className="py-24 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />

            <h2 className="text-4xl font-black mb-6 relative z-10 text-foreground">Ready to build the future?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
              최첨단 AI 인프라와 자동화 솔루션을 통해 귀하의 비즈니스를 한 단계 도약시킬 준비가 되었습니다.
            </p>
            <button className="relative z-10 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all">
              Start Your AI Journey
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

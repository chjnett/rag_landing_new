"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/Skeleton';
import { useContentStore } from '@/store/useContentStore';
import { TechStackCard } from '@/components/dashboard/TechStackCard';
import { ServiceCards } from '@/components/dashboard/ServiceCards';
import { WorkflowOverlay } from '@/components/dashboard/WorkflowOverlay';

export default function LandingPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeWorkflow, setActiveWorkflow] = React.useState<string | null>(null);
  const { content, isLoaded: contentLoaded } = useContentStore();

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
        <section className="flex flex-col items-center justify-center text-center min-h-[60vh] space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium text-muted-foreground backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-foreground" />
            Enterprise AI Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground"
          >
            The Future of <br className="hidden md:block" />
            <span className="text-foreground/80">
              AI Solutions & MLOps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            RAG 기반 맞춤형 LLM부터 AIOps, Cloud 인프라, MLOps, DevOps까지.<br />
            비즈니스 가치를 극대화하는 엔드투엔드 AI 기술 솔루션을 제공합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-4 pt-8"
          >
            <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
              Consult with AI Experts
            </button>
            <button className="px-8 py-4 rounded-xl bg-background border border-input text-foreground font-bold hover:bg-accent hover:text-accent-foreground transition-colors backdrop-blur-md">
              Explore Architecture
            </button>
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

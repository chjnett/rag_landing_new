"use client";

import React from 'react';
import { ProfileSidebar } from '@/components/dashboard/ProfileSidebar';
import { TechStackCard } from '@/components/dashboard/TechStackCard';
import { ContributionGraph } from '@/components/dashboard/ContributionGraph';
import { motion } from 'framer-motion';
import { WorkflowOverlay } from '@/components/dashboard/WorkflowOverlay';
import { Skeleton } from '@/components/ui/Skeleton';
import { ChatInterface } from '@/components/dashboard/ChatInterface';
import { useContentStore } from '@/store/useContentStore';

export default function DashboardPage() {
  const [isWorkflowOpen, setIsWorkflowOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { content, isLoaded: contentLoaded } = useContentStore();

  React.useEffect(() => {
    if (contentLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [contentLoaded]);

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <WorkflowOverlay
        isOpen={isWorkflowOpen}
        onClose={() => setIsWorkflowOpen(false)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
        {/* Left Column: Profile */}
        <div className="lg:col-span-3">
          <ProfileSidebar onSendMessage={() => setIsWorkflowOpen(true)} />
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-9 space-y-12 pb-24">
          <section id="tech-stack">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium">Tech Stack Deep Dive</h2>
              <button className="text-xs text-[#58a6ff] hover:underline">Customize your pins</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="card-minimal p-6 flex flex-col gap-4 h-[200px] border-white/5 bg-white/5">
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                ))
              ) : (
                content.techStacks.map((stack: any, index: number) => (
                  <TechStackCard key={stack.id} stack={stack} index={index} />
                ))
              )}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium">81 contributions in the last year</h2>
            </div>
            <ContributionGraph />
          </section>

          <section className="pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Contribution activity</span>
            </div>
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-border" />
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold mb-4">March 2026</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <p>Created <span className="text-foreground font-medium">12 new entries</span> in technical blog system</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <p>Optimized <span className="text-foreground font-medium">PostgreSQL indexing</span> for vector retrieval</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ChatInterface onSendMessage={() => setIsWorkflowOpen(true)} />
    </div>
  );
}


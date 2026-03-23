"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useContentStore } from '@/store/useContentStore';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { content, isLoaded } = useContentStore();
    const crackedParams = React.use(params);

    if (!isLoaded) return null;

    const post = content.blogPosts.find((p: any) => p.slug === crackedParams.slug || p.id === crackedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto space-y-12">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]"
            >
                <ArrowLeft className="w-3.5 h-3.5" />
                Return to archive
            </Link>

            <header className="space-y-6">
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                    </span>
                    {post.category && (
                        <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                            {post.category}
                        </span>
                    )}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                    {post.title}
                </h1>
                <div className="flex items-center justify-between pt-6 border-b border-border pb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-xs">
                            CJ
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider">Cheon Hyeonjun</p>
                            <p className="text-[10px] text-muted-foreground font-mono italic">Staff Engineer // Modern Dashboard</p>
                        </div>
                    </div>
                </div>
            </header>

            <article className="prose prose-zinc prose-invert max-w-none text-muted-foreground leading-relaxed text-base space-y-8">
                <div className="whitespace-pre-wrap font-sans">
                    {post.content || post.excerpt}
                </div>

                {/* Fallback to original layout if no content is provided (for items not updated yet) */}
                {!post.content && (
                    <>
                        <h3 className="text-foreground font-bold text-2xl tracking-tight pt-4 border-l-2 border-primary pl-6">Technical Architecture</h3>
                        <p>
                            Implementing high-performance dashboards requires a careful balance between real-time data fetching and smooth UI transitions. Using Next.js App Router and Framer Motion allows us to achieve this with minimal overhead.
                        </p>
                        <div className="p-6 bg-secondary/30 border border-border rounded-lg font-mono text-[11px] whitespace-pre text-foreground/70">
                            {`// Example code snippet placeholder
const metrics = useRealTimeMetrics();
return <Dashboard data={metrics} /> ;`}
                        </div>
                    </>
                )}
            </article>
        </div>
    );
}

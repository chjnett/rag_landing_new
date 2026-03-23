"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useContentStore } from '@/store/useContentStore';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

export default function BlogPage() {
    return (
        <React.Suspense fallback={<div className="animate-pulse">Loading blog...</div>}>
            <BlogContent />
        </React.Suspense>
    );
}

function BlogContent() {
    const { content, isLoaded } = useContentStore();
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = React.useState(categoryParam || 'All');

    // Sync state with URL parameter
    React.useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        } else {
            setSelectedCategory('All');
        }
    }, [categoryParam]);

    if (!isLoaded) return null;

    const categories = ['All', ...Array.from(new Set(content.blogPosts.map((p: any) => p.category).filter(Boolean)))];
    const filteredPosts = selectedCategory === 'All'
        ? content.blogPosts
        : content.blogPosts.filter((p: any) => p.category === selectedCategory);

    return (
        <div className="space-y-10">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Technical Blog</h1>
                    <p className="text-muted-foreground text-lg font-medium">Deep dives into engineering challenges and solutions.</p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat: any) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border",
                                selectedCategory === cat
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                    : "bg-secondary/30 text-muted-foreground border-white/5 hover:border-white/10"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post: any) => (
                    <Link key={post.id} href={`/blog/${post.slug || post.id}`}>
                        <div className="card-minimal flex flex-col h-full hover:bg-secondary/20 group relative overflow-hidden">
                            <div className="p-8 flex flex-col h-full z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    {post.category && (
                                        <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[9px] font-black uppercase tracking-wider border border-primary/20">
                                            {post.category}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">
                                    Read Full Analysis
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors" />
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-muted-foreground italic">No posts found in this category.</p>
                </div>
            )}
        </div>
    );
}

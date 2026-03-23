"use client";

import { useState } from 'react';
import {
    Users,
    Building2,
    MapPin,
    Link as LinkIcon,
    Twitter,
    Sparkles,
    Send,
    Award,
    Star,
    Heart,
    Github
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useContentStore } from '@/store/useContentStore';

interface ProfileSidebarProps {
    onSendMessage?: (message: string) => void;
}

export function ProfileSidebar({ onSendMessage }: ProfileSidebarProps) {
    const { content, isLoaded } = useContentStore();
    const [showMore, setShowMore] = useState(false);
    const [input, setInput] = useState('');

    if (!isLoaded || !content.profile) return null;

    const { profile } = content;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSendMessage?.(input);
        setInput('');
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            {/* Avatar Section */}
            <div className="flex lg:flex-col gap-6 items-center lg:items-stretch">
                <div className="relative group w-24 lg:w-full shrink-0">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-full aspect-square rounded-[24px] lg:rounded-[32px] border border-border overflow-hidden bg-secondary/50 shadow-2xl relative"
                    >
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 w-8 h-8 lg:w-10 lg:h-10 bg-background border border-border rounded-xl lg:rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl z-10">
                        <span className="text-xs lg:text-sm">🚀</span>
                    </div>
                </div>

                <div className="flex-1 space-y-1">
                    <h1 className="text-xl lg:text-2xl font-bold tracking-tight">{profile.name}</h1>
                    <div className="flex items-center gap-2">
                        <p className="text-base lg:text-lg text-muted-foreground font-light">{profile.username}</p>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">PRO</span>
                    </div>
                </div>
            </div>

            {/* Name and Bio */}
            <div className="space-y-4">
                <div className="text-sm leading-relaxed text-muted-foreground bg-secondary/20 p-4 rounded-2xl border border-border/50">
                    {profile.role} <span className="text-foreground font-medium">| {profile.bio}</span>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="w-full py-2 text-xs font-bold text-muted-foreground hover:text-foreground border border-border/50 rounded-xl lg:hidden flex items-center justify-center gap-2"
                >
                    {showMore ? '간략히 보기' : '상세 정보 보기'}
                    <Sparkles className={cn("w-3 h-3 transition-transform", showMore && "rotate-180")} />
                </button>

                <div className={cn(
                    "space-y-4 transition-all duration-500 overflow-hidden",
                    showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 lg:max-h-[1000px] lg:opacity-100"
                )}>
                    <div className="flex flex-col gap-2.5 pt-2">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-default">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>Independent Developer</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-default">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <LinkIcon className="w-3.5 h-3.5" />
                            <a href={profile.website} target="_blank" rel="noreferrer">{profile.website.replace('https://', '')}</a>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-3.5 h-3.5" />
                            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground hover:text-blue-400 transition-colors">
                            <Twitter className="w-3.5 h-3.5" />
                            <a href={profile.twitter} target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/50">
                        <motion.div whileTap={{ scale: 0.95 }} className="flex flex-col items-center gap-1 cursor-default">
                            <span className="text-sm font-bold">1.2k</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Followers</span>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.95 }} className="flex flex-col items-center gap-1 cursor-default">
                            <span className="text-sm font-bold">480</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Following</span>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.95 }} className="flex flex-col items-center gap-1 cursor-default">
                            <span className="text-sm font-bold">8.4k</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Stars</span>
                        </motion.div>
                    </div>
                </div>

                {/* AI Chat Input - Redesigned */}
                <div className="pt-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-1">AI Assistant</p>
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex items-center bg-background/40 backdrop-blur-md border border-border rounded-2xl p-1 shadow-lg focus-within:ring-2 focus-within:ring-primary/20 transition-all group"
                    >
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 ml-0.5 group-focus-within:bg-primary/20 transition-colors">
                            <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-xs px-2 placeholder:text-muted-foreground h-9"
                        />
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            disabled={!input.trim()}
                            className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <Send className="w-3.5 h-3.5" />
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
}

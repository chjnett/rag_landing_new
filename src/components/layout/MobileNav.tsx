"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Home,
    Cpu,
    Briefcase,
    BookOpen,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNav() {
    const pathname = usePathname();

    const items = [
        { name: '홈', icon: <Home className="w-5 h-5" />, href: '/' },
        { name: '스택', icon: <Cpu className="w-5 h-5" />, href: pathname === '/' ? '#tech-stack' : '/#tech-stack' },
        { name: '프로젝트', icon: <Briefcase className="w-5 h-5" />, href: '/projects' },
        { name: '블로그', icon: <BookOpen className="w-5 h-5" />, href: '/blog' },
        { name: '관리', icon: <Settings className="w-5 h-5" />, href: '/admin/settings' },
    ];

    return (
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-md">
            <nav className="bg-background/60 backdrop-blur-2xl border border-white/10 rounded-[24px] p-2 flex items-center justify-between shadow-2xl">
                {items.map((item) => {
                    const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative flex flex-col items-center justify-center flex-1 py-1.5"
                        >
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                className={cn(
                                    "p-2 rounded-2xl transition-all duration-300",
                                    isActive
                                        ? "text-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.icon}
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-nav-active"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                    />
                                )}
                            </motion.div>
                            <span className={cn(
                                "text-[9px] font-bold mt-1 transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground"
                            )}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

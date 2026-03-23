"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Settings,
    LogOut,
    ChevronLeft,
    Menu,
    Home,
    Cpu,
    BookOpen,
    Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from '../ModeToggle';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { useSettingsStore } from '@/store/useSettingsStore';
import { useContentStore } from '@/store/useContentStore';
import { DynamicIcon } from '../ui/DynamicIcon';


const adminItems = [
    { name: '시스템 설정', href: '/admin/settings', icon: 'Settings' },
];

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const { settings, isLoaded } = useSettingsStore();
    const { content } = useContentStore();


    // Default items while loading to prevent flicker
    const navItems = (isLoaded ? settings.navItems : []) ?? [];

    const isExpanded = !isCollapsed || isHovered;

    const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
        <div className="flex flex-col h-full py-6">
            <Link
                href="/"
                className="px-6 mb-8 flex items-center gap-3 group/logo no-underline"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
            >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0 group-hover/logo:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all">
                    <AnimatePresence mode="wait">
                        {isLogoHovered ? (
                            <motion.div
                                key="home-icon"
                                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                            >
                                <Home className="w-4 h-4 text-primary-foreground" />
                            </motion.div>
                        ) : (
                            <motion.span
                                key="c-text"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="text-primary-foreground font-bold italic"
                            >
                                C
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                {(isExpanded || mobile) && (
                    <div className="flex flex-col justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            {isLogoHovered ? (
                                <motion.span
                                    key="home-label"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    className="font-black tracking-tighter text-lg text-primary"
                                >
                                    HOME
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="brand-label"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    className="font-bold tracking-tight text-lg"
                                >
                                    chj.dev
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </Link>

            <nav className="flex-1 px-3 space-y-8 overflow-y-auto no-scrollbar">
                <div>
                    <div className={cn(
                        "text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-3 mb-4 transition-opacity duration-300",
                        (!isExpanded && !mobile) && "opacity-0"
                    )}>
                        개요
                    </div>
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium relative group",
                                        isActive
                                            ? "bg-primary/10 text-primary shadow-[0_0_20px_rgba(var(--primary),0.05)] border border-primary/10"
                                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                                    )}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="shrink-0"
                                    >
                                        <DynamicIcon
                                            name={item.icon}
                                            className={cn(
                                                "w-4 h-4 transition-colors",
                                                isActive ? "text-primary" : "group-hover:text-primary"
                                            )}
                                        />
                                    </motion.div>
                                    {(isExpanded || mobile) && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="whitespace-nowrap"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId={`active-indicator${mobile ? '-mobile' : ''}`}
                                            className="absolute left-0 w-1 h-4 bg-primary rounded-r-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {(!isExpanded && !mobile) && (
                                        <div className="absolute left-full ml-4 px-2 py-1 bg-popover text-popover-foreground text-[10px] rounded-md shadow-xl border border-border opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50">
                                            {item.name}
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Technical Stack Section */}
                <div>
                    <div className={cn(
                        "text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-3 mb-4 transition-opacity duration-300",
                        (!isExpanded && !mobile) && "opacity-0"
                    )}>
                        콘텐츠
                    </div>
                    <div className="space-y-1">
                        {[
                            {
                                name: '기술 스택',
                                icon: <Cpu className="w-4 h-4" />,
                                href: pathname.startsWith('/admin')
                                    ? '/admin/settings?tab=content&section=techStack'
                                    : '/#tech-stack'
                            },
                            {
                                name: '프로젝트',
                                icon: <Briefcase className="w-4 h-4" />,
                                href: pathname.startsWith('/admin')
                                    ? '/admin/settings?tab=content&section=project'
                                    : '/projects'
                            },
                            {
                                name: '블로그 포스트',
                                icon: <BookOpen className="w-4 h-4" />,
                                href: pathname.startsWith('/admin')
                                    ? '/admin/settings?tab=content&section=blog'
                                    : '/blog',
                                subItems: !pathname.startsWith('/admin') ? Array.from(new Set(content.blogPosts.map((p: any) => p.category).filter(Boolean))) : []
                            },
                        ].map((item: any) => {
                            const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
                            return (
                                <div key={item.name} className="space-y-1">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium relative group",
                                            isActive
                                                ? "bg-primary/10 text-primary shadow-[0_0_20px_rgba(var(--primary),0.05)] border border-primary/10"
                                                : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                                        )}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="shrink-0"
                                        >
                                            <div className={cn(
                                                "transition-colors",
                                                isActive ? "text-primary" : "group-hover:text-primary"
                                            )}>
                                                {item.icon}
                                            </div>
                                        </motion.div>
                                        {(isExpanded || mobile) && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="whitespace-nowrap"
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                        {isActive && (
                                            <motion.div
                                                layoutId={`active-indicator-content${mobile ? '-mobile' : ''}-${item.name}`}
                                                className="absolute left-0 w-1 h-4 bg-primary rounded-r-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {(!isExpanded && !mobile) && (
                                            <div className="absolute left-full ml-4 px-2 py-1 bg-popover text-popover-foreground text-[10px] rounded-md shadow-xl border border-border opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50">
                                                {item.name}
                                            </div>
                                        )}
                                    </Link>

                                    {/* Sub Items (Categories) */}
                                    {item.subItems && item.subItems.length > 0 && (isExpanded || mobile) && (
                                        <div className="ml-9 space-y-1 mt-1 border-l border-border/50 pl-2">
                                            {item.subItems.map((subItem: string) => {
                                                const subHref = `/blog?category=${subItem}`;
                                                const isSubActive = pathname === '/blog' && (new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('category') === subItem);
                                                return (
                                                    <Link
                                                        key={subItem}
                                                        href={subHref}
                                                        className={cn(
                                                            "block py-1.5 px-3 rounded-lg text-xs font-medium transition-colors",
                                                            isSubActive
                                                                ? "text-primary bg-primary/5 font-bold"
                                                                : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                                                        )}
                                                    >
                                                        {subItem}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </nav>

            <div className="px-3 mt-auto pt-6 border-t border-border/50 space-y-2">
                <Link
                    href="/admin/settings"
                    className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium group",
                        pathname.startsWith('/admin')
                            ? "bg-primary/10 text-primary border border-primary/10"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground border border-transparent"
                    )}
                >
                    <Settings className={cn(
                        "w-4 h-4 transition-colors",
                        pathname.startsWith('/admin') ? "text-primary" : "group-hover:text-primary"
                    )} />
                    {(isExpanded || mobile) && (
                        <span className="whitespace-nowrap">관리자 설정</span>
                    )}
                    {(!isExpanded && !mobile) && (
                        <div className="absolute left-full ml-4 px-2 py-1 bg-popover text-popover-foreground text-[10px] rounded-md shadow-xl border border-border opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50">
                            관리자 설정
                        </div>
                    )}
                </Link>

                <div className="pt-2 space-y-4">
                    <div className={cn("flex items-center gap-3", (!isExpanded && !mobile) ? "justify-center" : "px-3")}>
                        <ModeToggle />
                        {(isExpanded || mobile) && (
                            <span className="text-xs font-medium text-muted-foreground">테마 모드</span>
                        )}
                    </div>
                    {!mobile && (
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-muted-foreground hover:bg-accent/50 transition-colors hidden lg:flex"
                        >
                            <div className={cn(
                                "shrink-0 transition-transform duration-500",
                                isCollapsed ? "rotate-180" : "rotate-0"
                            )}>
                                <ChevronLeft className="w-4 h-4" />
                            </div>
                            {isExpanded && <span className="text-sm font-medium">접기</span>}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 h-full bg-background/50 backdrop-blur-2xl border-r border-border z-40 transition-all duration-500 ease-in-out hidden lg:block",
                    isExpanded ? "w-64" : "w-20"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <SidebarContent />
            </aside>

            {/* Mobile Nav Trigger */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-2.5 bg-background/80 backdrop-blur-xl border border-border rounded-xl shadow-xl hover:bg-accent transition-colors">
                            <Menu className="w-5 h-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 border-r border-border/50 backdrop-blur-3xl bg-background/90 max-w-[280px]">
                        <SidebarContent mobile />
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}

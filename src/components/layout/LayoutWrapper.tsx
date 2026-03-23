"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Navbar';
import { MobileNav } from './MobileNav';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Dynamic breadcrumb items
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        // Simple capitalization and mapping for labels
        const labels: Record<string, string> = {
            'admin': 'Admin',
            'settings': 'Settings',
            'projects': 'Projects',
            'monitoring': 'Monitoring',
            'blog': 'Blog',
            'tests': 'Coding Tests'
        };
        return {
            label: labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
            href: index === pathSegments.length - 1 ? undefined : href
        };
    });

    return (
        <div className="flex min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={cn(
                "flex-1 p-4 lg:p-8 relative transition-all duration-500 ease-in-out flex flex-col mb-20 lg:mb-0",
                isCollapsed ? "lg:ml-20" : "lg:ml-64",
                "ml-0"
            )}>
                {pathname !== '/' && <Breadcrumb items={breadcrumbItems} />}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-7xl mx-auto"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <MobileNav />
        </div>
    );
}


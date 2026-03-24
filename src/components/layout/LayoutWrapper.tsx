"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

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
        <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
            <main className="flex-1 relative transition-all duration-500 flex flex-col w-full">
                {pathname !== '/' && (
                    <div className="px-6 py-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                )}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

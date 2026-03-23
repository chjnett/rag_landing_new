import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-muted-foreground mb-6", className)}>
            <ol className="flex items-center gap-2">
                <li className="flex items-center italic">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                    >
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="flex items-center">
                            <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                        </li>
                        <li className="flex items-center">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-foreground transition-colors font-medium"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-foreground font-bold">{item.label}</span>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
}

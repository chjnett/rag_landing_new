"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { mockTechStacks, mockProjects, mockBlogPosts, mockStats } from '@/lib/mock-data';

// --- Types ---

export interface NavItem {
    name: string;
    href: string;
    icon: string;
}

export interface DashboardSettings {
    glassIntensity: number;
    animationSpeed: number;
    primaryColor: string;
    showRadarCharts: boolean;
    navItems: NavItem[];
}

export interface DashboardContent {
    techStacks: any[];
    projects: any[];
    blogPosts: any[];
    stats: any[];
    profile: {
        name: string;
        username: string;
        role: string;
        bio: string;
        location: string;
        website: string;
        github: string;
        twitter: string;
        avatar: string;
    };
}

interface StoreContextType {
    settings: DashboardSettings;
    updateSettings: (newSettings: Partial<DashboardSettings>) => void;
    settingsLoaded: boolean;

    content: DashboardContent;
    updateContent: (newContent: Partial<DashboardContent>) => void;
    resetContent: () => void;
    contentLoaded: boolean;
}

// --- Defaults ---

const DEFAULT_SETTINGS: DashboardSettings = {
    glassIntensity: 0.5,
    animationSpeed: 1,
    primaryColor: '#fafafa',
    showRadarCharts: true,
    navItems: [
        { name: 'Dashboard', href: '/', icon: 'LayoutDashboard' },
        { name: 'Projects', href: '/projects', icon: 'Layers' },
        { name: 'Monitoring', href: '/monitoring', icon: 'Activity' },
        { name: 'Technical Blog', href: '/blog', icon: 'BookOpen' },
        { name: 'Coding Tests', href: '/tests', icon: 'Code' },
    ]
};

const DEFAULT_CONTENT: DashboardContent = {
    techStacks: mockTechStacks,
    projects: mockProjects,
    blogPosts: mockBlogPosts,
    stats: mockStats,
    profile: {
        name: 'Cheon Hyeonjun',
        username: 'chjnett',
        role: 'Full-stack Engineer',
        bio: 'Full-stack Engineer passionate about AI & RAG Architecture. Building modern developer tools and high-performance dashboards.',
        location: 'Seoul, South Korea',
        website: 'https://chj.dev',
        github: 'https://github.com/chjnett',
        twitter: 'https://twitter.com/chjnett',
        avatar: 'https://avatars.githubusercontent.com/u/480576?v=4'
    }
};

// --- Context ---

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<DashboardSettings>(DEFAULT_SETTINGS);
    const [content, setContent] = useState<DashboardContent>(DEFAULT_CONTENT);
    const [settingsLoaded, setSettingsLoaded] = useState(false);
    const [contentLoaded, setContentLoaded] = useState(false);

    // Initialize Settings
    useEffect(() => {
        const saved = localStorage.getItem('dashboard-settings');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                // Merge navItems to ensure new menu items appear
                const mergedNavItems = [...(parsed.navItems || DEFAULT_SETTINGS.navItems)];
                DEFAULT_SETTINGS.navItems.forEach(defaultItem => {
                    if (!mergedNavItems.find(item => item.href === defaultItem.href)) {
                        mergedNavItems.push(defaultItem);
                    }
                });

                setSettings(prev => ({
                    ...prev,
                    ...parsed,
                    navItems: mergedNavItems
                }));
            } catch (e) {
                console.error('Failed to parse settings', e);
            }
        }
        setSettingsLoaded(true);
    }, []);

    // Initialize Content
    useEffect(() => {
        const saved = localStorage.getItem('dashboard-content');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                // Merge techStacks, projects, blogPosts to ensure new mock items appear
                const mergeById = (existing: any[], defaults: any[]) => {
                    const merged = [...(existing || [])];
                    defaults.forEach(defaultItem => {
                        if (!merged.find(item => item.id === defaultItem.id)) {
                            merged.push(defaultItem);
                        }
                    });
                    return merged;
                };

                const mergedProjects = mergeById(parsed.projects, DEFAULT_CONTENT.projects);
                const mergedBlogPosts = mergeById(parsed.blogPosts, DEFAULT_CONTENT.blogPosts);

                setContent(prev => ({
                    ...prev,
                    ...parsed,
                    techStacks: DEFAULT_CONTENT.techStacks, // Always force the new company tech stacks
                    projects: mergedProjects,
                    blogPosts: mergedBlogPosts
                }));
            } catch (e) {
                console.error('Failed to parse content', e);
            }
        }
        setContentLoaded(true);
    }, []);

    const updateSettings = useCallback((newSettings: Partial<DashboardSettings>) => {
        setSettings(prev => {
            const updated = { ...prev, ...newSettings };
            localStorage.setItem('dashboard-settings', JSON.stringify(updated));
            return updated;
        });
    }, []);

    const updateContent = useCallback((newContent: Partial<DashboardContent>) => {
        setContent(prev => {
            const updated = { ...prev, ...newContent };
            localStorage.setItem('dashboard-content', JSON.stringify(updated));
            return updated;
        });
    }, []);

    const resetContent = useCallback(() => {
        setContent(DEFAULT_CONTENT);
        localStorage.removeItem('dashboard-content');
    }, []);

    return (
        <StoreContext.Provider value={{
            settings,
            updateSettings,
            settingsLoaded,
            content,
            updateContent,
            resetContent,
            contentLoaded
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
}

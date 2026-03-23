"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useContentStore } from '@/store/useContentStore';
import {
    Settings, Layers, Database, Save, RotateCcw,
    Palette, Zap, Plus, Trash2, Code2, FileText, Globe, Edit3, ExternalLink, Users, Github
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicIcon, availableIcons } from '@/components/ui/DynamicIcon';
import { cn } from '@/lib/utils';

type TabType = 'system' | 'navigation' | 'content';

export default function AdminSettingsPage() {
    return (
        <React.Suspense fallback={<div className="flex items-center justify-center min-h-[400px]">Loading Settings...</div>}>
            <AdminSettingsContent />
        </React.Suspense>
    );
}

function AdminSettingsContent() {
    const { settings, updateSettings, isLoaded: settingsLoaded } = useSettingsStore();
    const { content, updateContent, resetToDefaults: resetContent, isLoaded: contentLoaded } = useContentStore();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<TabType>('system');
    const [selectedItem, setSelectedItem] = useState<{ type: 'project' | 'techStack' | 'blog' | 'profile', id: string } | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    // Sync state with query parameters
    useEffect(() => {
        const tab = searchParams.get('tab') as TabType;
        if (tab && ['system', 'navigation', 'content'].includes(tab)) {
            setActiveTab(tab);
        }

        const type = searchParams.get('type') as any;
        const id = searchParams.get('id');
        if (type && id) {
            setSelectedItem({ type, id });
        } else if (type === 'new') {
            // Special case for "Add" buttons
            const section = searchParams.get('section');
            if (section === 'techStack') {
                const newId = Date.now().toString();
                const newStacks = [...content.techStacks, { id: newId, name: '새 기술 스택', subTitle: '', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: [], experience: '', tags: [] }];
                updateContent({ techStacks: newStacks });
                setSelectedItem({ type: 'techStack', id: newId });
            } else if (section === 'project') {
                const newId = Date.now().toString();
                const newProjects = [...content.projects, { id: newId, title: '새 프로젝트', description: '', status: '진행중', progress: 0, tags: [], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' }];
                updateContent({ projects: newProjects });
                setSelectedItem({ type: 'project', id: newId });
            } else if (section === 'blog') {
                const newId = Date.now().toString();
                const newPosts = [...content.blogPosts, {
                    id: newId,
                    title: '새 아티클',
                    slug: `new-article-${newId}`,
                    excerpt: '',
                    date: new Date().toISOString().split('T')[0],
                    category: '',
                    content: ''
                }];
                updateContent({ blogPosts: newPosts });
                setSelectedItem({ type: 'blog', id: newId });
            }
        }
    }, [searchParams, contentLoaded]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'techStack' | 'project', id: string) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            if (type === 'techStack') {
                const n = [...content.techStacks];
                const idx = n.findIndex((s: any) => s.id === id);
                if (idx !== -1) {
                    n[idx] = { ...n[idx], icon: base64 };
                    updateContent({ techStacks: n });
                }
            } else {
                const n = [...content.projects];
                const idx = n.findIndex((p: any) => p.id === id);
                if (idx !== -1) {
                    n[idx] = { ...n[idx], image: base64 };
                    updateContent({ projects: n });
                }
            }
        };
        reader.readAsDataURL(file);
    };

    if (!settingsLoaded || !contentLoaded) return null;

    const tabs = [
        { id: 'system', icon: Settings, label: '시스템 & UI' },
        { id: 'navigation', icon: Layers, label: '네비게이션' },
        { id: 'content', icon: Database, label: '콘텐츠 관리' },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">관리자 대시보드</h1>
                    <p className="text-muted-foreground mt-2 text-lg">포트폴리오의 구조와 콘텐츠를 중앙에서 관리합니다.</p>
                </div>
                <div className="flex gap-3">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            if (confirm('Are you sure you want to reset everything?')) {
                                resetContent();
                                // Note: settings reset could be added here too
                            }
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all font-semibold"
                    >
                        <RotateCcw className="w-4 h-4" />
                        초기화
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all font-semibold shadow-lg shadow-primary/20"
                    >
                        <Save className="w-4 h-4" />
                        변경사항 적용
                    </motion.button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-1.5 bg-secondary/30 rounded-2xl border border-border w-fit">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all font-bold text-sm",
                                isActive
                                    ? "bg-background text-primary shadow-sm border border-border"
                                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                            )}
                        >
                            <tab.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
                {activeTab === 'system' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-left-4 duration-500">
                        {/* Design Section */}
                        <section className="card-minimal p-8 space-y-8 bg-card/50 backdrop-blur-xl border-border/50">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-primary/10">
                                    <Palette className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">디자인 & 미학</h2>
                                    <p className="text-xs text-muted-foreground">그림자, 블러 및 글래스 효과 설정</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold uppercase tracking-wider">글래스 효과 강도</label>
                                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">{Math.round(settings.glassIntensity * 100)}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={settings.glassIntensity}
                                        onChange={(e) => updateSettings({ glassIntensity: parseFloat(e.target.value) })}
                                        className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div
                                        onClick={() => updateSettings({ showRadarCharts: !settings.showRadarCharts })}
                                        className={cn(
                                            "w-12 h-6 rounded-full transition-colors relative cursor-pointer",
                                            settings.showRadarCharts ? "bg-primary" : "bg-muted"
                                        )}
                                    >
                                        <motion.div
                                            className="absolute top-1 left-1 w-4 h-4 bg-background rounded-full"
                                            animate={{ x: settings.showRadarCharts ? 24 : 0 }}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold">Technical Proficiency Charts</label>
                                        <p className="text-xs text-muted-foreground">Toggle radar charts on tech stack cards</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Animation Section */}
                        <section className="card-minimal p-8 space-y-8 bg-card/50 backdrop-blur-xl border-border/50">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-primary/10">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">마이크로 인터랙션</h2>
                                    <p className="text-xs text-muted-foreground">모션 및 피드백 설정</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold uppercase tracking-wider">Animation Speed</label>
                                    <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">{settings.animationSpeed}x</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    value={settings.animationSpeed}
                                    onChange={(e) => updateSettings({ animationSpeed: parseFloat(e.target.value) })}
                                    className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'navigation' && (
                    <section className="card-minimal p-8 space-y-8 animate-in slide-in-from-right-4 duration-500">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-primary/10">
                                    <Layers className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">네비게이션 구조</h2>
                                    <p className="text-xs text-muted-foreground">사이드바 카테고리 및 경로 관리</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    const newItems = [...settings.navItems, { name: 'New Link', href: '#', icon: 'ExternalLink' }];
                                    updateSettings({ navItems: newItems });
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs"
                            >
                                <Plus className="w-4 h-4" />
                                카테고리 추가
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {settings.navItems.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all group">
                                    <div className="p-3 rounded-xl bg-background border border-border group-hover:bg-primary/5 transition-colors">
                                        <DynamicIcon name={item.icon} className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1 space-y-1.5">
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => {
                                                const newItems = [...settings.navItems];
                                                newItems[idx] = { ...item, name: e.target.value };
                                                updateSettings({ navItems: newItems });
                                            }}
                                            className="bg-transparent border-none p-0 text-sm font-extrabold focus:ring-0 w-full"
                                            placeholder="Display Name"
                                        />
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={item.href}
                                                onChange={(e) => {
                                                    const newItems = [...settings.navItems];
                                                    newItems[idx] = { ...item, href: e.target.value };
                                                    updateSettings({ navItems: newItems });
                                                }}
                                                className="bg-transparent border-none p-0 text-xs text-muted-foreground focus:ring-0 w-full"
                                                placeholder="Link"
                                            />
                                            <select
                                                value={item.icon}
                                                onChange={(e) => {
                                                    const newItems = [...settings.navItems];
                                                    newItems[idx] = { ...item, icon: e.target.value };
                                                    updateSettings({ navItems: newItems });
                                                }}
                                                className="bg-background border-none rounded-lg text-[10px] w-24 focus:ring-0 outline-none p-0 h-4"
                                            >
                                                {availableIcons.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const newItems = settings.navItems.filter((_, i) => i !== idx);
                                            updateSettings({ navItems: newItems });
                                        }}
                                        className="p-2 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {activeTab === 'content' && (
                    <div className="flex flex-col md:flex-row gap-8 min-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Notion-style Inner Sidebar */}
                        <aside className="w-full md:w-64 space-y-8 bg-secondary/10 p-4 rounded-3xl border border-border/50 h-fit">
                            <div>
                                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-3 mb-4">프로필</h3>
                                <div className="space-y-1">
                                    <button
                                        onClick={() => setSelectedItem({ type: 'profile' as any, id: 'main' })}
                                        className={cn(
                                            "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all text-left",
                                            selectedItem?.type === 'profile' ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-secondary/50"
                                        )}
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                            <Users className="w-4 h-4 opacity-50" />
                                        </div>
                                        <span className="truncate">내 정보 관리</span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-3 mb-4">기술 스택</h3>
                                <div className="space-y-1">
                                    {content.techStacks.map((stack: any) => (
                                        <button
                                            key={stack.id}
                                            onClick={() => setSelectedItem({ type: 'techStack', id: stack.id })}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all text-left",
                                                selectedItem?.id === stack.id ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-secondary/50"
                                            )}
                                        >
                                            <div className="w-5 h-5 shrink-0">
                                                <img src={stack.icon} className="w-full h-full object-contain" alt="" />
                                            </div>
                                            <span className="truncate">{stack.name}</span>
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => {
                                            const id = Date.now().toString();
                                            const newStacks = [...content.techStacks, { id, name: '새 기술 스택', subTitle: '', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: [], experience: '' }];
                                            updateContent({ techStacks: newStacks });
                                            setSelectedItem({ type: 'techStack', id });
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-primary font-bold hover:bg-primary/5 transition-all"
                                    >
                                        <Plus className="w-4 h-4" />
                                        기술 스택 추가
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-3 mb-4">프로젝트</h3>
                                <div className="space-y-1">
                                    {content.projects.map((project: any) => (
                                        <button
                                            key={project.id}
                                            onClick={() => setSelectedItem({ type: 'project', id: project.id })}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all text-left",
                                                selectedItem?.id === project.id ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-secondary/50"
                                            )}
                                        >
                                            <div className="w-5 h-5 rounded overflow-hidden bg-secondary shrink-0">
                                                <img src={project.image} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <span className="truncate">{project.title}</span>
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => {
                                            const id = Date.now().toString();
                                            const newProjects = [...content.projects, { id, title: '새 프로젝트', description: '', status: '진행중', progress: 0, tags: [], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' }];
                                            updateContent({ projects: newProjects });
                                            setSelectedItem({ type: 'project', id });
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-primary font-bold hover:bg-primary/5 transition-all"
                                    >
                                        <Plus className="w-4 h-4" />
                                        프로젝트 추가
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-3 mb-4">블로그 포스트</h3>
                                <div className="space-y-1">
                                    {content.blogPosts.map((post: any) => (
                                        <button
                                            key={post.id}
                                            onClick={() => setSelectedItem({ type: 'blog', id: post.id })}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all text-left",
                                                selectedItem?.id === post.id ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-secondary/50"
                                            )}
                                        >
                                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                <Globe className="w-4 h-4 opacity-50" />
                                            </div>
                                            <span className="truncate">{post.title}</span>
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => {
                                            const id = Date.now().toString();
                                            const newPosts = [...content.blogPosts, { id, title: '새 아티클', excerpt: '', date: new Date().toISOString().split('T')[0] }];
                                            updateContent({ blogPosts: newPosts });
                                            setSelectedItem({ type: 'blog', id });
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-primary font-bold hover:bg-primary/5 transition-all"
                                    >
                                        <Plus className="w-4 h-4" />
                                        아티클 추가
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Notion-style Editor Area */}
                        <main className="flex-1 bg-card/30 backdrop-blur-xl rounded-[32px] border border-border/50 p-8 md:p-12 min-h-[600px] shadow-2xl relative">
                            <AnimatePresence mode="wait">
                                {selectedItem ? (
                                    <motion.div
                                        key={selectedItem.type + selectedItem.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-12"
                                    >
                                        {/* Profile Editor */}
                                        {selectedItem.type === 'profile' && (
                                            <div className="space-y-10">
                                                <div className="flex items-center gap-6">
                                                    <div className="relative group/avatar">
                                                        <div className="w-24 h-24 rounded-3xl bg-secondary overflow-hidden shadow-inner">
                                                            <img src={content.profile?.avatar} className="w-full h-full object-cover" alt="" />
                                                        </div>
                                                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-all flex items-center justify-center cursor-pointer rounded-3xl backdrop-blur-sm">
                                                            <Plus className="w-6 h-6 text-white" />
                                                            <input
                                                                type="file"
                                                                className="hidden"
                                                                accept="image/*"
                                                                onChange={(e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (!file) return;
                                                                    const reader = new FileReader();
                                                                    reader.onloadend = () => {
                                                                        updateContent({ profile: { ...content.profile, avatar: reader.result as string } });
                                                                    };
                                                                    reader.readAsDataURL(file);
                                                                }}
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <input
                                                            value={content.profile?.name || ''}
                                                            onChange={(e) => updateContent({ profile: { ...content.profile, name: e.target.value } })}
                                                            className="text-4xl font-black bg-transparent border-none p-0 focus:ring-0 w-full"
                                                            placeholder="이름 입력..."
                                                        />
                                                        <input
                                                            value={content.profile?.username || ''}
                                                            onChange={(e) => updateContent({ profile: { ...content.profile, username: e.target.value } })}
                                                            className="text-lg text-muted-foreground bg-transparent border-none p-0 focus:ring-0 w-full"
                                                            placeholder="사용자 아이디..."
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-4">
                                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">전문 역할 (Role)</label>
                                                        <input
                                                            value={content.profile?.role || ''}
                                                            onChange={(e) => updateContent({ profile: { ...content.profile, role: e.target.value } })}
                                                            className="w-full bg-secondary/20 rounded-xl px-4 py-2 border border-border/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm h-10"
                                                            placeholder="예: Full-stack Engineer"
                                                        />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">위치 (Location)</label>
                                                        <input
                                                            value={content.profile?.location || ''}
                                                            onChange={(e) => updateContent({ profile: { ...content.profile, location: e.target.value } })}
                                                            className="w-full bg-secondary/20 rounded-xl px-4 py-2 border border-border/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm h-10"
                                                            placeholder="예: Seoul, South Korea"
                                                        />
                                                    </div>
                                                    <div className="space-y-4 md:col-span-2">
                                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">자기소개 (Bio)</label>
                                                        <textarea
                                                            value={content.profile?.bio || ''}
                                                            onChange={(e) => updateContent({ profile: { ...content.profile, bio: e.target.value } })}
                                                            className="w-full bg-secondary/20 rounded-2xl p-4 border border-border/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm h-24 resize-none"
                                                            placeholder="간단한 자기소개를 입력하세요..."
                                                        />
                                                    </div>

                                                    <div className="space-y-4">
                                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">GitHub URL</label>
                                                        <div className="relative">
                                                            <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                                                            <input
                                                                value={content.profile?.github || ''}
                                                                onChange={(e) => updateContent({ profile: { ...content.profile, github: e.target.value } })}
                                                                className="w-full bg-secondary/20 rounded-xl pl-10 pr-4 py-2 border border-border/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm h-10"
                                                                placeholder="https://github.com/..."
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Website URL</label>
                                                        <div className="relative">
                                                            <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                                                            <input
                                                                value={content.profile?.website || ''}
                                                                onChange={(e) => updateContent({ profile: { ...content.profile, website: e.target.value } })}
                                                                className="w-full bg-secondary/20 rounded-xl pl-10 pr-4 py-2 border border-border/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm h-10"
                                                                placeholder="https://..."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Tech Stack Editor */}
                                        {selectedItem.type === 'techStack' && (
                                            <div className="space-y-10">
                                                <div className="flex items-center gap-6">
                                                    <div className="relative group/icon">
                                                        <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center p-5 shadow-inner overflow-hidden">
                                                            <img src={content.techStacks.find((s: any) => s.id === selectedItem.id)?.icon} className="w-full h-full object-contain" alt="" />
                                                        </div>
                                                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover/icon:opacity-100 transition-all flex items-center justify-center cursor-pointer rounded-3xl backdrop-blur-sm">
                                                            <Plus className="w-6 h-6 text-white" />
                                                            <input
                                                                type="file"
                                                                className="hidden"
                                                                accept="image/*"
                                                                onChange={(e) => handleImageUpload(e, 'techStack', selectedItem.id)}
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <input
                                                            value={content.techStacks.find((s: any) => s.id === selectedItem.id)?.name || ''}
                                                            onChange={(e) => {
                                                                const n = [...content.techStacks];
                                                                const idx = n.findIndex((s: any) => s.id === selectedItem.id);
                                                                if (idx !== -1) {
                                                                    n[idx] = { ...n[idx], name: e.target.value };
                                                                    updateContent({ techStacks: n });
                                                                }
                                                            }}
                                                            className="text-4xl font-black bg-transparent border-none p-0 focus:ring-0 w-full placeholder:opacity-20"
                                                            placeholder="기술명 입력..."
                                                        />
                                                        <div className="flex items-center justify-between">
                                                            <input
                                                                value={content.techStacks.find((s: any) => s.id === selectedItem.id)?.subTitle || ''}
                                                                onChange={(e) => {
                                                                    const n = [...content.techStacks];
                                                                    const idx = n.findIndex((s: any) => s.id === selectedItem.id);
                                                                    if (idx !== -1) {
                                                                        n[idx] = { ...n[idx], subTitle: e.target.value };
                                                                        updateContent({ techStacks: n });
                                                                    }
                                                                }}
                                                                className="text-lg text-muted-foreground bg-transparent border-none p-0 focus:ring-0 w-full"
                                                                placeholder="부제목 입력..."
                                                            />
                                                            <Link href="/#tech-stack" target="_blank" className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:underline shrink-0">
                                                                <ExternalLink className="w-3 h-3" />
                                                                대시보드에서 보기
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2">상세 숙련도</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        {(content.techStacks.find((s: any) => s.id === selectedItem.id)?.proficiency || []).map((p: any, pIdx: number) => (
                                                            <div key={pIdx} className="space-y-3">
                                                                <div className="flex justify-between items-center">
                                                                    <input
                                                                        value={p.subject}
                                                                        onChange={(e) => {
                                                                            const n = [...content.techStacks];
                                                                            const idx = n.findIndex((s: any) => s.id === selectedItem.id);
                                                                            const prof = [...n[idx].proficiency];
                                                                            prof[pIdx] = { ...p, subject: e.target.value };
                                                                            n[idx] = { ...n[idx], proficiency: prof };
                                                                            updateContent({ techStacks: n });
                                                                        }}
                                                                        className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0"
                                                                    />
                                                                    <span className="text-sm font-mono text-primary">{p.A}%</span>
                                                                </div>
                                                                <input
                                                                    type="range" value={p.A} min="0" max="100"
                                                                    onChange={(e) => {
                                                                        const n = [...content.techStacks];
                                                                        const idx = n.findIndex((s: any) => s.id === selectedItem.id);
                                                                        const prof = [...n[idx].proficiency];
                                                                        prof[pIdx] = { ...p, A: parseInt(e.target.value) };
                                                                        n[idx] = { ...n[idx], proficiency: prof };
                                                                        updateContent({ techStacks: n });
                                                                    }}
                                                                    className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                                                                />
                                                            </div>
                                                        ))}
                                                        <button
                                                            onClick={() => {
                                                                const n = [...content.techStacks];
                                                                const idx = n.findIndex((s: any) => s.id === selectedItem.id);
                                                                const prof = [...(n[idx].proficiency || []), { subject: '새 항목', A: 50, fullMark: 100 }];
                                                                n[idx] = { ...n[idx], proficiency: prof };
                                                                updateContent({ techStacks: n });
                                                            }}
                                                            className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-xs text-muted-foreground"
                                                        >
                                                            <Plus className="w-4 h-4" /> 항목 추가
                                                        </button>
                                                    </div>
                                                    <div className="space-y-6">
                                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2">경험 및 성과 (Experience Notes)</h4>
                                                        <textarea
                                                            value={content.techStacks.find((s: any) => s.id === selectedItem.id)?.experience || ''}
                                                            onChange={(e) => {
                                                                const n = [...content.techStacks];
                                                                const idx = n.findIndex((s: any) => s.id === selectedItem.id);
                                                                if (idx !== -1) {
                                                                    n[idx] = { ...n[idx], experience: e.target.value };
                                                                    updateContent({ techStacks: n });
                                                                }
                                                            }}
                                                            className="w-full bg-secondary/20 rounded-2xl p-6 border border-border/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm h-64 resize-none leading-relaxed"
                                                            placeholder="이 기술을 사용하여 어떤 프로젝트를 진행했는지, 어떤 문제를 해결했는지 기록하세요..."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Project Editor */}
                                        {selectedItem.type === 'project' && (
                                            <div className="space-y-10">
                                                <div className="relative group/cover">
                                                    <div className="w-full h-48 rounded-3xl overflow-hidden bg-secondary relative">
                                                        <img src={content.projects.find((p: any) => p.id === selectedItem.id)?.image} className="w-full h-full object-cover" alt="" />
                                                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm">
                                                            <div className="px-4 py-2 bg-background/80 rounded-xl text-xs font-bold backdrop-blur-md">커버 변경</div>
                                                            <input
                                                                type="file"
                                                                className="hidden"
                                                                accept="image/*"
                                                                onChange={(e) => handleImageUpload(e, 'project', selectedItem.id)}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <input
                                                        value={content.projects.find((p: any) => p.id === selectedItem.id)?.title || ''}
                                                        onChange={(e) => {
                                                            const n = [...content.projects];
                                                            const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                            if (idx !== -1) {
                                                                n[idx] = { ...n[idx], title: e.target.value };
                                                                updateContent({ projects: n });
                                                            }
                                                        }}
                                                        className="text-5xl font-black bg-transparent border-none p-0 focus:ring-0 w-full tracking-tighter"
                                                        placeholder="프로젝트 제목 입력..."
                                                    />

                                                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border/50 text-sm">
                                                        <div className="flex flex-wrap gap-4 items-center">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-muted-foreground w-20">상태:</span>
                                                                <input
                                                                    value={content.projects.find((p: any) => p.id === selectedItem.id)?.status || ''}
                                                                    onChange={(e) => {
                                                                        const n = [...content.projects];
                                                                        const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                                        n[idx].status = e.target.value;
                                                                        updateContent({ projects: n });
                                                                    }}
                                                                    className="bg-primary/10 text-primary px-3 py-1 rounded-lg border-none focus:ring-0 font-bold"
                                                                />
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-muted-foreground w-20">진행률:</span>
                                                                <div className="flex items-center gap-4">
                                                                    <input
                                                                        type="range" value={content.projects.find((p: any) => p.id === selectedItem.id)?.progress || 0} min="0" max="100"
                                                                        onChange={(e) => {
                                                                            const n = [...content.projects];
                                                                            const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                                            n[idx].progress = parseInt(e.target.value);
                                                                            updateContent({ projects: n });
                                                                        }}
                                                                        className="w-48 h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                                                                    />
                                                                    <span className="font-mono text-xs w-8">{content.projects.find((p: any) => p.id === selectedItem.id)?.progress || 0}%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link href="/projects" target="_blank" className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:underline shrink-0">
                                                            <ExternalLink className="w-3 h-3" />
                                                            대시보드에서 보기
                                                        </Link>
                                                    </div>

                                                    <textarea
                                                        value={content.projects.find((p: any) => p.id === selectedItem.id)?.description || ''}
                                                        onChange={(e) => {
                                                            const n = [...content.projects];
                                                            const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                            n[idx].description = e.target.value;
                                                            updateContent({ projects: n });
                                                        }}
                                                        className="w-full bg-transparent border-none p-0 focus:ring-0 text-lg leading-relaxed min-h-[200px] no-scrollbar resize-none"
                                                        placeholder="프로젝트에 대한 상세 설명을 입력하세요..."
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Blog Editor */}
                                        {selectedItem.type === 'blog' && (
                                            <div className="space-y-10">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-2 text-primary/50 font-bold text-xs uppercase tracking-widest">
                                                        <Globe className="w-4 h-4" /> 기술 블로그
                                                    </div>
                                                    <input
                                                        value={content.blogPosts.find((p: any) => p.id === selectedItem.id)?.title || ''}
                                                        onChange={(e) => {
                                                            const n = [...content.blogPosts];
                                                            const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                            n[idx].title = e.target.value;

                                                            // Auto-generate slug if it's currently empty or just placeholder
                                                            if (!n[idx].slug || n[idx].slug.startsWith('new-article-')) {
                                                                n[idx].slug = e.target.value
                                                                    .toLowerCase()
                                                                    .replace(/[^a-z0-9\s-]/g, '')
                                                                    .replace(/\s+/g, '-');
                                                            }

                                                            updateContent({ blogPosts: n });
                                                        }}
                                                        className="text-5xl font-black bg-transparent border-none p-0 focus:ring-0 w-full tracking-tighter"
                                                        placeholder="아티클 제목 입력..."
                                                    />
                                                    <div className="flex items-center gap-2 group">
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">URL Slug:</span>
                                                        <input
                                                            value={content.blogPosts.find((p: any) => p.id === selectedItem.id)?.slug || ''}
                                                            onChange={(e) => {
                                                                const n = [...content.blogPosts];
                                                                const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                                n[idx].slug = e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                                                                updateContent({ blogPosts: n });
                                                            }}
                                                            className="bg-transparent border-none p-0 focus:ring-0 text-xs text-primary font-mono hover:bg-primary/5 rounded px-1 transition-colors"
                                                            placeholder="article-slug-here"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-between py-4 border-y border-border/50 text-xs text-muted-foreground">
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-20">작성일:</span>
                                                            <input
                                                                type="date"
                                                                value={content.blogPosts.find((p: any) => p.id === selectedItem.id)?.date || ''}
                                                                onChange={(e) => {
                                                                    const n = [...content.blogPosts];
                                                                    const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                                    n[idx].date = e.target.value;
                                                                    updateContent({ blogPosts: n });
                                                                }}
                                                                className="bg-secondary/50 px-3 py-1 rounded-lg border-none focus:ring-0"
                                                            />
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-muted-foreground">카테고리:</span>
                                                            <input
                                                                value={content.blogPosts.find((p: any) => p.id === selectedItem.id)?.category || ''}
                                                                onChange={(e) => {
                                                                    const n = [...content.blogPosts];
                                                                    const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                                    n[idx].category = e.target.value;
                                                                    updateContent({ blogPosts: n });
                                                                }}
                                                                className="bg-primary/10 text-primary px-3 py-1 rounded-lg border-none focus:ring-0 font-bold w-32"
                                                                placeholder="카테고리..."
                                                            />
                                                        </div>
                                                        <Link href="/blog" target="_blank" className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:underline shrink-0">
                                                            <ExternalLink className="w-3 h-3" />
                                                            대시보드에서 보기
                                                        </Link>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">요약 (Excerpt)</label>
                                                        <textarea
                                                            value={content.blogPosts.find((p: any) => p.id === selectedItem.id)?.excerpt || ''}
                                                            onChange={(e) => {
                                                                const n = [...content.blogPosts];
                                                                const idx = n.findIndex((p: any) => p.id === selectedItem.id);
                                                                n[idx].excerpt = e.target.value;
                                                                updateContent({ blogPosts: n });
                                                            }}
                                                            className="w-full bg-secondary/20 rounded-2xl p-4 border border-border/50 focus:ring-0 text-sm leading-relaxed min-h-[100px] resize-none"
                                                            placeholder="간단한 요약을 입력하세요..."
                                                        />
                                                    </div>

                                                    <div className="pt-8">
                                                        <motion.button
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => setIsEditorOpen(true)}
                                                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                                                        >
                                                            <Edit3 className="w-4 h-4" /> 마크다운 에디터 열기
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedItem.type !== 'profile' && (
                                            <div className="pt-20 border-t border-border/50 opacity-20 hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => {
                                                        if (confirm('삭제하시겠습니까?')) {
                                                            const typeMap: Record<string, string> = { 'project': 'projects', 'techStack': 'techStacks', 'blog': 'blogPosts' };
                                                            const contentKey = typeMap[selectedItem.type];
                                                            const n = (content as any)[contentKey].filter((item: any) => item.id !== selectedItem.id);
                                                            updateContent({ [contentKey]: n });
                                                            setSelectedItem(null);
                                                        }
                                                    }}
                                                    className="flex items-center gap-2 text-destructive font-bold text-xs"
                                                >
                                                    <Trash2 className="w-4 h-4" /> 항목 삭제하기
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                                        <div className="w-20 h-20 rounded-[32px] bg-secondary/50 flex items-center justify-center text-3xl opacity-50">
                                            📄
                                        </div>
                                        <div className="text-center">
                                            <p className="font-bold text-lg">워크스페이스를 선택하세요</p>
                                            <p className="text-sm opacity-60">왼쪽 사이드바에서 수정할 항목을 디자인하세요.</p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </main>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/10 text-center backdrop-blur-sm">
                <p className="text-sm text-primary/80 font-medium">
                    내용 변경사항은 브라우저 로컬 캐시에 자동으로 동기화됩니다.
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">상태: 활성</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">동기화: 완료</span>
                </div>
            </div>

            {/* Markdown Editor Modal */}
            <AnimatePresence>
                {isEditorOpen && selectedItem?.type === 'blog' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-background flex flex-col pt-[max(env(safe-area-inset-top),1rem)]"
                    >
                        {/* Editor Header */}
                        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-xl bg-primary/10">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">마크다운 에디터</h3>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                        {content.blogPosts.find(p => p.id === selectedItem.id)?.title}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsEditorOpen(false)}
                                    className="px-4 py-2 rounded-xl text-sm font-bold text-muted-foreground hover:bg-secondary transition-all"
                                >
                                    취소
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        // Save is automatic through the store, but we can add a visual confirmation or explicit save if needed
                                        setIsEditorOpen(false);
                                    }}
                                    className="px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                                >
                                    저장 및 종료
                                </motion.button>
                            </div>
                        </div>

                        {/* Editor Body */}
                        <div className="flex-1 flex overflow-hidden">
                            {/* TextArea Editor */}
                            <div className="flex-1 border-r border-border p-6 overflow-hidden flex flex-col">
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Edit3 className="w-3 h-3" /> EDITOR
                                </div>
                                <textarea
                                    autoFocus
                                    value={content.blogPosts.find(p => p.id === selectedItem.id)?.content || ''}
                                    onChange={(e) => {
                                        const n = [...content.blogPosts];
                                        const idx = n.findIndex(p => p.id === selectedItem.id);
                                        if (idx !== -1) {
                                            n[idx] = { ...n[idx], content: e.target.value };
                                            updateContent({ blogPosts: n });
                                        }
                                    }}
                                    placeholder="여기에 마크다운 내용을 입력하세요..."
                                    className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-sm font-mono leading-relaxed resize-none no-scrollbar"
                                />
                            </div>

                            {/* Preview Area */}
                            <div className="flex-1 bg-secondary/5 p-8 overflow-y-auto custom-scrollbar">
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Globe className="w-3 h-3" /> PREVIEW
                                </div>
                                <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-black prose-a:text-primary">
                                    <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                                        {content.blogPosts.find(p => p.id === selectedItem.id)?.content || '내용이 없습니다.'}
                                    </div>
                                    <p className="mt-8 text-[10px] text-muted-foreground italic border-t border-border pt-4">
                                        Note: 실제 렌더링은 대시보드에서 확인해 주세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useContentStore } from '@/store/useContentStore';

export function ProjectList() {
    const { content, isLoaded } = useContentStore();

    if (!isLoaded) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.projects.map((project: any, index: number) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-minimal flex flex-col p-0 overflow-hidden"
                >
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                            <span className="text-[10px] font-mono text-muted-foreground uppercase">{project.status}</span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {(project.tags || []).map((tag: string) => (
                                <span key={tag} className="text-[9px] font-bold px-2 py-0.5 bg-secondary text-secondary-foreground rounded border border-border">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border">
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    <span>Development</span>
                                    <span>{project.progress}%</span>
                                </div>
                                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${project.progress}%` }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-3">
                                    <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                                </div>
                                <button className="text-xs font-bold flex items-center gap-1 hover:underline underline-offset-4">
                                    Details <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

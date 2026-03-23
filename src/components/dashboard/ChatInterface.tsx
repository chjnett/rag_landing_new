"use client";

import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface ChatInterfaceProps {
    onSendMessage: (message: string) => void;
}

export function ChatInterface({ onSendMessage }: ChatInterfaceProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSendMessage(input);
        setInput('');
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-40">
            <form
                onSubmit={handleSubmit}
                className="relative flex items-center bg-background/60 backdrop-blur-xl border border-border rounded-2xl p-1.5 shadow-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all"
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 ml-1">
                    <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about your project... (e.g. 'How does RAG work?')"
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 placeholder:text-muted-foreground h-12"
                />
                <button
                    type="submit"
                    disabled={!input.trim()}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <Send className="w-4 h-4" />
                </button>
            </form>
        </div>
    );
}

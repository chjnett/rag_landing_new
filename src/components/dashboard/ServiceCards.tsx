"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// /Users/cheonhyeonjun/workspace/07new_rag_landing/dashboard_rag/public/service_1.png

const SERVICES = [
    {
        title: "AI Solution",
        category: "AI & ML",
        description: "프롬프트 엔지니어링 및 통합 매니지먼트, LLM 에이전트 구축 등 전사적 AI 애플리케이션 플랫폼 도입.",
        img: "/service_1.png"
    },
    {
        title: "RAG Optimization",
        category: "Data",
        description: "복잡한 정형/비정형 데이터의 구조화, 고성능 파이프라인과 벡터 임베딩 최적화를 통한 할루시네이션 방지 검색 증강 생성.",
        img: "/service_2.png"
    },
    {
        title: "MLOps",
        category: "Infrastructure",
        description: "모델 학습, 테스트, 배포, 지속적인 모니터링을 관장하는 머신러닝 파이프라인의 완전 자동화 체계.",
        img: "/service_3.png"
    },
    {
        title: "AIOps",
        category: "Operations",
        description: "AI 기술을 활용한 지능형 IT 운영. 모니터링, 이상 징후 선제적 자동 탐지 및 핵심 자원 최적화 할당.",
        img: "/service_4.png"
    },
    {
        title: "DevOps",
        category: "Engineering",
        description: "애자일 기반의 지속적 통합(CI) 및 지속적 배포(CD) 파이프라인 구축. 신속하고 안전한 배포 방식 지원.",
        img: "/service_5.png"
    },
    {
        title: "Cloud Architecture",
        category: "Cloud System",
        description: "AWS, GCP, Azure 등 하이브리드 멀티 클라우드 환경 설계와 고가용성 네트워크 구축 및 최적화.",
        img: "/service_6.png"
    }
];

export function ServiceCards({ onSelectService }: { onSelectService?: (name: string) => void }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    useEffect(() => {
        const updateRange = () => {
            if (trackRef.current) {
                // Total scrollable distance = (Width of all cards container) - (Viewport width) + padding safety
                const range = trackRef.current.scrollWidth - window.innerWidth + 48;
                setScrollRange(range > 0 ? range : 0);
            }
        };
        updateRange();

        // Add small delay on mount to ensure images/layout are ready
        const timeout = setTimeout(updateRange, 100);
        window.addEventListener("resize", updateRange);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("resize", updateRange);
        };
    }, []);

    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background" id="services">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="container mx-auto px-6 mb-8 lg:mb-12 shrink-0">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">Our Core Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        비즈니스의 혁신을 이끄는 맞춤형 AI 및 인프라 솔루션을 제공합니다.
                    </p>
                </div>

                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="flex gap-6 md:gap-8 px-6 pb-12 w-max"
                >
                    {SERVICES.map((s, idx) => (
                        <Card key={idx} className="group relative w-[300px] sm:w-[350px] shrink-0 pt-0 flex flex-col h-full border-border/50 bg-card hover:border-primary/50 transition-all duration-300 shadow-none overflow-hidden">
                            <div className="absolute inset-x-0 top-0 z-30 aspect-video bg-black/10 rounded-t-xl pointer-events-none transition-colors group-hover:bg-transparent" />
                            <motion.img
                                src={s.img}
                                alt={s.title}
                                initial={{ scale: 1.3, filter: "brightness(0.7)" }}
                                whileInView={{ scale: 1.2, filter: "brightness(1)" }}
                                viewport={{ margin: "0px -10% 0px -10%", once: false }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-20 aspect-video w-full object-cover object-left rounded-t-xl transition-transform duration-500 group-hover:scale-[1.25]"
                            />
                            <CardHeader className="flex-1">
                                <CardAction>
                                    <Badge variant="secondary">{s.category}</Badge>
                                </CardAction>
                                <CardTitle>{s.title}</CardTitle>
                                <CardDescription className="text-sm mt-3">
                                    {s.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button className="w-full" onClick={() => onSelectService?.(s.title)}>View Service</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

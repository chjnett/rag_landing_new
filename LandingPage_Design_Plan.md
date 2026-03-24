# AI Solution Company Landing Page Plan & Specification

현대적인 대시보드 디자인을 계승한 **AI Solution Company (RAG, AIOps, Cloud, MLOps, DevOps 전문)** 랜딩 페이지 구축 계획입니다.

## 1. 디자인 컨셉
전문적이고 신뢰감 있는 **AI Enterprise** 느낌의 디자인을 지향하며, 기존 대시보드의 **Glassmorphism** 효과를 전문적인 비즈니스 톤으로 확장합니다.
- **색상 팔레트**: 딥 다크 모드 (`#020202` 배경, `rgba(255,255,255,0.08)` 테두리), 포인트 컬러로 `Primary AI Blue` 또는 `Neon Violet` 활용.
- **효과**: 프리미엄 메탈릭 질감, 데이터 스트림 배경 효과, 카드 기반의 정돈된 레이아웃.
- **아이덴티티**: 기술적 깊이(Infrastructure)와 미래지향성(AI)이 공존하는 분위기.

## 2. 주요 섹션 및 서비스 구성

### 1) Hero Section: "The Future of AI Infrastructure"
- **메시지**: RAG부터 MLOps까지, 비즈니스 가치를 창출하는 AI 인프라 솔루션.
- **디자인**: 추상적인 AI 프로세스 시각화(Framer Motion)와 함께 핵심 기술 역량(AIOps, Cloud) 강조.

### 2) Core Solutions (RAG & AI Solutions)
- **RAG (Retrieval-Augmented Generation)**: 기업 맞춤형 지식 베이스 기반 LLM 구축 솔루션 설명.
- **AIOps**: AI 기술을 활용한 자율 운영 및 장애 예측 시스템 강점 부각.
- **MLOps & DevOps**: 지속적인 개선과 자동화가 가능한 안정적인 배포 파이프라인.

### 3) Tech Stack (Proven Expertise - 핵심 유지 및 확장)
- **구성**: 현재 `TechStackCard` 컴포넌트를 사용하여 회사가 보유한 핵심 기술 스택(AWS, Terraform, Kubernetes, PyTorch, LangChain 등) 노출.
- **디자인**: 
    - `recharts` Radar Chart를 통해 각 도메인별(AI, Infra, Cloud) 전문성 시각화.
    - **Cloud & DevOps Card**: 인프라 자동화 도구 강조.
    - **AI & RAG Card**: LLM Framework 및 Vector DB 전문성 강조.
- **인터랙션**: 클릭 시 해당 기술을 활용한 구체적인 성공 사례(Case Studies) 팝업 제공.

### 4) Infrastructure Pillar (Cloud & MLOps)
- **구성**: 하이브리드 클라우드 구축 역량과 대규모 모델 서빙을 위한 MLOps 파이프라인 도식화.
- **디자인**: 사이드바의 워크플로우 엔진 느낌을 랜딩 페이지 중앙으로 가져와 자동화 프로세스 시각화.

### 5) Trusted By / Contact (CTA)
- **구성**: "Consult with AI Experts" 버튼과 함께 전문 상담 유도.
- **디자인**: `ChatInterface` 스타일의 플로팅 상담 봇 배치 (AI 상담 컨셉).

## 3. 기술 스택 (기존 유지)
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Animation**: Framer Motion (데이터 흐름 및 파티클 시스템)
- **Charts**: Recharts (전문성 지표 시각화)

## 4. 구현 로직 매핑
- **Tech Stack Data**: `src/store/useContentStore`에 RAG, AIOps 등 회사 기술 정보 추가하여 연동.
- **Component**: `TechStackCard`의 `proficiency` 데이터를 회사 역량 지표로 활용.
- **Workflow**: `WorkflowOverlay`를 비즈니스 컨설팅 또는 솔루션 로드맵 보여주기용으로 재사용.

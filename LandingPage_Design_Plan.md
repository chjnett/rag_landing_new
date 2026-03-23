# Landing Page Design Plan & Specification

현대적인 대시보드 디자인을 계승한 shadcn/ui 기반 랜딩 페이지 구축 계획입니다.

## 1. 디자인 컨셉
현재 대시보드의 **GitHub 스타일 미니멀리즘**과 **Glassmorphism** 효과를 전면적으로 적용합니다.
- **색상 팔레트**: 다크 모드 중심 (`#09090b` 배경, `rgba(255,255,255,0.05)` 테두리).
- **효과**: `backdrop-blur`, `radial-gradient` 배경, `card-minimal` 스타일 계승.
- **컴포넌트**: shadcn/ui(Radix UI)를 활용한 정교한 인터랙션.

## 2. 주요 섹션 구성

### 1) Hero Section
- **구성**: 서비스의 핵심 가치를 담은 헤드라인과 서브타이틀.
- **디자인**: 현재 대시보드 사이드바의 프로필 스타일과 유사한 유리 질감의 버튼과 아바타 활용.
- **애니메이션**: Framer Motion을 이용한 부드러운 입학 효과.

### 2) Feature Section (Dashboard Preview)
- **구성**: 현재 대시보드의 주요 기능(Contribution Graph, Workflow 등)을 미리보기 형태로 노출.
- **디자인**: 실제 대시보드 컴포넌트를 카드 형태로 배치하여 일관성 유지.

### 3) Tech Stack Section (핵심 유지 사항)
- **구성**: 현재 `TechStackCard` 컴포넌트를 100% 동일하게 유지.
- **디자인**: 
    - `recharts` 기반의 Radar Chart 포함.
    - 테두리 그라데이션 및 유리 질감 카드.
    - 태그 스타일 및 아이콘 배치 유지.
- **인터랙션**: 클릭 시 상세 경험(Experience)을 보여주는 Framer Motion 기반 모달 유지.

### 4) Stats / Activity Section
- **구성**: `ContributionGraph` 및 `Contribution Activity` 타임라인 노출.
- **의미**: 실시간 데이터 시각화 역량을 강조하는 랜딩 포인트.

### 5) Call to Action (CTA)
- **구성**: "시작하기" 또는 "대시보드 보기" 버튼.
- **디자인**: `ChatInterface`와 유사한 떠 있는 하단 버튼이나 메인 액션 버튼 사용.

## 3. 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Animation**: Framer Motion
- **Charts**: Recharts

## 4. 구현 로직 매핑
- **Tech Stack Data**: `useContentStore`의 데이터를 그대로 가져와서 렌더링.
- **Layout**: 기존 `LayoutWrapper`를 확장하거나 랜딩용 전용 레이아웃 구성.

---
이 계획을 바탕으로 파일을 생성하거나 수정을 진행하겠습니다. 추가로 수정하고 싶은 부분이 있으신가요?

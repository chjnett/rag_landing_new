# Unified Design Master Plan: Cinematic Noir × Enterprise AI
**Project Identity: "The Invisible Power of AI Infrastructure"**

이 문서는 `.gemini/skills`의 디자인 원칙을 바탕으로, Apple식 미니멀리즘과 다크 시네마틱 느와르를 결합한 프로젝트의 종합 설계도입니다. 모든 개발 및 디자인 작업의 최종 기준점으로 사용됩니다.

---

## Part 1. 디자인 운영 체제 (The Design OS: Skills)

개발 과정에서 다음의 `.gemini/skills`를 호출하여 일관된 품질을 유지합니다.

1.  **`teach-impeccable`**: 프로젝트 초기 컨텍스트(사용자, 브랜드 성격)를 설정하고 `.impeccable.md`에 기록합니다.
2.  **`frontend-design`**: "AI Slop"을 배제하고, 독창적인 UI/UX를 구축하는 핵심 가이드로 사용합니다.
3.  **`polish`**: 배포 전 픽셀 정렬, 일관된 간격, 모든 인터랙션 상태(Hover, Active, Loading)를 최종 검증합니다.
4.  **`animate` & `typeset`**: 시네마틱한 모션과 정교한 타이포그래피 스케일을 적용합니다.

---

## Part 2. 시각적 아이덴티티 (Visual Identity Guide)

### 🎨 핵심 철학 및 가이드라인
- **Pure Black (#000000)**: 무한한 깊이감을 상징하는 배경.
- **Ultra-thin Glass**: `rgba(255, 255, 255, 0.05)`의 극도로 투명한 레이어링.
- **Asymmetric Bento Grid**: 질서 속의 역동성을 위한 비대칭 그리드.
- **Cinematic Slit Motion**: `main.png`가 안개 속에서 드러나는 듯한 시각 효과.

### 📐 디자인 토큰 (Design Tokens)
- **Background**: `oklch(0% 0 0)`
- **Accent**: `oklch(90% 0.05 200)` (Muted Cyan)
- **Typography**: Display (Geist Sans Bold/Black, -0.04em tracking), Body (Medium/Light, fluid size with `clamp()`)
- **Corner Radius**: `rounded-[32px]` (Squircle shape)

---

## Part 3. 정보 구조 및 흐름 (IA & Flow)

### 🗺️ 정보 구조도 (IA)
```mermaid
graph TD
    Root[Home] --> Nav[GNB: Logo | Solutions | Infra | Tech | Contact]
    Root --> Sec1[Hero: Cinematic Intro]
    Root --> Sec2[Solutions: AI & RAG (Asymmetric)]
    Root --> Sec3[Infra: Ops & Cloud (Bento Grid)]
    Root --> Sec4[Tech: Matrix & Radar Chart]
    Root --> Sec5[CTA: terminal-style Contact]
```

### 🌊 사용자 흐름 (User Flow)
1. **Entrance**: `Hero` 섹션에서 압도적인 시각적 임팩트 (Visual Impact).
2. **Value Prop**: `Core Solutions`를 통해 기술적 실익 확인.
3. **Technical Proof**: `Ops & Infra` 벤토 그리드에서 전문성 확인.
4. **Verification**: `Tech Stack` 레이더 차트로 데이터 기반 신뢰 구축.
5. **Conversion**: `CTA` 섹션에서 전문 상담으로 연결.

---

## Part 4. 영역별 와이어프레임 설계 (Wireframe Spec)

- **Hero 섹션**: 비대칭 텍스트 배치(좌) + `main.png` 마우스 패럴랙스(우).
- **Service 카드**: 2열 비대칭 그리드. 호버 시 '빛의 경로'가 흐르는 리플렉션 효과.
- **인프라 벤토 그리드**: 중요도에 따라 크기가 다른 4~6개의 타일.
- **기술 스택 메트릭스**: `recharts` Radar Chart와 인터랙티브 아이콘 매트릭스 결합.
- **CTA 섹션**: 딥 다크 블루 배경에 `backdrop-blur-2xl`이 적용된 터미널 스타일 UI.

---

## Part 5. 실행 로드맵 (Action Roadmap)

### Phase 1: Foundation (기초 구축)
- [ ] `oklch` 기반 색상 체계 및 `clamp()` 타이포그래피 시스템 구축.
- [ ] `.impeccable.md`를 통한 디자인 컨텍스트 최종 확정.

### Phase 2: Refactoring (주요 섹션 개편)
- [ ] Hero 섹션의 중앙 정렬 탈피 및 시네마틱 애니메이션 적용.
- [ ] 서비스 카드를 비대칭 벤토 그리드로 재설계.

### Phase 3: High-End Polish (고도화)
- [ ] `WorkflowOverlay`를 동적인 AI 로직 흐름으로 시각화.
- [ ] 모든 버튼 및 카드에 물리 법칙 기반의 가감속(Expo Easing) 적용.
- [ ] "AI Slop" 요소(보라색 그라데이션 등) 완전 제거.

---
*이 문서는 단순한 문서를 넘어, 사용자가 기술의 정점에 서 있는 듯한 몰입감을 느끼게 하는 **경험**을 설계하는 기준입니다.*

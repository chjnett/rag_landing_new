# Landing Page Design Improvement Plan: Cinematic Noir × Enterprise AI

본 문서는 현재 랜딩 페이지의 디자인을 분석하고, `.gemini/skills`의 디자인 원칙과 `DESIGN_GUIDE.md`의 핵심 철학을 바탕으로 한 단계 더 높은 수준의 디자인으로 개선하기 위한 전략을 제시합니다.

## 1. 현재 디자인 분석 및 진단 (Audit)

### ✅ 강점 (Strengths)
- **기술적 기반**: Framer Motion을 활용한 애니메이션과 Next.js 인프라가 잘 갖춰져 있음.
- **다크 모드 지향**: Sci-Fi Noir 컨셉에 맞는 어두운 배경과 노이즈 텍스처 사용.
- **컴포넌트 구조**: 서비스 카드, 기술 스택 카드 등 모듈화가 잘 되어 있음.

### ⚠️ 개선 필요 사항 (Anti-Patterns)
- **AI Slop (정형화된 AI 느낌)**: 보라색-파란색 그라데이션, 중앙 정렬된 Hero 섹션, Glassmorphism의 과도한 사용 등 2024년형 전형적인 AI 웹사이트의 느낌이 강함.
- **타이포그래피의 개성 부족**: 기본 시스템 폰트(Inter/Sans-serif) 위주의 구성으로 기업용 하이엔드 솔루션의 '권위'와 '전문성'을 드러내기에 부족함.
- **레이아웃의 단조로움**: 모든 요소가 정직하게 중앙에 배치되어 있어 시각적 리듬감(Visual Rhythm)이 부족함.
- **색상 체계의 모호함**: `primary` 색상에 의존하고 있으며, `oklch` 등을 활용한 미세한 색상 제어가 부족함.

---

## 2. 디자인 개선 전략 (Strategy)

### 🌑 컨셉: "The Invisible Power" (절제된 권위)
애플의 미니멀리즘과 느와르 영화의 그림자를 결합하여, 겉으로 드러나지 않지만 강력하게 작동하는 엔터프라이즈 AI 인프라의 이미지를 형상화합니다.

### 🖋️ 1. 타이포그래피 (Typography)
- **Display Font**: 제목에는 더 단단하고 개성 있는 폰트(예: Geist Sans, Cal Sans 또는 고대비 Serif 폰트와 결합)를 사용하여 기술적 우위를 강조.
- **Fluid Sizing**: `clamp()`를 사용하여 화면 크기에 따라 유동적으로 변하는 웅장한 타이포그래피 구현.
- **Tracking**: 제목은 `-0.04em`으로 좁게, 본문은 읽기 편하도록 적절한 여백 확보.

### 🎨 2. 색상 및 조명 (Color & Lighting)
- **OKLCH 기반**: 인식적으로 일정한 밝기를 유지하는 `oklch` 색상 함수 사용.
- **Muted Cyan Accent**: 채도가 높은 원색 대신, 안개 속에 가려진 듯한 `Muted Cyan` (#A5F3FC 계열)을 포인트로 사용.
- **Lighting over Color**: 색면을 채우는 대신 '빛의 경로'를 표현하는 그라데이션 사용 (Point light 효과).

### 🍱 3. 레이아웃: 비대칭 벤토 그리드 (Asymmetric Bento Grid)
- **Grid Breaking**: 모든 카드가 같은 크기인 그리드를 탈피하여, 중요도에 따라 크기가 다른 비대칭 벤토 그리드 적용.
- **Asymmetry**: Hero 섹션의 텍스트와 이미지를 비대칭으로 배치하여 역동성 부여.

### ✨ 4. 시네마틱 인터랙션 (Cinematic Interaction)
- **Staggered Reveal**: 페이지 로드시 요소들이 순차적으로 안개 속에서 드러나는 듯한 효과.
- **Expo Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)를 사용하여 결정적이고 고급스러운 움직임 구현.
- **Parallax Depth**: 스크롤 시 배경의 노이즈와 전경의 카드들이 서로 다른 속도로 움직이는 깊이감 부여.

---

## 3. 세부 실행 계획 (Action Items)

### Phase 1: Foundation (기초 체력 강화)
- [ ] `globals.css`에 `oklch` 기반의 색상 변수 정의.
- [ ] 독보적인 Display Font 도입 및 `clamp()` 기반의 유동적 타이포그래피 시스템 구축.
- [ ] `DESIGN_GUIDE.md`에 정의된 Pure Black (#000) 배경으로 정교화.

### Phase 2: Hero Section Refactoring (첫인상 개편)
- [ ] 중앙 정렬을 탈피한 비대칭 레이아웃 적용.
- [ ] `main.png`에 시네마틱 슬릿(Slit) 애니메이션 및 마우스 패럴랙스 적용.
- [ ] "AI Slop" 보라색 그라데이션을 세련된 화이트/사이언 포인트 조명으로 교체.

### Phase 3: Content Experience (콘텐츠 고도화)
- [ ] `ServiceCards`를 비대칭 벤토 그리드로 재설계.
- [ ] 기술 스택 카드의 호버 효과를 '빛이 카드를 훑고 지나가는' 리플렉션 효과로 개선.
- [ ] `WorkflowOverlay`의 진입/퇴장 애니메이션을 더 정교하게 다듬기.

### Phase 4: Polish & Delight (마무리)
- [ ] 텍스트 컨테이너에 `max-width: 65ch`를 적용하여 가독성 최적화.
- [ ] 스크롤 진행에 따른 미세한 블러(Blur) 및 채도 변화 추가.
- [ ] 버튼 인터랙션에 물리 법칙이 적용된 스케일 변화 추가.

---

## 4. 시각적 체크리스트 (The AI Slop Test)

개선 후 다음 질문에 "아니오"라고 답할 수 있어야 합니다:
- [ ] "이 사이트, 전형적인 AI 서비스 랜딩 페이지 같나요?"
- [ ] "Inter 폰트와 보라색 그라데이션이 가장 먼저 눈에 띄나요?"
- [ ] "모든 섹션이 똑같은 간격과 중앙 정렬로 되어 있나요?"

---
*이 계획은 단순한 UI 수정을 넘어, 사용자가 기술의 정점에 서 있는 듯한 **경험**을 제공하는 것을 목표로 합니다.*

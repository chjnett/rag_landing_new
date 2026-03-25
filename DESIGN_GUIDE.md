# Cinematic Sci-Fi Noir × Apple Minimalism Design Guide

이 프로젝트는 **애플의 절제된 미니멀리즘**과 **다크 시네마틱 느와르(Cinematic Noir)**의 깊이감을 결합하여 고도의 기술력과 하이엔드 이미지를 전달하는 것을 목표로 합니다.

## 1. 핵심 철학 (Core Philosophy)
- **절제의 미학 (Less is Better)**: 불필요한 장식 요소(화려한 그라데이션, 과한 테두리)를 배제하고, 여백을 통해 콘텐츠의 위엄을 드러냅니다.
- **인간 중심의 기술**: 차가운 기술적 이미지보다는 직관적이고 친숙한 인터페이스를 통해 사용자 경험을 최적화합니다.
- **몰입적 경험 (Immersive UI)**: 다크 배경과 빛의 대비를 활용하여 사용자가 화면 속에 빠져드는 듯한 느낌을 줍니다.

## 2. 시각적 가이드라인 (Visual Guidelines)

### 🎨 색상 레이아웃 (Color Palette)
- **Base Background**: `#000000` (Pure Black) - 무한한 깊이감을 상징합니다.
- **Surface**: `rgba(255, 255, 255, 0.05)` (Ultra-thin glass) - 아주 투명한 레이어링.
- **Point Color**: `Muted Cyan` 혹은 `Pure White` - 강조하고 싶은 아주 작은 지점에만 사용합니다.

### 📐 레이아웃 및 형태 (Layout & Form)
- **스쿼클(Squircle)**: 단순히 둥근 모서리가 아니라 매끄러운 곡선감을 위해 `rounded-[32px]` 이상의 큰 값을 사용하거나 수학적 보간이 들어간 형태를 지향합니다.
- **벤토 그리드(Bento Grid)**: 정보를 질서 있게 나열하되 각 셀 사이의 여백을 충분히 두어 숨통을 트여줍니다.
- **여백(Negative Space)**: 섹션 간의 간격을 최소 `py-32` 이상으로 넓게 가져가 고급스러움을 강조합니다.

### ✍️ 타이포그래피 (Typography)
- **위계(Hierarchy)**: 
  - **Headings**: 아주 굵게 (Bold/Black), 자간은 좁게 (`tracking-tighter`, `-0.02em`).
  - **Body**: 얇고 정갈하게 (Medium/Light), 읽기 편한 행간 (`leading-relaxed`).
- **Font**: 시스템 폰트(SF Pro 느낌)를 베이스로 하며 단단한 엔지니어링 느낌을 줍니다.

## 3. main.png 동적 액션 가이드 (Hero Visual)

메인 페이지의 `public/main.png`는 단순한 이미지가 아니라 **첫인상을 결정하는 시네마틱 오브제**로 활용합니다.

- **등장 모션 (Intro Animation)**: 
  - 서서히 밝아지는 `opacity`와 함께 멀리서 아주 천천히 다가오는듯한 `scale: 1.1 -> 1.0` 효과.
  - 슬릿(Slit)이나 블러 효과를 통해 안개 속에서 드러나는 듯한 연출.
- **인터랙션 (Interaction)**: 
  - 마우스 움직임에 따른 미세한 시야각 변화 (Mouse Parallax).
  - 스크롤 시 이미지의 명암이나 채도가 변하며 배경과 동기화되는 효과.

## 4. 컴포넌트 구현 원칙 (Component Checklist)
- [ ] **Border**: `1px solid rgba(255, 255, 255, 0.1)` (보일 듯 말 듯한 선).
- [ ] **Blur**: `backdrop-blur-xl` (깊이감 있는 레이어링).
- [ ] **Shadow**: 물리적으로 존재하는 듯한 아주 은은한 그림자.
- [ ] **Interaction**: 물리 법칙이 적용된 부드러운 가감속 애니메이션.

---
*이 가이드는 Apple의 정갈함과 Sci-Fi Noir의 압도적인 분위기를 프로젝트 전체에 일관되게 적용하기 위한 기준점입니다.*

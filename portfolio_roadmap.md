# Portfolio Roadmap: Modern AI Dev Dashboard

이 문서는 **병역특례(산업기능요원/전문연구요원)** 취업을 목표로 하는 포트폴리오로서, 현재 대시보드의 완성도를 높이고 기술적 역량을 어필하기 위한 개선 및 추가 구현 방안을 정리한 로드맵입니다.

---

## 1. UI/UX 개선 방안 (Visual & Polish)

### 🎨 디자인 고도화
- **Glassmorphism 심화**: 현재 적용된 `backdrop-blur`와 `bg-background/60`을 더 세밀하게 조정하여 레이어 간의 깊이감을 더합니다. (예: 다크 모드에서의 미세한 테두리 그라데이션)
- **Micro-interactions**: 아이콘 호버 시 애니메이션(예: `lucide-react`와 `framer-motion` 연동), 리스트 항목 로딩 시 스켈레톤 UI 적용 등 "디테일에 집착하는 개발자" 이미지를 심어줍니다.
- **Responsive Layout 최적화**: 현재 `lg:grid-cols-12` 기반의 레이아웃이 모바일과 태블릿에서도 완벽하게 동작하도록 미디어 쿼리 및 `Sheet` 컴포넌트(모바일용 사이드바)를 보강합니다.

### 📊 데이터 시각화 강화
- **Real-time Charting**: `ContributionGraph` 외에도 `Recharts`나 `nivo`를 활용하여 기술 스택별 숙련도(Radar Chart)나 프로젝트 진행도(Line/Bar Chart)를 시각화합니다.
- **Workflow 시각화 구체화**: 현재 `WorkflowOverlay`의 정적인 노드들을 실제 AI 로직 흐름에 따라 애니메이션화하여 "데이터 흐름에 대한 이해도"를 어필합니다.

---

## 2. 핵심 기술 구현 (What to Build)

### 🤖 실질적인 RAG 파이프라인 연동
- **LangChain/LlamaIndex 통합**: 단순히 UI만 보여주는 것이 아니라, 로컬 혹은 API 기반의 Vector DB(Pinecone, Supabase Vector 등)와 연동하여 실제 프로젝트 문서를 검색하고 답변하는 기능을 구현합니다.
- **Streaming Response**: AI의 답변을 `ReadableStream`을 통해 실시간으로 타이핑되는 것처럼 보여주는 기능을 완성합니다. (기술적 깊이 어필 포인트)

### 🛠️ 데이터 관리 및 Backend 인프라
- **Supabase/Firebase 실데이터 연동**: 현재 `mock-data.ts`에 의존하는 데이터를 실제 DB로 이관합니다. CRUD 기능을 넘어 실시간 구독(Realtime Subscription) 기능을 대시보드 스탯에 반영합니다.
- **Authentication**: GitHub OAuth를 통한 로그인을 구현하여 "실제 서비스 가능한 수준의 앱"임을 증명합니다.

---

## 3. 포트폴리오 전략 (Refining for Recruiters)

### 📝 프로젝트 상세 페이지 (Deep Dive)
- 각 기술 스택 카드 클릭 시 해당 기술을 사용하여 해결한 **Troubleshooting** 사례를 보여주는 모달이나 상세 페이지를 추가합니다.
- **Git Commit 로그 연동**: 실제 본인의 GitHub API를 호출하여 최신 커밋 내역을 대시보드 하단에 실시간으로 노출합니다.

### 🚀 성능 최적화 및 안정성
- **Next.js 최적화**: Lighthouse 점수 90점 이상을 확보하기 위한 Image optimization, Layout shift 방지, dynamic import 등을 적용하고 이를 문서화합니다.
- **Unit/E2E Test**: `Jest`나 `Playwright`를 활용한 테스트 코드를 한두 개라도 작성하여 "검증 가능한 코드"를 작성하는 역량을 보여줍니다.

---

## 4. 즉시 수정/추가해야 할 우선순위

1. **[수정]** `ContributionGraph`의  hydration 오류 해결 완료 (신뢰도 상승).
2. **[추가]** 사이드바의 채팅 입력값과 `WorkflowOverlay` 연동 (사용자 경험 완결성).
3. **[구체화]** Tech Stack 카드 클릭 시 관련 프로젝트 리스트 필터링 기능.
4. **[보강]** 프로젝트 루트의 `README.md`에 아키텍처 다이어그램(Mermaid) 추가.

> [!IMPORTANT]
> 병특 포트폴리오는 **"이 친구는 우리 회사에 오면 바로 1인분을 할 수 있겠구나"**라는 확신을 주는 것이 핵심입니다. 단순히 '만들었다'가 아니라 '왜 이렇게 만들었는가'에 대한 기술적 근거를 코드와 문서로 준비하세요.

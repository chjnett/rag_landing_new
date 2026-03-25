export const mockTechStacks = [
    {
        id: '1',
        name: 'React & Next.js',
        subTitle: 'Web Frontend',
        status: 'Expert',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        tags: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind'],
        statusColor: 'text-white border-white/50',
        proficiency: [
            { subject: 'SSR/SSG', A: 95 },
            { subject: 'State Mgmt', A: 90 },
            { subject: 'Performance', A: 88 },
            { subject: 'UI/UX Design', A: 92 },
            { subject: 'Architecture', A: 85 },
        ],
        experience: '대규모 트래픽을 처리하는 커머스 및 AI 웹 인터페이스를 Next.js App Router 기반으로 성공적으로 구축 및 최적화.'
    },
    {
        id: '2',
        name: 'Python & FastAPI',
        subTitle: 'AI Backend',
        status: 'Core',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        tags: ['Python 3.11', 'FastAPI', 'Pydantic', 'AsyncIO'],
        statusColor: 'text-white border-primary/50 text-primary',
        proficiency: [
            { subject: 'Async Arch.', A: 95 },
            { subject: 'API Design', A: 95 },
            { subject: 'Security', A: 90 },
            { subject: 'Data Parsing', A: 92 },
            { subject: 'Microservices', A: 88 },
        ],
        experience: '비동기 처리에 특화된 FastAPI를 통해 초당 수천 건의 AI 인퍼런스 요청을 지연 없이 처리하는 백엔드 마이크로서비스 설계.'
    },
    {
        id: '3',
        name: 'LLM & LangChain',
        subTitle: 'AI Engine',
        status: 'Expertise',
        icon: 'https://cdn.simpleicons.org/langchain/white',
        tags: ['LangChain', 'LlamaIndex', 'OpenAI', 'vLLM'],
        statusColor: 'text-white border-white/50',
        proficiency: [
            { subject: 'Prompt Eng.', A: 95 },
            { subject: 'Agent Flow', A: 90 },
            { subject: 'RAG Pipeline', A: 98 },
            { subject: 'Fine-tuning', A: 85 },
            { subject: 'Evaluation', A: 88 },
        ],
        experience: '다양한 오픈소스 및 상용 LLM 체인을 활용하여 엔터프라이즈 맞춤형 RAG 파이프라인 및 자율 에이전트 구축.'
    },
    {
        id: '4',
        name: 'Vector Database',
        subTitle: 'Search & RAG',
        status: 'Advanced',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        tags: ['pgvector', 'Pinecone', 'Milvus', 'Redis'],
        statusColor: 'text-white border-white/50',
        proficiency: [
            { subject: 'Embedding Opt.', A: 95 },
            { subject: 'Hybrid Search', A: 92 },
            { subject: 'Indexing', A: 90 },
            { subject: 'Scaling', A: 88 },
            { subject: 'Data Sync', A: 85 },
        ],
        experience: '수십억 건의 임베딩된 텍스트/이미지 벡터 데이터를 서빙하기 위해 pgvector 및 Pinecone 하이브리드 검색 최적화.'
    },
    {
        id: '5',
        name: 'Docker & Kubernetes',
        subTitle: 'Infrastructure',
        status: 'Expert',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        tags: ['K8s', 'Docker', 'Helm', 'ArgoCD'],
        statusColor: 'text-white border-white/50',
        proficiency: [
            { subject: 'Container', A: 95 },
            { subject: 'Orchestration', A: 92 },
            { subject: 'GitOps', A: 90 },
            { subject: 'Service Mesh', A: 85 },
            { subject: 'AutoScale', A: 90 },
        ],
        experience: '무중단 배포(Zero-downtime deployment) 인프라 구축 및 AI 모델 학습/추론용 GPU 클러스터 프로비저닝.'
    },
    {
        id: '6',
        name: 'AWS & Cloud',
        subTitle: 'Multi-Cloud',
        status: 'Advanced',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        tags: ['AWS', 'EC2', 'S3', 'Terraform'],
        statusColor: 'text-white border-white/50',
        proficiency: [
            { subject: 'Architecture', A: 95 },
            { subject: 'IaC', A: 92 },
            { subject: 'Security', A: 90 },
            { subject: 'Networking', A: 85 },
            { subject: 'Cost Opt.', A: 88 },
        ],
        experience: 'AWS 클라우드 네이티브 설계와 Terraform을 통한 코드 기반 인프라스트럭처(IaC) 관리 체계 도입.'
    }
];

export const mockProjects = [
    {
        id: '1',
        title: 'AI Dev Dashboard',
        description: 'Real-time performance monitoring system for developer clusters.',
        tags: ['Next.js', 'Framer Motion', 'PostgreSQL'],
        status: 'Active',
        lastSync: '2 mins ago',
        progress: 85,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '2',
        title: 'RAG Knowledge Base',
        description: 'Retrieval Augmented Generation system for enterprise documentation.',
        tags: ['Python', 'Pinecone', 'LangChain'],
        status: 'Syncing',
        lastSync: '10 mins ago',
        progress: 42,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '3',
        title: 'Cloud Orchestrator',
        description: 'Kubernetes-based deployment and scaling manager.',
        tags: ['Go', 'Docker', 'K8s'],
        status: 'Stable',
        lastSync: '1 hour ago',
        progress: 100,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
];

export const mockStats = [
    { label: 'Uptime', value: '99.98%', status: 'optimal' },
    { label: 'Avg Latency', value: '42ms', status: 'optimal' },
    { label: 'Error Rate', value: '0.01%', status: 'optimal' },
    { label: 'Active Jobs', value: '12', status: 'warning' },
];

export const mockBlogPosts = [
    {
        id: '1',
        title: 'Maximizing Next.js Performance',
        excerpt: 'Detailed analysis of server component optimization and streaming...',
        date: '2024-03-20',
        readTime: '5 min read',
        slug: 'maximizing-nextjs-performance',
        category: 'Performance',
        content: '# Maximizing Next.js Performance\n\nNext.js is a powerful framework...\n\n## Server Components\n\nReact Server Components allow you to write UI that can be rendered and optionally cached on the server.\n\n```tsx\nexport default async function Page() {\n  const data = await fetchData();\n  return <Component data={data} />;\n}\n```'
    },
    {
        id: '2',
        title: 'The Future of RAG with PostgreSQL',
        excerpt: 'Exploring pgvector and hybrid search strategies for scalable AI...',
        date: '2024-03-18',
        readTime: '8 min read',
        slug: 'future-of-rag-postgres',
        category: 'Engineering',
        content: '# The Future of RAG with PostgreSQL\n\nRetrieval-Augmented Generation (RAG) is evolving quickly...\n\n### Why pgvector?\n\n- Integrated with relational data\n- ACID compliance\n- Familiar SQL interface'
    },
];

// Generate fake contribution data for the graph
export const generateContributionData = () => {
    const data = [];
    for (let i = 0; i < 90; i++) {
        data.push({
            date: new Date(Date.now() - (90 - i) * 24 * 60 * 60 * 1000).toISOString(),
            count: Math.floor(Math.random() * 10),
        });
    }
    return data;
};

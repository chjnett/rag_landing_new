export const mockTechStacks = [
    {
        id: '1',
        name: 'RAG & AI Solutions',
        subTitle: '(LLM, Vector DB, Frameworks)',
        status: 'Core Expertise',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Python', 'LangChain', 'Pinecone', 'PyTorch', 'OpenAI'],
        bgColor: 'bg-card',
        statusColor: 'text-foreground bg-muted',
        proficiency: [
            { subject: 'LLM Fine-tuning', A: 95, fullMark: 100 },
            { subject: 'Vector Search', A: 92, fullMark: 100 },
            { subject: 'Prompt Eng.', A: 90, fullMark: 100 },
            { subject: 'RAG Pipeline', A: 98, fullMark: 100 },
            { subject: 'Evaluation', A: 85, fullMark: 100 },
        ],
        experience: 'Enterprise-grade RAG deployment for 50+ clients, 99.9% query accuracy.'
    },
    {
        id: '2',
        name: 'Cloud Infrastructure',
        subTitle: '(Multi-Cloud, Serverless)',
        status: 'Enterprise Scale',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        tags: ['AWS', 'GCP', 'Azure', 'Serverless'],
        bgColor: 'bg-card',
        statusColor: 'text-foreground bg-muted',
        proficiency: [
            { subject: 'Architecture', A: 95, fullMark: 100 },
            { subject: 'Security', A: 90, fullMark: 100 },
            { subject: 'Cost Opt.', A: 88, fullMark: 100 },
            { subject: 'Networking', A: 92, fullMark: 100 },
            { subject: 'High Avail.', A: 98, fullMark: 100 },
        ],
        experience: 'Hybrid and Multi-cloud architecture design, processing 10B+ daily requests.'
    },
    {
        id: '3',
        name: 'MLOps Pipeline',
        subTitle: '(Training, Serving, Lifecycle)',
        status: 'Automated Lifecycle',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        tags: ['Kubeflow', 'MLflow', 'Triton', 'Ray'],
        bgColor: 'bg-card',
        statusColor: 'text-foreground bg-muted',
        proficiency: [
            { subject: 'Model Serving', A: 95, fullMark: 100 },
            { subject: 'Training Opt.', A: 90, fullMark: 100 },
            { subject: 'Feature Store', A: 85, fullMark: 100 },
            { subject: 'Monitoring', A: 92, fullMark: 100 },
            { subject: 'Data Prep', A: 88, fullMark: 100 },
        ],
        experience: 'End-to-end MLOps pipeline reducing model deployment time from weeks to hours.'
    },
    {
        id: '4',
        name: 'DevOps & IaC',
        subTitle: '(CI/CD, Kubernetes, Terraform)',
        status: 'Zero Downtime',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        tags: ['Kubernetes', 'Terraform', 'ArgoCD', 'Docker'],
        bgColor: 'bg-card',
        statusColor: 'text-foreground bg-muted',
        proficiency: [
            { subject: 'K8s Cluster', A: 98, fullMark: 100 },
            { subject: 'IaC', A: 95, fullMark: 100 },
            { subject: 'CI/CD', A: 95, fullMark: 100 },
            { subject: 'GitOps', A: 92, fullMark: 100 },
            { subject: 'Service Mesh', A: 88, fullMark: 100 },
        ],
        experience: '100% Infrastructure as Code coverage across all production environments.'
    },
    {
        id: '5',
        name: 'AIOps & Observability',
        subTitle: '(AI-driven Monitoring)',
        status: 'Predictive Insights',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
        tags: ['Prometheus', 'Grafana', 'ELK', 'Datadog', 'AI Anomaly'],
        bgColor: 'bg-card',
        statusColor: 'text-foreground bg-muted',
        proficiency: [
            { subject: 'Metrics', A: 95, fullMark: 100 },
            { subject: 'Tracing', A: 90, fullMark: 100 },
            { subject: 'Logs', A: 92, fullMark: 100 },
            { subject: 'Anomaly Det.', A: 88, fullMark: 100 },
            { subject: 'Alerting', A: 95, fullMark: 100 },
        ],
        experience: 'Predictive maintenance system reducing P1 incidents by 60%.'
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

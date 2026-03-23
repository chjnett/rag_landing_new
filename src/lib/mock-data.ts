export const mockTechStacks = [
    {
        id: '1',
        name: 'Python',
        subTitle: '(Django, FastAPI)',
        status: 'Completed',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Samba'],
        bgColor: 'bg-[#1e1e1e]',
        statusColor: 'text-green-500 bg-green-500/10',
        proficiency: [
            { subject: 'Logic', A: 95, fullMark: 100 },
            { subject: 'Speed', A: 85, fullMark: 100 },
            { subject: 'API', A: 90, fullMark: 100 },
            { subject: 'DB', A: 92, fullMark: 100 },
            { subject: 'Security', A: 80, fullMark: 100 },
        ],
        experience: ''
    },
    {
        id: '2',
        name: 'JavaScript',
        subTitle: '(React, Node.js)',
        status: 'Ongoing',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        tags: ['JavaScript', 'React', 'Node.js', 'Node & Enetries'],
        bgColor: 'bg-[#1e1e1e]',
        statusColor: 'text-orange-500 bg-orange-500/10',
        proficiency: [
            { subject: 'UI', A: 98, fullMark: 100 },
            { subject: 'State', A: 90, fullMark: 100 },
            { subject: 'Async', A: 85, fullMark: 100 },
            { subject: 'DOM', A: 95, fullMark: 100 },
            { subject: 'Perf', A: 80, fullMark: 100 },
        ],
        experience: ''
    },
    {
        id: '3',
        name: 'Kubernetes & Docker',
        status: 'Principal Developer',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        tags: ['Kubernetes', 'Docker', 'LangChain'],
        bgColor: 'bg-[#1e1e1e]',
        statusColor: 'text-blue-500 bg-blue-500/10',
        proficiency: [
            { subject: 'Scale', A: 90, fullMark: 100 },
            { subject: 'Net', A: 85, fullMark: 100 },
            { subject: 'Sec', A: 80, fullMark: 100 },
            { subject: 'Auth', A: 88, fullMark: 100 },
            { subject: 'CI/CD', A: 95, fullMark: 100 },
        ],
        experience: ''
    },
    {
        id: '4',
        name: 'AWS',
        subTitle: '(EC2, S3, Lambda)',
        status: 'Completed',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        tags: ['AWS', 'EC2', 'S3', 'Lambda', 'Amazon'],
        bgColor: 'bg-[#1e1e1e]',
        statusColor: 'text-green-500 bg-green-500/10',
        proficiency: [
            { subject: 'Cloud', A: 92, fullMark: 100 },
            { subject: 'S3', A: 95, fullMark: 100 },
            { subject: 'IAM', A: 80, fullMark: 100 },
            { subject: 'Serverless', A: 90, fullMark: 100 },
            { subject: 'Cost', A: 85, fullMark: 100 },
        ],
        experience: ''
    },
    {
        id: '5',
        name: 'Terraform',
        subTitle: '(IaC, HCL)',
        status: 'Ongoing',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
        tags: ['Terraform', 'IaC', 'Infrastructure', 'HCL'],
        bgColor: 'bg-[#1e1e1e]',
        statusColor: 'text-purple-500 bg-purple-500/10',
        proficiency: [
            { subject: 'IaC', A: 90, fullMark: 100 },
            { subject: 'State', A: 85, fullMark: 100 },
            { subject: 'Provider', A: 80, fullMark: 100 },
            { subject: 'Module', A: 92, fullMark: 100 },
            { subject: 'Cloud', A: 88, fullMark: 100 },
        ],
        experience: ''
    },
    {
        id: '6',
        name: 'Java & Spring Boot',
        subTitle: '(Spring Cloud, JPA)',
        status: 'Completed',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        tags: ['Java', 'Spring Boot', 'Spring Cloud', 'JPA', 'MySQL'],
        bgColor: 'bg-[#1e1e1e]',
        statusColor: 'text-green-500 bg-green-500/10',
        proficiency: [
            { subject: 'Spring', A: 95, fullMark: 100 },
            { subject: 'JPA', A: 90, fullMark: 100 },
            { subject: 'Cloud', A: 85, fullMark: 100 },
            { subject: 'MVC', A: 92, fullMark: 100 },
            { subject: 'Security', A: 88, fullMark: 100 },
        ],
        experience: ''
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

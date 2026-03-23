import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
    name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
    const IconComponent = (Icons as any)[name];

    if (!IconComponent) {
        return <Icons.HelpCircle {...props} />;
    }

    return <IconComponent {...props} />;
}

export const availableIcons = [
    'LayoutDashboard', 'Layers', 'Activity', 'BookOpen', 'Code',
    'Settings', 'Users', 'Database', 'Cpu', 'Search',
    'Mail', 'Github', 'Twitter', 'Linkedin', 'ExternalLink',
    'Terminal', 'Boxes', 'Globe', 'Zap'
];

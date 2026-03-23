import { ProjectList } from "@/components/dashboard/ProjectList";

export default function ProjectsPage() {
    return (
        <div className="space-y-10">
            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Project Archive</h1>
                <p className="text-muted-foreground text-lg font-medium">Detailed list of active and archived engineering projects.</p>
            </header>

            <section>
                <ProjectList />
            </section>
        </div>
    );
}

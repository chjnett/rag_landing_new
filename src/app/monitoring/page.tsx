import { StatusMonitor } from "@/components/dashboard/StatusMonitor";
import { Activity, ShieldCheck, Cpu, Database } from "lucide-react";

export default function MonitoringPage() {
    return (
        <div className="space-y-10">
            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-2">System Monitoring</h1>
                <p className="text-muted-foreground text-lg font-medium">Real-time infrastructure health and performance metrics.</p>
            </header>

            <section>
                <StatusMonitor />
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-minimal p-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                        <Cpu className="w-4 h-4" /> Node Clusters
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-secondary/20 border border-border rounded-md">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-sm font-mono">cluster-node-0{i}</span>
                                </div>
                                <span className="text-xs font-bold text-muted-foreground">99.9% Uptime</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-minimal p-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                        <Database className="w-4 h-4" /> Database Health
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-secondary/20 border border-border rounded-md">
                            <span className="text-sm font-medium">PostgreSQL Primary</span>
                            <span className="text-xs font-bold text-primary uppercase">Healthy</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-secondary/20 border border-border rounded-md">
                            <span className="text-sm font-medium">Vector Store (Pinecone)</span>
                            <span className="text-xs font-bold text-primary uppercase">Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

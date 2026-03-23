import { ContributionGraph } from "@/components/dashboard/ContributionGraph";
import { Trophy, Target, Zap } from "lucide-react";

export default function TestsPage() {
    return (
        <div className="space-y-10">
            <header>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Algorithm & Tests</h1>
                <p className="text-muted-foreground text-lg font-medium">Tracking progress in coding challenges and system design.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="card-minimal p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Global Rank</p>
                        <p className="text-xl font-black">Top 2%</p>
                    </div>
                </div>
                <div className="card-minimal p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Target className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Accuracy</p>
                        <p className="text-xl font-black">94.5%</p>
                    </div>
                </div>
                <div className="card-minimal p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Next Milestone</p>
                        <p className="text-xl font-black">128 Days</p>
                    </div>
                </div>
            </div>

            <section>
                <ContributionGraph />
            </section>

            <section className="card-minimal p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Recent Sessions</h2>
                <div className="space-y-3">
                    {[
                        { title: "Binary Search Tree Validation", diff: "Medium", date: "Today" },
                        { title: "LRU Cache Implementation", diff: "Hard", date: "Yesterday" },
                        { title: "Merge K Sorted Lists", diff: "Hard", date: "2 days ago" },
                    ].map((test, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-secondary/10 border border-border rounded-lg hover:bg-secondary/20 transition-all cursor-default">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold">{test.title}</span>
                                <span className="text-[10px] text-muted-foreground font-mono">{test.date}</span>
                            </div>
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded border border-border uppercase tracking-widest ${test.diff === 'Hard' ? 'text-destructive' : 'text-primary'}`}>
                                {test.diff}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

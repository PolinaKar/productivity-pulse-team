import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { GitCommit, GitPullRequest, CheckSquare } from "lucide-react";

const engineeringData = [
  { name: "Mon", value: 45 },
  { name: "Tue", value: 52 },
  { name: "Wed", value: 48 },
  { name: "Thu", value: 61 },
  { name: "Fri", value: 55 },
];

export default function Engineering() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Engineering</h1>
        <p className="text-muted-foreground mt-2">
          Development team productivity and code metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Commits This Week"
          value={156}
          change={8.3}
          icon={GitCommit}
          trend="up"
        />
        <MetricCard
          title="PRs Created/Merged"
          value={42}
          change={5.1}
          icon={GitPullRequest}
          trend="up"
        />
        <MetricCard
          title="Tasks Completed"
          value={38}
          change={12.4}
          icon={CheckSquare}
          trend="up"
        />
      </div>

      <DepartmentChart
        title="Daily Commit Activity"
        data={engineeringData}
        color="hsl(var(--metric-engineering))"
      />
    </div>
  );
}

import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { FileText, UserCheck, Users } from "lucide-react";

const hrData = [
  { name: "Mon", value: 8 },
  { name: "Tue", value: 12 },
  { name: "Wed", value: 10 },
  { name: "Thu", value: 15 },
  { name: "Fri", value: 14 },
  { name: "Sat", value: 3 },
  { name: "Sun", value: 2 },
];

export default function HR() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">HR</h1>
        <p className="text-muted-foreground mt-2">
          Human resources and recruitment productivity metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Documents Published"
          value={18}
          change={6.2}
          icon={FileText}
          trend="up"
        />
        <MetricCard
          title="Candidate Status Changes"
          value={34}
          change={12.5}
          icon={UserCheck}
          trend="up"
        />
        <MetricCard
          title="Active Interviews"
          value={12}
          change={-4.8}
          icon={Users}
          trend="down"
        />
      </div>

      <DepartmentChart
        title="Daily HR Activity"
        data={hrData}
        color="hsl(var(--metric-hr))"
      />
    </div>
  );
}

import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { FileText, Edit, TrendingUp } from "lucide-react";

const marketingData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 15 },
  { name: "Wed", value: 18 },
  { name: "Thu", value: 22 },
  { name: "Fri", value: 19 },
  { name: "Sat", value: 8 },
  { name: "Sun", value: 5 },
];

export default function Marketing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Marketing</h1>
        <p className="text-muted-foreground mt-2">
          Campaign creation and content productivity metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Campaign Drafts Created"
          value={24}
          change={15.2}
          icon={FileText}
          trend="up"
        />
        <MetricCard
          title="Document Edits"
          value={187}
          change={-3.5}
          icon={Edit}
          trend="down"
        />
        <MetricCard
          title="Content Engagement"
          value="92%"
          change={7.8}
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <DepartmentChart
        title="Daily Campaign Activity"
        data={marketingData}
        color="hsl(var(--metric-marketing))"
      />
    </div>
  );
}

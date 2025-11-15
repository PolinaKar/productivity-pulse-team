import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { Code, Megaphone, Palette, Users, DollarSign, TrendingUp } from "lucide-react";

const overviewData = [
  { name: "Mon", value: 85 },
  { name: "Tue", value: 88 },
  { name: "Wed", value: 82 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 87 },
  { name: "Sat", value: 75 },
  { name: "Sun", value: 70 },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Productivity Overview</h1>
        <p className="text-muted-foreground mt-2">
          Company-wide productivity metrics and insights
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Engineering"
          value="94%"
          change={5.2}
          icon={Code}
          trend="up"
        />
        <MetricCard
          title="Marketing"
          value="87%"
          change={2.4}
          icon={Megaphone}
          trend="up"
        />
        <MetricCard
          title="Product & Design"
          value="91%"
          change={-1.2}
          icon={Palette}
          trend="down"
        />
        <MetricCard
          title="HR"
          value="89%"
          change={3.8}
          icon={Users}
          trend="up"
        />
        <MetricCard
          title="Finance"
          value="92%"
          change={1.5}
          icon={DollarSign}
          trend="up"
        />
        <MetricCard
          title="Overall Score"
          value="90.6%"
          change={2.3}
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <DepartmentChart
        title="Weekly Productivity Trend"
        data={overviewData}
        color="hsl(var(--primary))"
      />
    </div>
  );
}

import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { FileSpreadsheet, Receipt, CheckCircle } from "lucide-react";

const financeData = [
  { name: "Mon", value: 15 },
  { name: "Tue", value: 18 },
  { name: "Wed", value: 22 },
  { name: "Thu", value: 20 },
  { name: "Fri", value: 25 },
  { name: "Sat", value: 8 },
  { name: "Sun", value: 5 },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finance</h1>
        <p className="text-muted-foreground mt-2">
          Financial operations and documentation metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Spreadsheets Edited"
          value={45}
          change={3.2}
          icon={FileSpreadsheet}
          trend="up"
        />
        <MetricCard
          title="Invoices Created"
          value={78}
          change={8.9}
          icon={Receipt}
          trend="up"
        />
        <MetricCard
          title="Approvals Processed"
          value={62}
          change={-2.1}
          icon={CheckCircle}
          trend="down"
        />
      </div>

      <DepartmentChart
        title="Daily Finance Activity"
        data={financeData}
        color="hsl(var(--metric-finance))"
      />
    </div>
  );
}

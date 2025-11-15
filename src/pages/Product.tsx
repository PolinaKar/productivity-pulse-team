import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { CheckSquare, FileEdit, Layers } from "lucide-react";

const productData = [
  { name: "Mon", value: 18 },
  { name: "Tue", value: 22 },
  { name: "Wed", value: 20 },
  { name: "Thu", value: 25 },
  { name: "Fri", value: 23 },
  { name: "Sat", value: 12 },
  { name: "Sun", value: 8 },
];

export default function Product() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Product & Design</h1>
        <p className="text-muted-foreground mt-2">
          Product development and design workflow metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Tasks Created/Closed"
          value={45}
          change={-2.3}
          icon={CheckSquare}
          trend="down"
        />
        <MetricCard
          title="Documents Updated"
          value={32}
          change={8.7}
          icon={FileEdit}
          trend="up"
        />
        <MetricCard
          title="Design Iterations"
          value={28}
          change={4.5}
          icon={Layers}
          trend="up"
        />
      </div>

      <DepartmentChart
        title="Daily Task Activity"
        data={productData}
        color="hsl(var(--metric-product))"
      />
    </div>
  );
}

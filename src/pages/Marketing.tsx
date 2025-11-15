import { useState } from "react";
import { MetricCard } from "@/components/MetricCard";
import { DepartmentChart } from "@/components/DepartmentChart";
import { FileText, Edit, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dailyData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 15 },
  { name: "Wed", value: 18 },
  { name: "Thu", value: 22 },
  { name: "Fri", value: 19 },
];

const monthlyData = [
  { name: "Jan", value: 245 },
  { name: "Feb", value: 280 },
  { name: "Mar", value: 310 },
  { name: "Apr", value: 295 },
  { name: "May", value: 340 },
  { name: "Jun", value: 365 },
  { name: "Jul", value: 320 },
  { name: "Aug", value: 355 },
  { name: "Sep", value: 380 },
  { name: "Oct", value: 390 },
  { name: "Nov", value: 410 },
  { name: "Dec", value: 425 },
];

const quarterlyData = [
  { name: "Q1", value: 835 },
  { name: "Q2", value: 1000 },
  { name: "Q3", value: 1055 },
  { name: "Q4", value: 1225 },
];

export default function Marketing() {
  const [activeTab, setActiveTab] = useState("daily");

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

      <Tabs defaultValue="daily" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <DepartmentChart
            title="Daily Campaign Activity"
            data={dailyData}
            color="hsl(var(--metric-marketing))"
          />
        </TabsContent>

        <TabsContent value="monthly">
          <DepartmentChart
            title="Monthly Campaign Activity"
            data={monthlyData}
            color="hsl(var(--metric-marketing))"
          />
        </TabsContent>

        <TabsContent value="quarterly">
          <DepartmentChart
            title="Quarterly Campaign Activity"
            data={quarterlyData}
            color="hsl(var(--metric-marketing))"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

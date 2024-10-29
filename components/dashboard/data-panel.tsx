"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, Line } from "recharts";
import { ResponsiveContainer, BarChart, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const monthlyData = [
  { month: "Jan", health: 65, education: 45, infrastructure: 30 },
  { month: "Feb", health: 70, education: 50, infrastructure: 35 },
  { month: "Mar", health: 75, education: 55, infrastructure: 40 },
  { month: "Apr", health: 80, education: 60, infrastructure: 45 },
  { month: "May", health: 85, education: 65, infrastructure: 50 },
  { month: "Jun", health: 90, education: 70, infrastructure: 55 },
];

const regionData = [
  { region: "Adrar", value: 45 },
  { region: "Assaba", value: 60 },
  { region: "Brakna", value: 75 },
  { region: "Nouakchott", value: 90 },
  { region: "Tagant", value: 55 },
];

export function DataPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Regional Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionData}>
                <XAxis dataKey="region" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Bar
                  dataKey="value"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Region
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {payload[0].payload.region}
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Value
                              </span>
                              <span className="font-bold">
                                {payload[0].value}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Trends Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid gap-2">
                            {payload.map((p) => (
                              <div key={p.name} className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  {p.name}
                                </span>
                                <span className="font-bold">{p.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="health"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="education"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="infrastructure"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Key Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Total Population</span>
              <span className="text-sm">4.6M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Healthcare Facilities</span>
              <span className="text-sm">245</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Educational Institutions</span>
              <span className="text-sm">892</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Infrastructure Projects</span>
              <span className="text-sm">156</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
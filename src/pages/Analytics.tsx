import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, TrendingUp } from "lucide-react";
import { costTrendData, rakeUtilizationData } from "@/lib/dummyData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Comprehensive performance insights and reporting</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Avg Cost per Rake</p>
              <p className="text-2xl font-bold text-foreground">₹38,500</p>
              <p className="text-xs text-success mt-1">↓ 12.5% vs last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Freight Efficiency</p>
              <p className="text-2xl font-bold text-foreground">87.5%</p>
              <p className="text-xs text-success mt-1">↑ 3.2% vs last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Total Dispatches</p>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-xs text-success mt-1">↑ 8.1% vs last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Delay Incidents</p>
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-xs text-success mt-1">↓ 60% vs last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Cost Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={costTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
                <Area type="monotone" dataKey="cost" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Rake Type Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={rakeUtilizationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
                <Bar dataKey="utilized" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <h4 className="font-semibold text-success-foreground mb-2">Cost Optimization Success</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered route optimization has reduced average transport costs by 12.5% over the last quarter, saving approximately ₹15.2 lakhs.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-primary-foreground mb-2">Utilization Improvement</h4>
              <p className="text-sm text-muted-foreground">
                Rake utilization has improved by 8.3% through intelligent load balancing and multi-destination routing strategies.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h4 className="font-semibold text-warning-foreground mb-2">Predictive Maintenance Alert</h4>
              <p className="text-sm text-muted-foreground">
                Based on usage patterns, 3 rakes are recommended for preventive maintenance in the next 2 weeks to avoid potential delays.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { stockyards } from "@/lib/dummyData";
import { Package, TrendingUp, AlertCircle } from "lucide-react";

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Inventory & Stockyard Management</h1>
        <p className="text-muted-foreground mt-1">Real-time material availability and stockyard utilization</p>
      </div>

      {/* Stockyard Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {stockyards.map((yard) => (
          <Card key={yard.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {yard.name}
                </CardTitle>
                <Badge variant={yard.utilization > 80 ? "destructive" : yard.utilization > 60 ? "default" : "secondary"}>
                  {yard.utilization}% Utilized
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Overall Utilization</span>
                  <span className="text-sm text-muted-foreground">{yard.utilization}%</span>
                </div>
                <Progress value={yard.utilization} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Coal</span>
                    <span className="text-sm font-bold">{yard.coal} tons</span>
                  </div>
                  <Progress value={(yard.coal / 5000) * 100} className="h-1.5" />
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Iron Ore</span>
                    <span className="text-sm font-bold">{yard.iron_ore} tons</span>
                  </div>
                  <Progress value={(yard.iron_ore / 3000) * 100} className="h-1.5" />
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Limestone</span>
                    <span className="text-sm font-bold">{yard.limestone} tons</span>
                  </div>
                  <Progress value={(yard.limestone / 2000) * 100} className="h-1.5" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-sm text-muted-foreground">Loading Capacity</span>
                <span className="text-sm font-semibold">{yard.capacity} rakes/day</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alerts and Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            Inventory Alerts & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border-l-4 border-warning bg-warning/5">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="font-semibold">High Utilization Alert</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Rourkela Stockyard is at 85% capacity. Consider scheduling additional dispatches.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-success bg-success/5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-semibold">Optimization Opportunity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Durgapur Stockyard has optimal capacity for new orders. Recommended for next rake formation.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
              <div className="flex items-center gap-2 mb-1">
                <Package className="h-4 w-4 text-primary" />
                <span className="font-semibold">Restock Recommendation</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Coal inventory at Bhilai projected to reach critical levels in 5 days based on current dispatch rate.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

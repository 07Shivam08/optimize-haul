import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { routes, rakes } from "@/lib/dummyData";
import { Truck, MapPin, Clock, DollarSign, Route } from "lucide-react";

export default function Dispatch() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dispatch Planning</h1>
        <p className="text-muted-foreground mt-1">AI-optimized dispatch scheduling and route management</p>
      </div>

      {/* Active Dispatches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-primary" />
            Active Dispatches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {rakes.filter(r => r.status === "In Transit" || r.status === "Loading").map((rake) => (
              <div key={rake.id} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{rake.id}</h4>
                      <p className="text-sm text-muted-foreground">{rake.type} - {rake.capacity}T</p>
                    </div>
                  </div>
                  <Badge variant={rake.status === "Loading" ? "secondary" : "default"}>
                    {rake.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{rake.location}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">View Route</Button>
                  <Button size="sm" variant="outline">Track Live</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Route Planning */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-5 w-5 text-primary" />
              Optimized Routes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {routes.slice(0, 4).map((route) => (
                <div key={route.id} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">{route.from}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="font-medium text-sm">{route.to}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Route className="h-3 w-3 text-muted-foreground" />
                      <span>{route.distance} km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>{route.estimated_time}h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-muted-foreground" />
                      <span>₹{route.cost_per_ton}/T</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dispatch Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border-l-4 border-success bg-success/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">R007 - Priority Dispatch</span>
                  <Badge className="bg-success text-success-foreground">Today</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Bhilai → Delhi Plant</p>
                <p className="text-xs text-muted-foreground mt-1">Scheduled: 14:00 IST</p>
              </div>

              <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">R008 - Standard Dispatch</span>
                  <Badge variant="outline">Tomorrow</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Rourkela → Pune Plant</p>
                <p className="text-xs text-muted-foreground mt-1">Scheduled: 09:00 IST</p>
              </div>

              <div className="p-4 rounded-lg border-l-4 border-warning bg-warning/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">R009 - Pending Review</span>
                  <Badge variant="secondary">Pending</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Durgapur → Bangalore Plant</p>
                <p className="text-xs text-muted-foreground mt-1">Awaiting Approval</p>
              </div>
            </div>

            <Button className="w-full mt-4">
              Schedule New Dispatch
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

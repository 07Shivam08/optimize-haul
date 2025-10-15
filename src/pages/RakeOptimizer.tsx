import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { stockyards, orders, rakes } from "@/lib/dummyData";
import { Sparkles, TrendingUp, Package, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function RakeOptimizer() {
  const [selectedStockyard, setSelectedStockyard] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<any>(null);
  const { toast } = useToast();

  const handleOptimize = async () => {
    if (!selectedStockyard || !selectedOrder) {
      toast({
        title: "Missing Selection",
        description: "Please select both stockyard and order to optimize.",
        variant: "destructive"
      });
      return;
    }

    setIsOptimizing(true);
    
    // Simulate AI optimization
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const stockyard = stockyards.find(s => s.id === selectedStockyard);
    const order = orders.find(o => o.id === selectedOrder);
    const availableRake = rakes.find(r => r.status === "Available");

    const result = {
      rakeId: availableRake?.id,
      rakeType: availableRake?.type,
      loadingPoint: stockyard?.name,
      material: order?.material,
      quantity: order?.quantity,
      destination: order?.destination,
      estimatedCost: Math.floor((order?.quantity || 0) * 850),
      estimatedTime: 36,
      efficiency: 92,
      costSaving: 12.5
    };

    setOptimizationResult(result);
    setIsOptimizing(false);
    
    toast({
      title: "Optimization Complete",
      description: "AI has generated the optimal rake formation plan.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Rake Formation Optimizer</h1>
        <p className="text-muted-foreground mt-1">AI-powered optimal rake formation and loading plan</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Configuration Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Select Stockyard</label>
              <Select value={selectedStockyard} onValueChange={setSelectedStockyard}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose stockyard" />
                </SelectTrigger>
                <SelectContent>
                  {stockyards.map((yard) => (
                    <SelectItem key={yard.id} value={yard.id}>
                      {yard.name} - Utilization: {yard.utilization}%
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Select Order</label>
              <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose order" />
                </SelectTrigger>
                <SelectContent>
                  {orders.map((order) => (
                    <SelectItem key={order.id} value={order.id}>
                      {order.id} - {order.material} ({order.quantity}T) - {order.priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedStockyard && (
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-2">Stockyard Details</h4>
                  {stockyards.filter(s => s.id === selectedStockyard).map(yard => (
                    <div key={yard.id} className="space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Coal:</span> <span className="font-medium">{yard.coal}T</span></p>
                      <p><span className="text-muted-foreground">Iron Ore:</span> <span className="font-medium">{yard.iron_ore}T</span></p>
                      <p><span className="text-muted-foreground">Limestone:</span> <span className="font-medium">{yard.limestone}T</span></p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Button 
              onClick={handleOptimize} 
              disabled={isOptimizing}
              className="w-full"
              size="lg"
            >
              {isOptimizing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Optimizing with AI...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Optimal Plan
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Optimization Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!optimizationResult ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <Sparkles className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">Configure parameters and click optimize to see AI-generated results</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 border border-success/20">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Optimization Successful</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Assigned Rake</span>
                    <span className="font-semibold">{optimizationResult.rakeId} ({optimizationResult.rakeType})</span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Loading Point</span>
                    <span className="font-semibold flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {optimizationResult.loadingPoint}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Material & Quantity</span>
                    <span className="font-semibold">{optimizationResult.material} - {optimizationResult.quantity}T</span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Destination</span>
                    <span className="font-semibold">{optimizationResult.destination}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Estimated Cost</span>
                    <span className="font-semibold">₹{optimizationResult.estimatedCost.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Transit Time</span>
                    <span className="font-semibold">{optimizationResult.estimatedTime} hours</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3 rounded-lg bg-success/10 border border-success/20 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Efficiency</p>
                      <p className="text-2xl font-bold text-success">{optimizationResult.efficiency}%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Cost Saving</p>
                      <p className="text-2xl font-bold text-primary">{optimizationResult.costSaving}%</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Export Plan as PDF
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Available Rakes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Available Rakes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {rakes.map((rake) => (
              <div key={rake.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">{rake.id}</span>
                  <Badge variant="outline">{rake.type}</Badge>
                  <span className="text-sm text-muted-foreground">Capacity: {rake.capacity}T</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{rake.location}</span>
                  <Badge variant={rake.status === "Available" ? "default" : rake.status === "In Transit" ? "secondary" : "outline"}>
                    {rake.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

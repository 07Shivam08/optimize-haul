import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, User, Key, Bell } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage system configuration and preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              User Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" placeholder="Logistics Manager" disabled />
            </div>
            <Button>Update Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              AI Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-status">Gemini API Status</Label>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm text-success-foreground">Connected & Active</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Optimization Model</Label>
              <Input value="Gemini 2.5 Pro" disabled />
            </div>
            <div className="space-y-2">
              <Label>AI Confidence Threshold</Label>
              <Input value="85%" disabled />
            </div>
            <Button variant="outline">Reconfigure AI</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="high-priority">High Priority Orders</Label>
              <input type="checkbox" id="high-priority" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="cost-alerts">Cost Optimization Alerts</Label>
              <input type="checkbox" id="cost-alerts" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dispatch-updates">Dispatch Updates</Label>
              <input type="checkbox" id="dispatch-updates" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="inventory-alerts">Inventory Alerts</Label>
              <input type="checkbox" id="inventory-alerts" className="rounded" />
            </div>
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Default Loading Capacity</Label>
              <Input value="4 rakes/day" />
            </div>
            <div className="space-y-2">
              <Label>Cost Calculation Method</Label>
              <Input value="Distance-based + Time-weighted" disabled />
            </div>
            <div className="space-y-2">
              <Label>Optimization Frequency</Label>
              <Input value="Every 4 hours" />
            </div>
            <Button variant="outline">Advanced Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

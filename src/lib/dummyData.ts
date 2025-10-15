// Dummy data for the Smart Rake Optimizer application

export const stockyards = [
  { id: "SY01", name: "Bhilai Stockyard", coal: 2400, iron_ore: 1200, limestone: 800, capacity: 5, utilization: 75 },
  { id: "SY02", name: "Rourkela Stockyard", coal: 3000, iron_ore: 1800, limestone: 1200, capacity: 4, utilization: 85 },
  { id: "SY03", name: "Durgapur Stockyard", coal: 1800, iron_ore: 900, limestone: 600, capacity: 3, utilization: 60 },
  { id: "SY04", name: "Bokaro Stockyard", coal: 2200, iron_ore: 1400, limestone: 1000, capacity: 4, utilization: 70 }
];

export const orders = [
  { id: "ORD001", material: "Coal", quantity: 1000, priority: "High", destination: "Delhi Plant", due_date: "2025-10-20", status: "Pending" },
  { id: "ORD002", material: "Iron Ore", quantity: 800, priority: "Medium", destination: "Pune Plant", due_date: "2025-10-22", status: "Pending" },
  { id: "ORD003", material: "Limestone", quantity: 600, priority: "High", destination: "Mumbai Plant", due_date: "2025-10-18", status: "In Progress" },
  { id: "ORD004", material: "Coal", quantity: 1200, priority: "Low", destination: "Bangalore Plant", due_date: "2025-10-25", status: "Pending" },
  { id: "ORD005", material: "Iron Ore", quantity: 900, priority: "High", destination: "Chennai Plant", due_date: "2025-10-19", status: "In Progress" },
  { id: "ORD006", material: "Coal", quantity: 700, priority: "Medium", destination: "Hyderabad Plant", due_date: "2025-10-23", status: "Pending" }
];

export const rakes = [
  { id: "R001", type: "BOXN", capacity: 3800, status: "Available", location: "Bhilai" },
  { id: "R002", type: "BRN", capacity: 4000, status: "Available", location: "Rourkela" },
  { id: "R003", type: "BOXN", capacity: 3800, status: "In Transit", location: "En Route to Delhi" },
  { id: "R004", type: "BCN", capacity: 3600, status: "Available", location: "Durgapur" },
  { id: "R005", type: "BOXN", capacity: 3800, status: "Loading", location: "Bokaro" },
  { id: "R006", type: "BRN", capacity: 4000, status: "Available", location: "Bhilai" }
];

export const routes = [
  { id: "RT001", from: "Bhilai", to: "Delhi Plant", distance: 1200, estimated_time: 36, cost_per_ton: 850 },
  { id: "RT002", from: "Rourkela", to: "Pune Plant", distance: 1500, estimated_time: 42, cost_per_ton: 920 },
  { id: "RT003", from: "Bhilai", to: "Mumbai Plant", distance: 1100, estimated_time: 34, cost_per_ton: 810 },
  { id: "RT004", from: "Durgapur", to: "Bangalore Plant", distance: 1800, estimated_time: 48, cost_per_ton: 1050 },
  { id: "RT005", from: "Bokaro", to: "Chennai Plant", distance: 1650, estimated_time: 45, cost_per_ton: 980 },
  { id: "RT006", from: "Rourkela", to: "Hyderabad Plant", distance: 1350, estimated_time: 38, cost_per_ton: 890 }
];

export const dashboardMetrics = {
  activeRakes: 12,
  pendingOrders: 24,
  totalStock: 18500,
  avgUtilization: 78,
  monthlyRevenue: 45600000,
  costSavings: 12.5,
  onTimeDelivery: 94.2,
  rakeEfficiency: 87.5
};

export const costTrendData = [
  { month: "Apr", cost: 42000, savings: 8 },
  { month: "May", cost: 39000, savings: 10 },
  { month: "Jun", cost: 38000, savings: 11 },
  { month: "Jul", cost: 41000, savings: 9 },
  { month: "Aug", cost: 37000, savings: 12 },
  { month: "Sep", cost: 36000, savings: 13 },
  { month: "Oct", cost: 35000, savings: 14 }
];

export const rakeUtilizationData = [
  { type: "BOXN", utilized: 85, capacity: 100 },
  { type: "BRN", utilized: 78, capacity: 100 },
  { type: "BCN", utilized: 72, capacity: 100 },
  { type: "BOXNHL", utilized: 90, capacity: 100 }
];

export const materialDistribution = [
  { name: "Coal", value: 8500, percentage: 46 },
  { name: "Iron Ore", value: 6300, percentage: 34 },
  { name: "Limestone", value: 3700, percentage: 20 }
];

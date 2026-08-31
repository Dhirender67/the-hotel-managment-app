import DashboardLayout from "../features/dashboard/DashboardLayout";
import FilterDashboard from "../features/dashboard/FilterDashboard";

function Dashboard() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <FilterDashboard />
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;

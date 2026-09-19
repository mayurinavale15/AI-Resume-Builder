import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardCards from "../../components/Dashboard/DashboardCards";
import RecentResumes from "../../components/Dashboard/RecentResumes";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Welcome, Mayuri 👋
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
          + Create Resume
        </button>
      </div>

      <DashboardCards />

      <RecentResumes />

    </DashboardLayout>
  );
}

export default Dashboard;
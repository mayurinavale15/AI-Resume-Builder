import { useEffect } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardCards from "../../components/Dashboard/DashboardCards";
import RecentResumes from "../../components/Dashboard/RecentResumes";
import api from "../../services/api";

function Dashboard() {

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await api.get("/resumes", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("My Resumes:", response.data);
      } catch (error) {
        console.error("Fetch Resumes Error:", error);
      }
    };

    fetchResumes();
  }, []);

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
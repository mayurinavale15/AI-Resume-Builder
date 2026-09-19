import StatCard from "./StatCard";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

      <StatCard title="Total Resumes" value="05" />

      <StatCard title="ATS Score" value="92%" />

      <StatCard title="Downloads" value="18" />

      <StatCard title="Templates" value="08" />

    </div>
  );
}

export default DashboardCards;
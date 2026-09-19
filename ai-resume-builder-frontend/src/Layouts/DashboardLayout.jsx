function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">

      <aside className="w-64 bg-slate-900 text-white p-5">
        <h2 className="text-2xl font-bold">
          AI Resume
        </h2>

        <ul className="mt-8 space-y-4">
          <li>Dashboard</li>
          <li>My Resumes</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;
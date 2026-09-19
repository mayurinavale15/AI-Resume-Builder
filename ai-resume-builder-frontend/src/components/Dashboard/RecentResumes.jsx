function RecentResumes() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Recent Resumes
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Resume Name</th>
            <th className="text-left py-2">Template</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="py-3">Frontend Resume</td>
            <td>Modern</td>
            <td className="text-green-600">Completed</td>
          </tr>

          <tr className="border-b">
            <td className="py-3">Backend Resume</td>
            <td>Professional</td>
            <td className="text-yellow-600">Draft</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default RecentResumes;
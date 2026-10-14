
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

function MyResumes() {
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  // Fetch all resumes
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/resumes", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        setResumes(response.data.resumes || []);
      } catch (err) {
        console.error("Fetch Resumes Error:", err);

        setError(
          err.response?.data?.message ||
            "Failed to load resumes. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  // Delete resume
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      const token = localStorage.getItem("token");

      await api.delete("/resumes/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setResumes((prevResumes) =>
        prevResumes.filter((resume) => resume._id !== id)
      );

      toast.success("Resume deleted successfully!");
    } catch (err) {
      console.error("Delete Resume Error:", err);

      toast.error(
        err.response?.data?.message || "Failed to delete resume."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // Loading state
  if (loading) {
    return <p className="p-6 text-gray-600">Loading resumes...</p>;
  }

  // Error state
  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  return (
    <div className="p-6">
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Resumes
          </h1>

          <p className="text-gray-600 mt-2">
            Manage all your saved resumes in one place.
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
          Total: {resumes.length}
        </span>
      </div>

      {/* Resume Cards */}
      {resumes.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">
            No resumes found
          </h2>

          <p className="text-gray-500">
            Your saved resumes will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {resume.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {resume.fullName || "Name not added"}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {resume.email || "Email not added"}
              </p>

              <p className="text-gray-400 text-xs mt-4">
                Created:{" "}
                {resume.createdAt
                  ? new Date(resume.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>

              {/* Edit Button */}
              <button
                type="button"
                onClick={() =>
                  navigate("/edit-resume/" + resume._id)
                }
                className="mt-5 mr-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                type="button"
                onClick={() => handleDelete(resume._id)}
                disabled={deletingId === resume._id}
                className="mt-5 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingId === resume._id
                  ? "Deleting..."
                  : "Delete"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyResumes;

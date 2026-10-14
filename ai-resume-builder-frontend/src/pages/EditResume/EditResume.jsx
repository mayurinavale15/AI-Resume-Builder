
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function EditResume() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    skills: "",
  });

  // Load existing resume
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/resumes", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const resume = response.data.resumes.find(
          (item) => item._id === id
        );

        if (!resume) {
          toast.error("Resume not found");
          navigate("/my-resumes");
          return;
        }

        setFormData({
          title: resume.title || "",
          fullName: resume.fullName || "",
          email: resume.email || "",
          phone: resume.phone || "",
          location: resume.location || "",
          summary: resume.summary || "",
          skills: (resume.skills || []).join(", "),
        });
      } catch (error) {
        console.error("Fetch Resume Error:", error);
        toast.error("Failed to load resume");
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id, navigate]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save updated resume
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      await api.patch(
        "/resumes/" + id,
        {
          ...formData,
          skills: formData.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      toast.success("Resume updated successfully!");
      navigate("/my-resumes");
    } catch (error) {
      console.error("Update Resume Error:", error);
      toast.error(
        error.response?.data?.message || "Failed to update resume"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="p-6">Loading resume...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Edit Resume</h1>

      <p className="text-gray-600 mb-6">
        Update your resume information below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl shadow-sm p-6 space-y-5"
      >
        <div>
          <label className="block font-medium mb-2">
            Resume Title
          </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Full Name
          </label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Professional Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Skills
          </label>
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB"
            className="w-full border rounded-lg p-3"
          />
          <p className="text-gray-500 text-sm mt-1">
            Separate skills with commas.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/my-resumes")}
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditResume;


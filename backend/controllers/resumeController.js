import Resume from "../models/Resume.js";

// ================= CREATE RESUME =================

export const createResume = async (req, res) => {
  try {
    // 1. Get resume data from request body
    const {
      title,
      fullName,
      email,
      phone,
      location,
      summary,
      skills,
      education,
      experience,
      projects,
      certifications,
      template,
    } = req.body;

    // 2. Validate title
    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Resume title is required",
      });
    }

    // 3. Create resume in database
    const resume = await Resume.create({
      user: req.user.userId,
      title,
      fullName,
      email,
      phone,
      location,
      summary,
      skills,
      education,
      experience,
      projects,
      certifications,
      template,
    });

    // 4. Send success response
    return res.status(201).json({
      success: true,
      message: "Resume created successfully",
      resume,
    });
  } catch (error) {
    console.error("Create Resume Error:", error.message);
    console.error("error details:error");
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create resume",
    });
  }
};


// ================= GET MY RESUMES =================

export const getMyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.user.userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: resumes.length,
      resumes,
    });
  } catch (error) {
    console.error("Get My Resumes Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch resumes",
    });
  }
};

// ================= UPDATE RESUME =================

export const updateResume = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedResume = await Resume.findOneAndUpdate(
      {
        _id: id,
        user: req.user.userId,
      },
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      resume: updatedResume,
    });
  } catch (error) {
    console.error("Update Resume Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to update resume",
    });
  }
};

// ================= DELETE RESUME =================

export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedResume = await Resume.findOneAndDelete({
      _id: id,
      user: req.user.userId,
    });

    if (!deletedResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    console.error("Delete Resume Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to delete resume",
    });
  }
};
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    // Resume कोणत्या user चा आहे
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Resume title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Personal Information
    fullName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    summary: {
      type: String,
      trim: true,
    },

    // Skills
    skills: {
      type: [String],
      default: [],
    },

    // Education
    education: {
      type: [Object],
      default: [],
    },

    // Work Experience
    experience: {
      type: [Object],
      default: [],
    },

    // Projects
    projects: {
      type: [Object],
      default: [],
    },

    // Certifications
    certifications: {
      type: [String],
      default: [],
    },

    // Resume Template
    template: {
      type: String,
      default: "template1",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);
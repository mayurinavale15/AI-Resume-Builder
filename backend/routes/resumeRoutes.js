import express from "express";

import {
  createResume,
  getMyResumes,
  updateResume,
  deleteResume,
} from "../controllers/resumeController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Resume
router.post("/", authMiddleware, createResume);

// Get My Resumes
router.get("/", authMiddleware, getMyResumes);

// Update Resume
router.patch("/:id", authMiddleware, updateResume);

// Delete Resume
router.delete("/:id", authMiddleware, deleteResume);

export default router;
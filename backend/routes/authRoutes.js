import express from "express";
import {
    registerUser ,
    loginUser,
     getProfile,
    } from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Register user
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Protected Route
router.get("/profile", authMiddleware, getProfile);

export default router;
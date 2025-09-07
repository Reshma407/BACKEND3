// routes/auth.route.js

import { Router } from "express";
import {
  createUser,
  login,
  getMyProfile,
} from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

// Register a new user
router.post("/register", createUser);

// Login user
router.post("/login", login);

// Get current user profile (protected route)
router.get("/me", auth, getMyProfile);

export default router;

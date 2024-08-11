import express from "express";
import {
  getUser,
  getDashboardStats,
  getRecruits,
} from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/recruits", getRecruits);
router.get("/dashboard", getDashboardStats);

export default router;

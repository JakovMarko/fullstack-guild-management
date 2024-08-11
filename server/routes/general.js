import express from "express";
import {
  getUser,
  getDashboardStats,
  getPendingRecruits,
  putRejectRecruits,
} from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/pendingRecruits", getPendingRecruits);
router.put("/rejectRecruits", putRejectRecruits);
router.get("/dashboard", getDashboardStats);

export default router;

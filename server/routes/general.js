import express from "express";
import {
  getUser,
  getDashboardStats,
  getPendingRecruits,
  getContactedRecruits,
  getRejectedRecruits,
  putRejectRecruits,
  putContactRecruits,
} from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/pendingRecruits", getPendingRecruits);
router.get("/rejectedRecruits", getRejectedRecruits);
router.get("/contactedRecruits", getContactedRecruits);

router.put("/rejectRecruits", putRejectRecruits);
router.put("/contactedRecruits", putContactRecruits);

router.get("/dashboard", getDashboardStats);

export default router;

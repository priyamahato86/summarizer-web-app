import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  createSummary,
  getSummaries,
  deleteSummary,
} from "../controllers/summaryController.js";

const router = express.Router();

router.post("/", verifyToken, createSummary);
router.get("/", verifyToken, getSummaries);
router.delete("/:id", verifyToken, deleteSummary);

export default router;

import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/").post(protect, createTask).get(protect, getTasks);
router.get("/", protect, getTasks);

export default router;
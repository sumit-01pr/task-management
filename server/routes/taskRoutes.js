import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
   getTaskById,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/")
  .post(protect, createTask)
  .get(protect, getTasks);

router.route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

router.patch("/:id/status", protect, toggleTaskStatus);

export default router;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { protect }
from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());

app.use(express.json());


// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Management API Running Successfully",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});
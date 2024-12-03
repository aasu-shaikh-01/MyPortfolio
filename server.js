import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConntection.js";
import cors from "cors";
import userRouter from "./routers/messageRouter.js";
import path from "path";
import { fileURLToPath } from "url"; // For ES Modules

// Initialize dotenv
// dotenv.config({ path: "./config/config.env" });
dotenv.config();

// Resolve __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Database Connection
dbConnection();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these methods
  })
);

// Static Files
app.use(express.static(path.join(__dirname, "./client/dist")));

// API Routes
app.use("/api/v1/message", userRouter);

// Serve React Frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// Start Server
app.listen(process.env.PORT || 8080, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});

import express from "express";
import { messageController } from "../controllers/messageController.js";
const router = express();

router.post("/send", messageController);
export default router;

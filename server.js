import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConntection.js";
import cors from "cors";
import userRouter from "./routers/messageRouter.js";

const app = express();
dotenv.config();
dbConnection();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/v1/message", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on port ${process.env.PORT}`);
});
app.use(cors());

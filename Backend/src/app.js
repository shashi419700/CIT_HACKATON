import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { dbConnection } from "./database/db.Connection.js";
import authRoutes from "./router/authRoutes.js";
import sosRoutes from "./router/sosRoutes.js";
const app = express();
config({ path: "./config.env" });

app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.1.6:5000/api"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api", sosRoutes);




dbConnection();

export default app;

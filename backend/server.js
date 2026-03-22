import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
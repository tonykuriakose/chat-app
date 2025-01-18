import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "../db/connectToMongoDB.js";

dotenv.config();
connectToMongoDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

const PORT = 5500;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});






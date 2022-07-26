import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => console.error(err));
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
// error middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
}); // error handling



app.listen(8000, () => {
  connect();
  console.log("Server on");
});
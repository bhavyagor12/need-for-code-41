import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import teamRoutes from "./routes/team.js";
import evaluationRoutes from "./routes/evaluation.js";
import  Cors  from "cors";
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
app.use(Cors({origin: '*'}));

app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/evaluation", evaluationRoutes);

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

app.get("/", (req, res) => {
  res.send("hello");
})


app.listen(8000, () => {
  connect();
  console.log("Server on");
});
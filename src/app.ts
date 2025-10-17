import express from "express";
import cors from "cors";
import healthCheckRouter from "./modules/healthcheck/healtcheck.route";
import authRouter from "./modules/auth/auth.route";
import usersRouter from "./modules/users/users.route";
import coursesRouter from "./modules/courses/course.route";

const app = express();
app.use(express.json());
app.use(cors());

// Healtcheck
app.use("/api/v1/healthcheck", healthCheckRouter);

// Auth
app.use("/api/v1/auth", authRouter);

// Users
app.use("/api/v1/users", usersRouter);

// Products
app.use("/api/v1/courses", coursesRouter);

app.get("/", (req, res) => {
  res.send("API is runnding");
});

export default app;

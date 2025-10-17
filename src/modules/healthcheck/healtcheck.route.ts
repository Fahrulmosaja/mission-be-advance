import { Router } from "express";
import healthCheckController from "./healthcheck.controller";

const router = Router();

router.get("/", healthCheckController.healthCheck);

export default router;

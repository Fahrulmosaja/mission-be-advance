import { Router } from "express";
import coursesController from "./courses.controller";

const router = Router();

router.post("/", coursesController.create);
router.get("/", coursesController.findAll);
router.get("/:id", coursesController.findOne);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.deleted);
export default router;

import { Router } from "express";
import usersController from "./users.controller";

const router = Router();

router.get("/", usersController.findAll);
router.get("/:id", usersController.findOne);
router.post("/:id", usersController.update);
router.delete("/:id", usersController.deletd);
export default router;

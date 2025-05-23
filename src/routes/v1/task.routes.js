import express from "express";
import { deleteTask, myTask, newTask, updateTask } from "../../controllers/task.controller.js";
import { isAuthenticated } from "../../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/new",isAuthenticated, newTask)
router.get("/my",isAuthenticated, myTask)
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

export default router;
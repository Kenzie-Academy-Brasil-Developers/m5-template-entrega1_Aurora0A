import { Router } from "express";
import { TaskController } from "../controllers/task.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { taskCreateSchema, taskSchema } from "../schema/task.schema";
import { ValidateTaksId } from "../middlewares/validateTaskId.middleware";
import { ValidateCategoryId } from "../middlewares/validateCategoryId.middleware";

export const taskRoute = Router();

const taskController = new TaskController();

taskRoute.post("/", ValidateBody.execute(taskCreateSchema), taskController.create);
taskRoute.get("/", taskController.findMany);
taskRoute.use("/:id", ValidateTaksId);
taskRoute.get("/:id", taskController.findOne);
taskRoute.patch("/:id", ValidateCategoryId, ValidateBody.execute(taskSchema), taskController.update);
taskRoute.delete("/:id", taskController.delete);
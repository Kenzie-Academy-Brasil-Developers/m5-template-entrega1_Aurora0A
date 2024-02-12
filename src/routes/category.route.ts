import { Router } from "express";
import { CategoryController } from "../controllers/category.controlers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { categorySchema } from "../schema/category.schema";
import { ValidateCategoryId } from "../middlewares/validateCategoryId.middleware";

export const categoryRoute = Router();

const categoryController = new CategoryController();

categoryRoute.post("/", ValidateBody.execute(categorySchema), categoryController.create);
categoryRoute.delete("/:id", ValidateCategoryId, categoryController.delete);
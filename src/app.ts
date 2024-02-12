// import "reflect-metadata";
import express, { json } from "express";
import helmet from "helmet";
import { HandleErros } from "./middlewares/handleErrors.middleware";
import "express-async-errors";
import { categoryRoute } from "./routes/category.route";
import { taskRoute } from "./routes/task.route";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/categories", categoryRoute);
app.use("/tasks", taskRoute);

app.use(HandleErros.execute);
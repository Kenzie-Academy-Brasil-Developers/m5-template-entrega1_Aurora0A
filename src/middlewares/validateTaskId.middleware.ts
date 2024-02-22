import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appErrors";

export const ValidateTaksId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;

    const task = await prisma.task.findFirst({ where: { id: Number(id) } });

    if (!task) {
        throw new AppError(404, "Task not found")
    }

    if(task.categoryId != req.body.categoryId){
        throw new AppError(404, "Category not found")
    }

    res.locals.task = task;

    return next();
}
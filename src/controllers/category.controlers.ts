import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";

export class CategoryController{
    categoryServices = new CategoryServices();
    async create(req: Request, res: Response){
        const response = await this.categoryServices.create(req.body);

        return res.status(201).json(response);
    }

    async delete(req: Request, res: Response){
        await this.categoryServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}
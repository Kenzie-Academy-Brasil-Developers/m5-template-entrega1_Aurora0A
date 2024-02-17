import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";

export class CategoryController{
    private categoryServices = new CategoryServices();
    public create = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.categoryServices.create(req.body);

        return res.status(201).json(response);
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        await this.categoryServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}
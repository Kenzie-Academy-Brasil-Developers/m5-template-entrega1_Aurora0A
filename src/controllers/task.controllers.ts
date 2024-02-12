import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";

export class TaskController{
    taskServices = new TaskServices();
    async create(req: Request, res: Response){
        const response = await this.taskServices.create(req.body);

        res.status(201).json(response);
    }

    async findMany(req: Request, res: Response){
        const response = await this.taskServices.findMany();

        return res.status(200).json(response);
    }

    async findOne(req: Request, res: Response){
        const response = await this.taskServices.findOne(Number(req.params.id));

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response){
        const response = await this.taskServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }
    
    async delete(req: Request, res: Response){
        await this.taskServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}
import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";

export class TaskController{
    private taskServices = new TaskServices();
    public create = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.taskServices.create(req.body);

        return res.status(201).json(response);
    }

    public findMany = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.taskServices.findMany();

        return res.status(200).json(response);
    }

    public findOne = async (req: Request, res: Response): Promise<Response> =>{
        const response = await this.taskServices.findOne(Number(req.params.id));

        return res.status(200).json(response);
    }

    public update = async (req: Request, res: Response): Promise<Response> =>{
        const response = await this.taskServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }
    
    public delete = async (req: Request, res: Response): Promise<Response> =>{
        await this.taskServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}
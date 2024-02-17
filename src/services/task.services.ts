import { TTaskCreateSchema, TTaskSchema, TTaskUpdateSchema, taskSchema } from "../schema/task.schema";
import { prisma } from "../database/prisma";

export class TaskServices{
    public create = async (body: TTaskCreateSchema): Promise<TTaskSchema> => {
        const data = await prisma.task.create({ data: body });

        return taskSchema.parse(data);
    }

    public findMany = async (): Promise<TTaskSchema[]> => {
        const data = await prisma.task.findMany();

        return data;
    }

    public findOne = async(id: number): Promise<TTaskSchema> => {
        const data = await prisma.task.findFirst({ where: { id } });

        return  taskSchema.parse(data) as TTaskSchema;
    }

    public update = async(id: number, body: TTaskUpdateSchema): Promise<TTaskSchema> => {
        const data = await prisma.task.update({ where: { id }, data: body });

        return  taskSchema.parse(data);
    }

    public delete = async(id: number): Promise<void> => {
        await prisma.task.delete({ where: { id : id } });
    }
}
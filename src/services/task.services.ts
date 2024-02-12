import { TTaskCreateSchema, TTaskSchema, TTaskUpdateSchema } from "../schema/task.schema";
import { prisma } from "../database/prisma";

export class TaskServices{
    async create(body: TTaskCreateSchema): Promise<TTaskSchema>{
        const data = await prisma.task.create({ data: body });

        return data;
    }

    async findMany(): Promise<TTaskSchema[]>{
        const data = await prisma.task.findMany();

        return data;
    }

    async findOne(id: number): Promise<TTaskSchema>{
        const data = await prisma.task.findFirst({ where: { id } });

        return data as TTaskSchema;
    }

    async update(id: number, body: TTaskUpdateSchema): Promise<TTaskSchema>{
        const data = await prisma.task.update({ where: { id }, data: body });

        return data;
    }

    async delete(id: number): Promise<void>{
        await prisma.task.delete({ where: { id } });
    }
}
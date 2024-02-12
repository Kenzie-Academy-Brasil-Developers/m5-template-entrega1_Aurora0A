import { prisma } from "../database/prisma";
import { TCategoryCreateSchema, TCategorySchema } from "../schema/category.schema";

export class CategoryServices{
    async create(name: TCategoryCreateSchema): Promise<TCategorySchema>{
        const data = await prisma.category.create({ data: name });

        return data;
    }

    async delete(id: number): Promise<void>{
        await prisma.category.delete({ where: { id } });
    }
}
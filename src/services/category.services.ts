import { prisma } from "../database/prisma";
import { TCategoryCreateSchema, TCategorySchema, categorySchema } from "../schema/category.schema";

export class CategoryServices{
    public create = async (name: TCategoryCreateSchema): Promise<TCategorySchema> => {
        const data = await prisma.category.create({ data: name });

        return  categorySchema.parse(data);
    }

    public delete = async (id: number): Promise<void> => {
        await prisma.category.delete({ where: { id } });
    }
}
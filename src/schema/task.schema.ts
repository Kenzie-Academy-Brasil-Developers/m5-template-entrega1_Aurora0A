import { z } from "zod";

export const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    content: z.string().min(1),
    finished: z.boolean(),
    categoryId: z.number().positive().or(z.null())
});

export const taskCreateSchema = taskSchema.omit({ id: true, finished: true });
export const taskUpdateSchema = taskSchema.omit({ id: true }).partial();

export type TTaskSchema = z.infer<typeof taskSchema>;
export type TTaskCreateSchema = z.infer<typeof taskCreateSchema>;
export type TTaskUpdateSchema = z.infer<typeof taskUpdateSchema>;
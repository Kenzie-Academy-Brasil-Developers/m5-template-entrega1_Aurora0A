import { z } from "zod";

export const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
});

export const categoryCreateSchema = categorySchema.omit({ id: true });

export type TCategorySchema = z.infer<typeof categorySchema>;
export type TCategoryCreateSchema = z.infer<typeof categoryCreateSchema>;
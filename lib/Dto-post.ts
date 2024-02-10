
import {z} from "zod";

export const PostSchema = z.object({
    author: z.string(),
    description: z.string().nullable(),
    image: z.string().url().nullable(),
    date: z.date(),
});

export type DtoPost = z.infer<typeof PostSchema>;
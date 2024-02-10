import {z} from "zod";

export const UserSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    date: z.date(),
});

export type DtoUser = z.infer<typeof UserSchema>;
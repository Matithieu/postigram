import {z} from "zod";

export const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(31).regex(new RegExp("/^[a-z0-9_-]+$/")),
});

export const UserSchemaWithId =  z.object({
    id:z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(31).regex(new RegExp("/^[a-z0-9_-]+$/")),
});

export type DtoUser = z.infer<typeof UserSchema>;
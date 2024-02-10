"use server"

import {db} from "@/lib/config-db";
import {Post} from "@/lib/schema";
import { PgSelectBuilder } from "drizzle-orm/pg-core";


export type DtoPost =  {
    author: string | null 
    description: string | null
    image: string | null
    date: Date | null
}

export default async function fetchPost() {

    const data = await db.select({name:Post.name,author:Post.author,description:Post.description,image:Post.image_url,date:Post.createdAt}).from(Post);
    console.log(data);
        const result : DtoPost[] = data;
        console.log("result",result);
        return result;
    throw new Error("the variable that fetch data from db is null (data)");
    
    
}
"use server"

import {db} from "@/lib/config-db";
import {Post} from "@/lib/schema";
import {z} from "zod";
import { PostSchema } from "@/lib/Dto-post";

const postArraySchema  = z.array(PostSchema);

export default async function fetchPost() {

    const data = await db.select({name:Post.name,author:Post.author,description:Post.description,image:Post.image_url,date:Post.createdAt}).from(Post);
    console.log(data);
    const result = postArraySchema.parse(data);
    if(result){
        return result;
    }
    else{
        throw new Error("the variable that fetch data from db is null (data)");
    }
   
    
    
}
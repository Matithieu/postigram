"use server"

import {db} from "@/lib/config-db";
import {Post} from "@/lib/schema";
import {desc} from "drizzle-orm";


export async function pagination(itemPerPage:number, pageNumber:number) {
    if(itemPerPage < 0) {
        throw new Error("itemPerPage can't be negative value");
    }
    const begin = (pageNumber - 1) * itemPerPage;
    const end =  pageNumber * itemPerPage;
    const result =  await db.select().from(Post).orderBy(desc(Post.createdAt))
                        .limit(end)
                        .offset(begin);


    return result;

}
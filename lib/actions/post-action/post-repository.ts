"use server";
import { validateRequest } from "@/lib/auth";
import { db } from "@/lib/config-db";
import { PostSchema } from "@/lib/dto-post";
import { postTable } from "@/lib/schema";
import type { PutBlobResult } from "@vercel/blob";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
const postArraySchema = z.array(PostSchema);

export async function fetchPost() {
  const data = await db
    .select({
      name: postTable.name,
      author: postTable.author,
      description: postTable.description,
      image: postTable.image_url,
      date: postTable.createdAt,
    })
    .from(postTable);
  console.log(data);
  const result = postArraySchema.parse(data);
  if (result) {
    return result;
  } else {
    throw new Error("the variable that fetch data from db is null (data)");
  }
}

export async function persistPost(
  title: string,
  description: string,
  image: string
) {
  const { user } = await validateRequest();
  if (user) {
    await db
      .insert(postTable)
      .values({
        author: user.username,
        name: title,
        description: description,
        image_url: image,
      });
  } else {
    throw new Error("veuillez vous connecter");
  }
}

export async function handleForm(formData: FormData) {
  const rawFormData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    file: formData.get("file") as File,
  };
  const { user } = await validateRequest();
  if (user) {
    const image_url = await persistImage(rawFormData.file);
    await persistPost(rawFormData.title, rawFormData.description, image_url);
  }
}

export async function persistImage(file: File) {
  const base = "http://localhost:3000";
  const route = new URL(`/api/upload?filename=${file.name}`, base);
  const response = await fetch(route, {
    method: "POST",
    body: file,
  });
  console.log(response);
  const blob = (await response.json()) as PutBlobResult;

  return blob.url;
}

export async function setPostImageUrlById(id: number, url: string) {
  await db
    .update(postTable)
    .set({ id: id })
    .where(eq(postTable.image_url, url));
}

export async function pagination(itemPerPage: number, pageNumber: number) {
  if (itemPerPage < 0) {
    throw new Error("itemPerPage can't be negative value");
  }
  const begin = (pageNumber - 1) * itemPerPage;
  const end = pageNumber * itemPerPage;
  const result = await db
    .select()
    .from(postTable)
    .orderBy(desc(postTable.createdAt))
    .limit(end)
    .offset(begin);

  return result;
}

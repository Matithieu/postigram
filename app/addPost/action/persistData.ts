
"use server"

import {db} from "@/lib/config-db";
import {Post} from "@/lib/schema";
export async function persistPost(formData: FormData) {
  const rawFormData = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
  };
  // Traitement supplémentaire avec les données du formulaire
  console.log(rawFormData);
  await db.insert(Post).values({name:rawFormData.title,description:rawFormData.description});
}

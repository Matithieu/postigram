"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { persistPost } from '@/lib/actions/post-action/post-repository';
import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';


export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const router = useRouter();
  

 async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    


          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/api/upload?filename=${file.name}`,
            {
              method: 'POST',
              body: file,
            },
          );

          const newBlob = (await response.json()) as PutBlobResult;
          setBlob(newBlob);
          
          

          
    console.log("Submitted");
    event.preventDefault();
    console.log("Post created");
    router.push("/");
    
    
    
  }
  const image_url = blob?.url as string
 

  return (
    <div className="flex justify-center items-center m-20">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Ajouter un post</CardTitle>
          <CardDescription>Entrez les informations du post</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={persistPost} >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input name="title"
                  id="title"
                  placeholder="Title"
                  required
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Contenu</Label>
                <Textarea
                  id="content"
                  name="description"
                  required
                  onChange={(event) => setContent(event.target.value)}
                />
              </div>
              <input name="file" ref={inputFileRef} type="file" required />
              <input type="hidden" name="userId" value={userId} />
              <Button className="w-full" type="submit">
                Ajouter
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

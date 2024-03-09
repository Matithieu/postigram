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
import { handleForm } from "@/lib/actions/post-action/post-repository";
import { useRef, useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex justify-center items-center m-20">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Ajouter un post</CardTitle>
          <CardDescription>Entrez les informations du post</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleForm}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  name="title"
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

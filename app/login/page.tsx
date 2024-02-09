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
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("Submitted");
    event.preventDefault();
    if (email == "email@email.com" && password == "password") {
      console.log("Logged in");
      router.push("/");
    }
  }

  return (
    <div className="flex justify-center items-center m-20">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Entrez vos identifiants</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <Button className="w-full" type="submit">
                {" "}
                Login
              </Button>
            </div>
          </form>{" "}
        </CardContent>
      </Card>
    </div>
  );
}

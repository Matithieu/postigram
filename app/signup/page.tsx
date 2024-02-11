import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/actions/user-action/user-repository";
import { validateRequest } from "@/lib/auth";
import { Form } from "@/lib/form";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <>
      <h1>Create an account</h1>
      <Form action={signup}>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>
              Enter your email to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="relative space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <Button className="w-full">Register</Button>
          </CardContent>
        </Card>
      </Form>
      <Link href="/login">Sign in</Link>
    </>
  );
}

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
import { login } from "@/lib/actions/user-action/user-repository";
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
      <div className="mt-40">
        <Form action={login}>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
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
                <Input
                  id="password"
                  name="password"
                  required
                  type="password"
                  placeholder="********"
                />
              </div>
              <Button className="w-full">Let&apos;s post !</Button>
            </CardContent>
          </Card>
        </Form>
        <div className="mt-4 text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

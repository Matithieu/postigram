import Link from "next/link";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Form } from "@/lib/form";
import {signup} from "@/lib/actions/user-action/user-repository";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { persistPost } from '@/lib/actions/post-action/post-repository';


export default async function Page() {
	const { user } = await validateRequest();
	if (user) {
		return redirect("/");
	}
	return (
		<>
			<h1>Create an account</h1>
			<Form action={signup}>
				<Label htmlFor="email">Email</Label>
				<Input name="email" id="email" />
				<br />
				<Label htmlFor="password">Password</Label>
				<Input type="password" name="password" id="password" />
				<br />
				<button>Continue</button>
			</Form>
			<Link href="/login">Sign in</Link>
		</>
	);
}


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
import { useFormState } from "react-dom";

export interface ActionResult {
	error: string | null;
}

export  function Form({
	children,
	action
}: {
	children: React.ReactNode;
	action: (prevState: any, formData: FormData) => Promise<ActionResult>;
}) {
	const [state, formAction] = useFormState(action, {
		error: null
	});
	return (
		<form action={formAction}>
			{children}
			<p>{state.error}</p>
		</form>
	);
}

export interface ActionResult {
	error: string | null;
}



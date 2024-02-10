"use server";
import {sql} from "drizzle-orm";
import { db } from "@/lib/config-db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UserSchema, UserSchemaWithId } from "@/lib/dto-user";
import { userTable } from "@/lib/schema";
import { ActionResult } from "@/lib/form";
import { generateId } from "lucia";

export async function login(_: any, formData: FormData):Promise<ActionResult>{
	const email = formData.get("email") as string;
	const password = formData.get("password") as string; // you need to pass schema
   
    try{
        UserSchema.parse({email:email,password:password});
        const existingUser = UserSchemaWithId.parse(db.select().from(userTable).where(sql`${userTable.email} = ${email}`));
	    if (!existingUser) {
		    return {
			error: "Incorrect username or password" // User not found
 		    };
	    }
        const validPassword = await new Argon2id().verify(existingUser.password, password);
	    if (!validPassword) {
		    return {
			    error: "Incorrect username or password"
		    };
	    }
	    const session = await lucia.createSession(existingUser.id, {});
	    const sessionCookie = lucia.createSessionCookie(session.id);
	    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	    

    }
    catch(e){
        console.log("error",e);
    }
    return redirect("/");


    
}



export async function signup(_: any, formData: FormData): Promise<ActionResult> {
	
	const email = formData.get("email") as string;
	// username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
	// keep in mind some database (e.g. mysql) are case insensitive
    const password = formData.get("password") as string; // you need to pass schema
	console.log("email: ",email,"password:",password);
	
	try {
        //UserSchema.parse({email:email,password:password}); // verify if username password are correctly set
        const hashedPassword = await new Argon2id().hash(password);
		console.log(hashedPassword);
	    const userId = generateId(15);
		console.log(userId);

		await db.insert(userTable).values({id:userId,email:email,password:hashedPassword});

		const session = await lucia.createSession(userId, {});
		console.log("session: ",session);
		const sessionCookie = lucia.createSessionCookie(session.id);
		console.log(session.id);
		cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	} catch (e) {
		return {
			error: "An unknown error occurred"+e
		};
	}
	return redirect("/");
}


async function logout(): Promise<ActionResult> {
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}
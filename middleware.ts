"use server"

import { NextRequest } from 'next/server'
import { lucia } from "@/lib/auth";
// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/addPost',
}
 
export async function middleware(request: NextRequest) {
    let cookies = request.cookies;
    const idSessionKey = "auth_session";
    if(cookies.has(idSessionKey)){
        let session = cookies.get(idSessionKey)?.value as string;
        if(!session){
          return Response.json(
            { success: false, message: 'authentication failed' },
            { status: 401 }
          )
        }
    }
    else{
        return Response.json(
            { success: false, message: 'authentication failed' },
            { status: 401 }
          )
    }
}


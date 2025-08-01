import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        const session = await auth.api.getSession({
            headers: req.headers,
        })

        if(!session?.user.id){
            return NextResponse.json(
                { message: "Unauthorised, please log in"},
                { status: 401 }
            )
        }

        const chatHistory = await db.select().from(chats).where(eq(chats.userId, session.user.id))

        return NextResponse.json(
            chatHistory,
            { status: 200 }
        )
        
    } catch(error){
        return NextResponse.json(
            { message: "Error while getting history" },
            { status: 500 }
        )
    }
}
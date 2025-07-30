import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { user, videos } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
   try{
        const session = await auth.api.getSession({
            headers: req.headers
        })

        if(!session?.user.id){
            return NextResponse.json(
                { error: 'Unauthorized - Please log in' },
                { status: 401 }
            );
        }

        const userVideos = await db.select().from(videos).where(eq(videos.userId, session.user.id))

        return NextResponse.json({
            userVideos
        })
   } catch(error){
    return NextResponse.json(
        {error: error},
        {status: 500}
    )
   }
}
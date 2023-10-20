import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request, { params }: { params: { email: string } }) {
    const email = params.email
    try {
        const author = await prisma.user.findUnique(
            {where: {email}, 
            include: {Post: {orderBy: {updateAt: 'desc'}}}
        })
        return NextResponse.json(author)
    } catch (error) {
        console.log(error)
        return NextResponse.json('could not find author posts')
    }
}
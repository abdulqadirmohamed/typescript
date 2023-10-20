import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request,{ params }: { params: { id: string } }) {
    const id = params.id
    try {
        const post = await prisma.post.findUnique({where:{id}, include:{author:{select: {name: true}}}})
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        return NextResponse.json('Could not fetch post')
    }
    
    return NextResponse.json('h1')
}
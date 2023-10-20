import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = params.id
    try {
        const post = await prisma.post.findUnique({ where: { id }, include: { author: { select: { name: true } } } })
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        return NextResponse.json('Could not fetch post')
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { title, content, link, selectedCategory, imageUrl, publicId } = await req.json()
    const id = params.id

    try {
        const post = await prisma.post.update({
            where: { id },
            data: {
                title,
                content,
                link,
                imageUrl,
                publicId,
                catName: selectedCategory,
            }
        })
        return NextResponse.json(req)
    } catch (error) {
        return NextResponse.json({message: 'error editing post'})
    }
}

export async function DELETE (req: Request, {params}: {params: {id:string}}){
    const id = params.id
    try {
        const res = await prisma.post.delete({where: {id}})
        return NextResponse.json({message: 'Deleted!, your post seccessfully deleted!'}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'not post deleting'})
    }
}
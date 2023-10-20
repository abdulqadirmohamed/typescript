import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  
    const { title, content, link, selectedCategory, imageUrl, publicId } = await req.json()
    const authorEmail = 'cajiibxaaji02@gmail.com'
    if (!title || !content) {
        return NextResponse.json({ error: 'Title and content are required' }, { status: 500 })
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                link,
                imageUrl,
                publicId,
                catName: selectedCategory,
                authorEmail
            }
        })
        console.log('Post created')
        return NextResponse.json(newPost)
    } catch (error) {
        return NextResponse.json({ message: 'could not create post' })
    }
}

export async function GET() {
    try {
        const getPost = await prisma.post.findMany({
            include: { author: { select: { name: true } } },
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(getPost)
    } catch (error) {
        return NextResponse.json(error)
    }
}
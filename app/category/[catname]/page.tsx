import { TCategory } from '@/app/types'
import Categories from '@/components/Categories'
import { NextResponse } from 'next/server'
import React from 'react'

async function getPosts(catName: string): Promise<TCategory[] | null> {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${catName}`, {
            cache: 'no-store'
        })
        if (res.ok) {
            const category = await res.json()
            const posts = category.post
            console.log(posts)
            return posts
        }
    } catch (error) {
        console.log(error);
        // return NextResponse.json(error)
    }
    return null

}
const page = async ({ params }: { params: { catName: string } }) => {
    const category = params.catName
    const post = await getPosts(category)
    return (
        <div>
            <h1>Caterogy:</h1>
            <h1>{category}</h1>
        </div>
    )
}

export default page
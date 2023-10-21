import { TCategory } from '@/app/types'
import Categories from '@/components/Categories'
import { NextResponse } from 'next/server'
import React from 'react'

const getCategoryName = async (catName: string): Promise<TCategory[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${catName}`, {
            cache: 'no-store'
        })
        if (res.ok) {
            const categories = await res.json()
            const posts = categories.posts

            return posts
        }
    } catch (error) {
        console.log(error)
    }
    return null
}

const page = async ({ params }: { params: { catName: string } }) => {
    const category = params.catName
    const posts = await getCategoryName(category)
    return (
        <div>
            <h1>Hello</h1>
            <h1>{category}</h1>
        </div>
    )
}

export default page
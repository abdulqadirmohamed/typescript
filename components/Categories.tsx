import React from 'react'
import { TCategory } from '@/app/types'
import Link from 'next/link'
const getCategory = async (): Promise<TCategory[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`)
        if (res.ok) {
            const category = await res.json()
            return category
        }
    } catch (error) {
        console.log(error)
    }
    return null
}

const Categories = async () => {
    const categories = await getCategory()
    return (
        <div className='flex gap-4'>
            {categories?.map((category: TCategory) => (
                <Link className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md' href={`#`}>{category.catName}</Link>
            ))}
        </div>
    )
}

export default Categories
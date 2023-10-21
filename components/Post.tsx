import React from 'react'
import PostCards from './PostCards'
import { PostProps } from '@/types/types'
import { TPosts } from '@/app/types'



async function getPosts(): Promise<TPosts[] | null> {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`,{
            cache: 'no-store'
        })
        if (res.ok) {
            const posts = await res.json()
            return posts
        }
    } catch (error) {

    }
    return null

}


const Post = async () => {
    const posts = await getPosts()
    return (
        <div className='shadow-md p-4 grid grid-cols-2'>
            {posts?.map((post: TPosts) => (
                <PostCards key={post.id} {...post} />
            ))}
        </div>
    )
}

// <PostCards key={post.id} {...post} />
export default Post
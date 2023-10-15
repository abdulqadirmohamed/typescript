import React from 'react'
import PostCards from './PostCards'
import { PostProps } from '@/types/types'


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('Field to fetch data')
    }
    return res.json()
}


const Post = async () => {
    const data: PostProps[] = await getData()
    return (
        <div className='shadow-md p-4 grid grid-cols-2'>
            {data.map((post) => (
                <PostCards key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default Post
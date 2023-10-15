import React from 'react'
import { PostProps } from '@/types/types'

const PostCards = ({title, body}: PostProps) => {
    return (
        <div className='border-[1px] border-black p-5 m-4 text-left'>
            <h1 className='text-xl font-bold capitalize'>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostCards
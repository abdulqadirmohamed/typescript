import React from 'react'
import { TPosts } from '@/app/types'

const PostCards = ({ title, content, author, catName, createdAt }: TPosts) => {
    
    const dateOpject = new Date(createdAt)
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        year: 'numeric',
        day: 'numeric'
    }
    const formattedDate = dateOpject.toLocaleDateString('en-US', options)

    return (
        <div className='border-[1px] border-black p-5 m-4 text-left'>
            <div className='my-5 flex justify-between items-center'>
                <span className='font-bold text-xl'>{author.name}</span>
                <span>{formattedDate}</span>
            </div>
            <hr />
            <h1 className='text-xl my-4 font-bold capitalize'>{title}</h1>
            <p>{content}</p>
            <div className='my-10'>
                <span className='bg-red-500 mx-2 px-4 py-2 rounded-md'>{catName}</span>
            </div>
        </div>
    )
}

export default PostCards
'use client'
import React, { useState } from 'react'

type userType = {
    name: string,
    sessionID: number
}

const PostUseState = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState<userType | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name: username,
            sessionID: Math.random()
        })
    }
    return (
        <div className='w-1/3 mx-auto mt-24'>
            {user ? (`${user.name} logged`) : (
                <form action="">
                    <input type="text" className='border-2 p-2' placeholder='username' onChange={handleChange} />
                    <button onClick={handleClick} className='bg-green-500 p-2 border-2 ml-2'>Login</button>
                </form>
            )}
            {user?.name}
        </div>
    )
}

export default PostUseState
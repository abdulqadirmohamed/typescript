'use client'
import React from 'react'
import {signIn} from 'next-auth/react'

const SingIn = () => {
  return (
    <div  className='w-1/2 mx-auto flex flex-col justify-center gap-4'>
        <button onClick={()=> signIn('google')} className='bg-red-600 w-fit px-4 py-2 rounded-md'>Signin with Google</button>
        <button onClick={()=> signIn('github')} className='bg-yellow-500 w-fit text-white px-4 py-2 rounded-md'>Signin with Github</button>
    </div>
  )
}

export default SingIn
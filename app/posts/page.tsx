import SamplePost from '@/components/SamplePost'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await getServerSession(authOptions)
  if(!session){
    redirect('/signin')
  }
  return (
    <div className='w-1/3 mx-auto mt-24'>
        <SamplePost/>
    </div>
  )
}

export default page
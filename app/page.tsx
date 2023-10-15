import Post from '@/components/Post'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-1/2 mx-auto text-center'>
      <h1 className='text-3xl mb-24 mt-5'>Typescript</h1>
      <Post/>
    </div>
  )
}

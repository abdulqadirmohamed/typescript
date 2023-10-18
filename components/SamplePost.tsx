'use client'
import React from "react";

const SamplePost = () => {
const posts = [
  {id: 1, title: 'Post title 1', desc: 'Post description'},
  {id: 2, title: 'Post title 2', desc: 'Post description'},
]
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        alert('Search')
    }
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id:number) =>{
      alert(`Post ${id} has been deleted`)
    }
  return (
    <div>
      <form action="">
        <input onChange={inputHandler} type="text" placeholder="Search.." className="border-2 p-2" />
        <button onClick={handleClick} className="bg-green-500 p-2 border-2 ml-2">Search</button>
      </form>
      <div>
        {posts.map((post)=>(
          <div key={post.id} className="border-2 my-4 p-4">
            <h1 className="font-semibold">{post.title}</h1>
            <p>{post.desc}</p>
            <button onClick={(e)=>handleDelete(e, post.id)} className="bg-red-500 px-2 py-[1px] mt-2 rounded-md">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamplePost;

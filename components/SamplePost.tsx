'use client'
import React from "react";

const SamplePost = () => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        alert('Search')
    }
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }
  return (
    <div>
      <form action="">
        <input onChange={inputHandler} type="text" placeholder="Search.." className="border-2 p-2" />
        <button onClick={handleClick} className="bg-green-500 p-2 border-2 ml-2">Search</button>
      </form>
    </div>
  );
};

export default SamplePost;

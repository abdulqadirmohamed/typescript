'use client'
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { status } = useSession();
  return (
    <nav className="w-1/2 mx-auto flex justify-between items-center my-6">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/posts"}>Create Post</Link>
        {status === "authenticated" ? (
          <div>
            <button onClick={()=>signOut()} className="bg-red-500 px-4 py-2 rounded-md">Singout</button>
          </div>
        ) : (
          <Link className="bg-blue-500 px-4 py-2 rounded-md" href={"/signin"}>
            Signin
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;

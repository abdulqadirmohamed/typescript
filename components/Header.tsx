'use client'
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="w-1/2 mx-auto flex justify-between items-center my-6">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/posts"}>Create Post</Link>
        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
            <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded-md">Singout</button>
            <Image src={session?.user?.image || ''} alt="Profile Image" className="rounded-full" height={40} width={40}/>
          </div>
        ) : (
          <div>
            <Link className="bg-blue-500 px-4 py-2 rounded-md" href={"/signin"}>
              Signin
            </Link>
           
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

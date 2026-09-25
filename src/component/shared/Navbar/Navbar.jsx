"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import ReusableNav from "./ReusableNav";
import { authClient, useSession } from "@/app/lib/auth-client";
const Navbar = () => {
    const { data: session , isPending} = authClient.useSession()
    const user = session?.user
    return (
        <div>
            <nav className="sticky top-0 z-40 w-10/12 mx-auto border-b border-separator">
                <header className="relative flex h-16 items-center justify-between py-6">
                    {/* Left */}
                    <p className="font-bold">ACME</p>
                    {/* Center */}
                    <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                        <li><ReusableNav href="/">Home</ReusableNav></li>
                        <li><ReusableNav href="/about">About</ReusableNav></li>
                        <li><ReusableNav href="/career">Career</ReusableNav></li>
                        <li><ReusableNav href="/dashboard">Dashboard</ReusableNav></li>
                    </ul>
                    {/* Right */}
                    {isPending? <span className="loading loading-spinner loading-md"></span>
                    :user ?
                        (<Button onClick={async()=>{await authClient.signOut()}} className="rounded-sm bg-slate-700 text-white px-6" variant='primary'>Logout</Button>)
                        :(<div className='flex gap-2'>
                            <Image src='/assets/user.png' alt='profile-logo' width={40} height={40}></Image>
                            <Link href="/signin"><Button className="rounded-sm bg-slate-700 text-white px-6" variant='primary'>Login</Button></Link>
                        </div>)
                    }

                </header>
            </nav>
        </div>
    );
};

export default Navbar;
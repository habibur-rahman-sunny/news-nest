import {Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-10/12 mx-auto border-b border-separator">
                <header className="relative flex h-16 items-center justify-between py-6">
                    {/* Left */}
                    <p className="font-bold">ACME</p>
                    {/* Center */}
                    <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/career">Career</Link></li>
                    </ul>
                    {/* Right */}
                    <div className='flex gap-2'>
                        <Image src='/assets/user.png' alt='profile-logo' width={40} height={40}></Image>
                        <Link href="/signin"><Button className="rounded-sm bg-slate-700 text-white px-6" variant='primary'>Login</Button></Link>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
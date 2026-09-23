"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ReusableNav = ({href, children}) => {
    const pathname = usePathname()
    return (
        <div>
            <Link className={`${href===pathname? "bg-slate-700 text-white": "bg-white text-black"} p-1 rounded-sm`} href={href}>{children}</Link>
        </div>
    );
};

export default ReusableNav;
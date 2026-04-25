"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children,className}) => {

  const PathName = usePathname();
  console.log(PathName);
  const isActive =  href === PathName ;

  return (
       <Link href={href} className={` text-md p-2 rounded-md ${isActive ? 'border-2 border-purple-800': '' } ${className} `} > {children} </Link>
  );
};

export default NavLink;
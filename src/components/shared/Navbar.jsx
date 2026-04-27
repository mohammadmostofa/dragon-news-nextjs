import Link from 'next/link';
import React from 'react';
import userAvator from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './Navlink/NavLink';

const Navbar = () => {
  return (

    <div className='mx-auto container'>
<div className='flex justify-between items-center py-10'>
         
         {/* blank div to center ul items */}
         <div className=' w-30'></div>
         
         
          <ul className='flex justify-between items-center gap-4 space-x-6 '>

             <li> <NavLink href={'/'} >Home</NavLink> </li>
             <li> <NavLink href={'/about'} >About </NavLink> </li>
             <li> <NavLink href={'/career'}  >Career</NavLink> </li>

         </ul>

         <div className='flex justify-center items-center w-30 gap-4 '>
              <Image src={userAvator} width={60} height={60} alt='userAvator' className='mx-auto' ></Image>
              <button className='btn btn-primary px-6 bg-black text-white'> <Link href={'/login'} >Login</Link> </button>
         </div>

    </div>

    </div>
    
  );
};

export default Navbar;
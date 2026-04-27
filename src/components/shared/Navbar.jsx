"use client"
import Link from 'next/link';
import React from 'react';
import userAvator from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './Navlink/NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

  // use session to catch current session user details of login
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  console.log(user ,'seeeion')

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
             
                                   {/* <h3>{user?.name} </h3> */}
              {/* <Image src={user?.image} width={50} height={50} alt='userAvator' className='mx-auto' ></Image> */}
      
              { isPending ?  <p>Loading...</p>  : user ? <> <Image src={userAvator} width={50} height={50} alt='userAvator' className='mx-auto' ></Image>
              <button onClick={ async () => await authClient.signOut() } className='btn btn-error text-black font-bold'>LogOut</button>
            </>   : 
            
            <button className='btn btn-primary px-6 bg-black text-white'> <Link href={'/login'} >Login</Link> </button>

              }

       
         </div>

  
    </div>

    </div>
    
  );
};

export default Navbar;
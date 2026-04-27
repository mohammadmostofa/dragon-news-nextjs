"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
  const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <div className='flex flex-col justify-center items-start space-y-4 '>   

       <button onClick={handleGoogleSignIn} className='mt-5 w-full btn flex justify-center items-center text-center px-5  border-blue-500 text-blue-500 '>   
                   <FaGoogle />
                  <span>Login with Google</span>
         </button>

              <button className=' w-full btn flex justify-center text-center items-center px-5 border-blue-500 text-blue-500 '>    
                   <FaGithub />
                  <span>Login with Github</span>
         </button>

         <h1 className='font-bold text-black text-l pt-5 text-left'>Fine Us on</h1>

    
           <button className='mt-4 w-full btn flex justify-start items-center text-left px-4 py-8 space-x-3 m-0 '>   
                   <FaGoogle />  <span>Login with Google</span>
         </button>

           <button className=' w-full btn flex justify-start items-center text-left px-4 py-8 space-x-3 m-0 '>   
                   <FaGoogle />  <span>Login with Google</span>
         </button>

           <button className=' w-full btn flex justify-start items-center text-left px-4 py-8 space-x-3 m-0'>   
                   <FaGoogle />  <span>Login with Google</span>
         </button>

           <button className=' w-full btn flex justify-start items-center text-left px-4 py-8 space-x-3 m-0 '>   
                   <FaGoogle />  <span>Login with Google</span>
         </button>





         
    </div>
  );
};

export default RightSidebar;
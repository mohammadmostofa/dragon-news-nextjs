"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

  const {register,handleSubmit, watch ,formState:{errors}} = useForm();

  const [isShow,setIsShow] = useState(false) ;

  const handleLoginFun = async (data) => {
    const { data:res, error } = await authClient.signIn.email({
    email:data.email, // required
    password:data.password, // required
    rememberMe: true,
    callbackURL: "/",
    
});
   
console.log(res,error)

      if (error) {
         alert("Login Failed!", error);
       } else {
         alert("Login Successfully!", res);
       }
    
  } ;

  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
      
      <div className='py-6 px-6 rounded-xl bg-slate-200 shadow-md'>
      <h2 className='font-bold text-2xl pt-6 text-center'>Login your account</h2>


      <form action="" className='space-y-4' onSubmit={ handleSubmit(handleLoginFun) } >

        <fieldset className=" rounded-box flex flex-col justify-center p-4">
     {/* email and its label */}
        <label className="label mt-3 text-black text-[16px] font-bold">Email</label>
        <input  type="email"
         {...register("email" , {required:true})}
         className="inline p-2 capitalize bg-gray-300 mt-1 rounded-md"
         placeholder="Enter your email adress" />
         {errors.email && <span className='text-red-500'>email Field is required</span>}
        
        <fieldset className='relative flex flex-col'>

              {/*  password  and its label */}
        <label className="label mt-3 text-black text-[16px] font-bold ">Password </label>
        <input type= {isShow ? "text" : "password"}
         {...register("password", {required:true})}
         className="inline p-2 capitalize bg-gray-300 mt-1 rounded-md"
          placeholder="Enter your Password" />

          <span className='absolute right-2 bottom-3 cursor-pointer ' onClick={() => setIsShow(!isShow) } >
               { isShow ? <FaEye></FaEye> :<FaEyeSlash></FaEyeSlash> }
          </span>

        </fieldset>

          {errors.password && <span className='text-red-500'>password Field is required</span>}


      
        <button type='submit' className="btn  btn-neutral mt-5">Login</button>
           
          </fieldset>

        </form>    

         <p className='flex justify-center items-center font-semibold py-2 gap-2 capitalize '>Dont’t Have An Account ? 
             <Link className='text-red-500' href={'/register'} >Register</Link>
           </p>   

      </div>

    </div>
  );
};

export default LoginPage;
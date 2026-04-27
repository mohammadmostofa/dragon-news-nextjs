"use client"
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

  
    const {register,handleSubmit, watch ,formState:{errors}} = useForm();
  
  
    const handleRegisterFun = async (data) => {
      
      const {name,photo,email,password} = data ;
      // console.log(name,photo,email,password) ;

      const {data:res, error} = await authClient.signUp.email({

         name:name, // required
         email:email, // required
         password:password, // required
         image:photo,
         callbackURL: "/" ,
                
      })

      if (error) {
         alert("registration Failed!", error);
       } else {
         alert("registration Successfully!", res);
       }
      
    };

  return (
    
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
      
      <div className='py-6 px-6 rounded-xl bg-slate-200 shadow-md'>
      <h2 className='font-bold text-2xl pt-6 text-center'>Register your account</h2>


      <form action="" className='space-y-4' onSubmit={ handleSubmit(handleRegisterFun) } >

        <fieldset className=" w-full rounded-box flex flex-col justify-center p-4"> 
       {/* name */}
         <label className="label mt-3 text-black text-[16px] font-bold">Name</label>
        <input  type="text"
         {...register("name" , {required:true})}
         className="inline w-100 p-3 capitalize bg-gray-300 mt-1 rounded-md"
         placeholder="Enter your Name " />
         {errors.name && <span className='text-red-500'>Name Field is required</span>}


         {/* photo url */}

         
         <label className="label mt-3 text-black text-[16px] font-bold">Photo URL</label>
        <input  type="text"
         {...register("photo" , {required:true})}
         className="inline w-100 p-3 capitalize bg-gray-300 mt-1 rounded-md"
         placeholder="Enter your Name " />
         {errors.photo && <span className='text-red-500'>Photo Field is required</span>}



     {/* email and its label */}
        <label className="label mt-3 text-black text-[16px] font-bold">Email</label>
        <input  type="email"
         {...register("email" , {required:true})}
         className="inline w-100 p-3 capitalize bg-gray-300 mt-1 rounded-md"
         placeholder="Enter your email adress" />
         {errors.email && <span className='text-red-500'>Email Field is required</span>}
        

        {/*  password  and its label */}
        <label className="label mt-3 text-black text-[16px] font-bold">Password</label>
        <input type="password"
         {...register("password", {required:true})}
         className="inline w-100 p-3 capitalize bg-gray-300 mt-1 rounded-md"
          placeholder="Enter your Password" />
          {errors.password && <span className='text-red-500'>password Field is required</span>}
      
        <button type='submit' className="btn  btn-neutral mt-5">Register Now</button>
           
          </fieldset>

        </form>    

           

      </div>

    </div>

  );
};

export default RegisterPage;
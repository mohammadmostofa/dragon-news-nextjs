import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 text-center gap-4 py-8'>
            <Image className='mx-auto w-auto h-auto' src={Logo} width={300} height={200} alt='logo' />
            <p>Journalism Without Fear or Favour</p>
            <p> {format(new Date(), "EEE, MMM dd, yyyy")} </p>
    </div>
  );
};

export default Header;
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
             <h1 className='text-black font-bold text-5xl border-b-5 border-amber-600 py-4 '>Not Found Page</h1>
                 
                     <Link href={'/'} className='py-5'>
                         <button className='btn bg-gray-400'>Back to Home</button>
                     </Link>


     </div>

  );
};

export default NotFoundPage;
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreackingNews = () => {
  return (
    <div className='flex justify-between items-center  container mx-auto bg-gray-200 py-4 px-2'>
           <button className='btn bg-red-500 text-white font-bold'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100} > No news update waiting for news</Marquee>
    </div>
  );
};

export default BreackingNews;
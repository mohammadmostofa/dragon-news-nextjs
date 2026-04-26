
import React from 'react';

const AllNews = ({item}) => {
  return (
    <div className='border flex flex-col justify-center items-center gap-4'> 
                <h2 className='text-xl py-4'>{item.title}</h2>
    </div>
  );
};

export default AllNews;
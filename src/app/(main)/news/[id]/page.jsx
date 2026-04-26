import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { getNewsDetailsById } from '@/lib/data';

const NewsDetailspage = async ({params}) => {
  const {id} =  await params;
  console.log(id, "id")
   const news = await getNewsDetailsById(id);
   console.log(news, "news")
  return (
    <div>

      <div className='flex flex-col gap-4 shadow-sm  max-w-4xl mx-auto py-6 '>


         <div>

       <div className=" bg-base-100">
    {/* author */}
    <div className='flex justify-between items-center py-4 bg-gray-100 px-2 rounded-sm '>


               <div className='flex justify-center items-center space-x-4'>
                         <Image src={news.author?.img}  alt={news.author?.name} width={40} height={40} loading='eager' className='rounded-full' /> 

                         <div>
                                    <h4 className='font-bold text-black '> {news.author?.name} </h4>
                                    <h5>{news.author?.published_date}</h5>
                         </div>
               </div>

                <div className='flex justify-center items-center space-x-3'>
                       <BsBookmark className='text-xl' />
                       <CiShare2 className='text-xl' />
               </div>

    </div>
     </div>
     
     <div>
      <h2 className='text-black font-bold text-xl py-4 px-2'> {news.title} </h2>
     </div>
         
     
  <figure>
          <Image  src={news?.image_url} width={500}   height={400} alt={news.title} loading='eager' className='w-full px-2' />
  </figure>
     
     <p className='py-4 text-sm text-md font-semibold px-2'> {news?.details} </p>
</div>


   <div className='flex justify-between items-center px-2 py-3'>  
              <div className='flex justify-center items-center gap-4'>
                       <h5 className='flex justify-center items-center text-center gap-2'> <FaStar className='text-yellow-300'/> {news.rating?.number}</h5>
                         <h5 className='flex justify-center items-center gap-2'><FaEye />   {news.total_view} </h5>



              </div>

            <Link href={`/category/${news.category_id}`}> <button className='btn'> All news in this category </button> </Link>
   </div>

 </div>
      
    </div>
  );
};

export default NewsDetailspage;
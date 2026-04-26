import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({category , activeId }) => {
  return (
    
<div>   

            
           <ul className="flex flex-col justify-center items-center space-y-4 gap-y-5 mt-5  ">
              <li className={` ${activeId === category.category_id &&  ' bg-gray-200 text-black'} list-none w-full text-center`} >
                 
                  <Link className='block py-4 px-2' href={`/category/${category.category_id}`} > {category.category_name}  </Link>
                    
                   </li> 
           </ul>
           
        </div>

  );
};

export default LeftSidebar;
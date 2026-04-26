import React from 'react';
import Marquee from 'react-fast-marquee';

const News = [
  { "id": 1, "title": "Global leaders meet to discuss climate change action plans" },
  { "id": 2, "title": "Tech giants race to develop next-generation AI systems" },
  { "id": 3, "title": "Oil prices fluctuate amid ongoing geopolitical tensions" },
  { "id": 4, "title": "International space agencies plan new missions to Mars" },
  { "id": 5, "title": "Global economy shows signs of recovery after slowdown" },
  { "id": 6, "title": "Major breakthrough in cancer research announced by scientists" },
  { "id": 7, "title": "Cybersecurity threats increase as digital usage rises worldwide" },
  { "id": 8, "title": "Renewable energy adoption reaches record levels globally" },
  { "id": 9, "title": "World leaders call for peace amid rising regional conflicts" },
  { "id": 10, "title": "New innovations in electric vehicles reshape the auto industry" }
]

const BreackingNews = () => {
  return (
    <div className='flex justify-between items-center  container mx-auto bg-gray-200 py-4 px-2'>
           <button className='btn bg-red-500 text-white font-bold'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100} > 
               <h1 className='flex justify-between space-x-6 gap-4'>
                {
                News.map(N => <p className='text-center font-bold text-xl text-black' key={N.id}> {N.title} </p> )
               }
               </h1>
               </Marquee>
    </div>
  );
};

export default BreackingNews;
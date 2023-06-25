import React from 'react';
import { categories } from '../data/data.js';
import { LiaCopyrightSolid } from 'react-icons/lia'

const Category = () => {
  console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Jersy
        
      </h1>
      <p className='text-orange-600 font-medium text-2xl pt-4 text-center'>Cricket & Football</p>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-lg p-4 flex justify-between items-center border-2 border-orange-500
            hover:scale-105 duration-300'
          >
            <h2 className='font-medium sm:text-xl'>{item.name}</h2>
           
            <img src={item.image} alt={item.name} className='w-20 ' />
            
          </div>
        ))}
      </div>
      <div className='flex justify-center font-medium'>
      <p className='flex '><LiaCopyrightSolid/> 2023 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Category;
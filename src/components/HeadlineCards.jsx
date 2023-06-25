import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300 '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Hoddie For Men's</p>
          <p className='px-2'>All Size Avaliable</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://d13mpyn1qp7zwx.cloudfront.net/image-factory/3dc0ddb8e7e4b90672e46bbab355aafa8d17b292~1429x690:quality=100/images/combinations/rlKLxidNqIHxzNJTgqVbEp1beX6ascPtSLYzvcV6.png'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Hoddie For Women's</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.istockphoto.com/id/1293292206/photo/young-beautiful-girl-in-a-white-hoodie-posing-warm-oversized-hoodie-with-an-hood-stylish.jpg?s=612x612&w=0&k=20&c=jtOCQCQieltbA-xg3GE_MNdfNsnj4i0H1qvVD837xLk='
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Printed Hoddies</p>
          <p className='px-2'>Trendy</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://thalasiknitfab.com/image/cache/catalog/HD_104/BACK%20PRINT%20HOODIE-600x315w.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
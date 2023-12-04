import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] p-4 py-12 grid md:grid-cols-3 gap-6 mx-auto'>
       <div className='rounded-xl relative'>
            <div className='absolute w-full h-full rounded-xl bg-black/50 text-white '>
              <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, BOGO's Out</p>
              <p className='px-2'>Through 8/26</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div className='rounded-xl relative'>
            <div className='absolute w-full h-full rounded-xl bg-black/50 text-white '>
              <p className='font-bold text-2xl px-2 pt-4 '>New Restaurant</p>
              <p className='px-2'>Added Daily</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div className='rounded-xl relative'>
            <div className='absolute w-full h-full rounded-xl bg-black/50 text-white '>
              <p className='font-bold text-2xl px-2 pt-4 '>We deliver Deserts Too</p>
              <p className='px-2'>Tasty Treats</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
    </div>
  )
}

export default HeadlineCards;
  
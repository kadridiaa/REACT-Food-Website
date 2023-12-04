import React from 'react'
import { categories } from '../data/data'

function Category() {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        {/* categories DIV */}
            <h1 className='text-5xl text-orange-500 text-center font-bold p-1'>TOP MENU RATED Items</h1>
             {/* DIV of the elements category */}
             <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {
                    categories.map((item , index) => {
                        return (
                            //div of each category
                            <div key={index} className='bg-gray-200 flex rounded items-center p-4 justify-between'>
                                <h2 className='font-bold '>{item.name}</h2>
                                <img className='w-20' src={item.image} alt={item.name} />
                            </div>
                        )
                    })
                }
             </div>
    </div>
  )
}

export default Category

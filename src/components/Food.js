import React, { useState } from 'react'
import {data} from '../data/data'

function Food() {
  
  const [foods , setFood] = useState(data);
  

  const FilterType =(category)=>{
       setFood(
        data.filter((item)=>{
          return item.category === category;
        })
       )
  }
  
  const FilterPrice =(price)=>{
       setFood(
        data.filter((item)=>{
          return  item.price === price;
        })
       )
  }
  

  
  return (
    
        <div className='max-w-[1640px] my-6 p-4'>
            <h1 className='text-5xl text-orange-500 text-center font-bold p-1'>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div>
                <h1 className='font-bold'>Filter Type</h1>
                <div className='flex justify-between flex-wrap'>
                  
                   <button onClick={()=>setFood(data)} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>All</button>
                   <button onClick={()=>FilterType('burger')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>burger</button>
                   <button onClick={()=>FilterType('pizza')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>Pizza</button>
                   <button onClick={()=>FilterType('salad')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>Salads</button>
                   <button onClick={()=>FilterType('chicken')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
               </div> 
             <div >
                <h1 className='font-bold'>Filter Price</h1>
                <div className='flex justify-between flex-wrap'>
                   <button onClick={()=>FilterPrice('$')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>$</button>
                   <button onClick={()=>FilterPrice('$$')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>$$</button>
                   <button onClick={()=>FilterPrice('$$$')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>$$$</button>
                   <button onClick={()=>FilterPrice('$$$$')} className='m-1 rounded-2xl border-orange-500 text-orange-500 bg-white hover:bg-orange-600 hover:text-white'>$$$$</button>
                 
                </div>
            </div>
          </div>
      


      {/* Display Foods */}
       
       <div className='grid grid-cols-2  lg:grid-cols-4 gap-6 pt-4'>
          
            {
              foods.map((item , index)=>{
                return(
                <div className='rounded-xl border shadow-lg hover:scale-105 duration-300' key={index}>
                    <img className='object-cover rounded-t-xl h-[200px] w-full' src={item.image} alt={item.name} />
                    <div className='flex justify-between items-center p-4'>
                      <p className='font-bold'>{item.name}</p>
                      <p>
                        <span className='bg-orange-600 text-white rounded-full p-2'>{item.price}</span>
                      </p>
                    </div>
                </div>)
              })
            }
           
       </div>
       </div>

    
  );
};

export default Food;

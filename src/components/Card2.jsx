import React from 'react'

import { ImBin } from "react-icons/im"
import { useDispatch } from 'react-redux'
import {  RemoveItem , IncrementQty , DecrementQty } from "../redux/cartSlice";
const Card2 = ({ name, image, id, price ,qty }) => {
  let dispatch = useDispatch();

  
  return (
    <div className="sm:w-full sm:h-[120px]  w-[390px] h-[150px] shadow-lg p-2 flex justify-between ">
      
      {/* Left section (image + name) */}
      <div className=" w-[60%] h-full flex gap-3 sm:gap-5">
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
          <img
            src={image}
            alt="Cart item"
            className='object-cover '
          />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-2'>
          <div className="font-bold text-gray-600text-sm sm:text-lg">{name}</div>
          <div className="w-[90px] h-[35px] sm:w-[100px] sm:h-[50px] bg-slate-400 flex rounded-lg overflow-hidden border-2 text-green-400 border-green-400 text-2xl ">
            <button className='w-[30%] h-full bg-white flex justify-center items-center font-bold hover:bg-gray-200' onClick={()=> {qty >1 ? dispatch(DecrementQty({id:id})) : dispatch(RemoveItem(id));}}>-</button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center font-bold'>{qty}</span>
            <button className='w-[30%] h-full bg-white flex justify-center items-center font-bold hover:bg-gray-200' onClick={()=> dispatch(IncrementQty({id:id}))}>+</button>
          </div>
        </div>
      </div>

      {/* Right section (price or actions) */}

      <div className="font-semibold flex flex-col justify-start items-end gap-6">
      <span className='text-lg sm:text-xl text-green-500 font-semibold'> Rs - {price}/-</span>
      <ImBin className='w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] text-red-600 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2

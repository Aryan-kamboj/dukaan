import React from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { PiChatDotsFill } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <div className='h-16 bg-white flex px-8 py-3 justify-around w-[85vw] border-b-[1px] border-[#D9D9D9] items-center'>
        <div className='flex h-fit space-x-4 w-[33%]'>
            <p>Payments</p>
            <p className='text-[#4D4D4D] text-[12px] flex items-center space-x-1'><FaRegCircleQuestion/> <span>How it works</span></p>
        </div>
        <div className='flex items-center w-[33%] '>
            <IoIosSearch className='relative left-7 text-xl text-[#808080] font-'/>
            <input className=' rounded-md pl-4 w-[100%] bg-[#F2F2F2] py-[9px] pr-4 pl-8 outline-none placeholder:text-[#808080] placeholder:text-[15px] placeholder:font-normal' placeholder='Search by order ID...'/>
        </div>
        <div className='flex flex-row-reverse w-[33%] '>
            <div className='bg-[#E6E6E6] text-[#4D4D4D] w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                <FaCaretDown/>
            </div>
            <div className='bg-[#E6E6E6] mr-3 text-[#4D4D4D] w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                <PiChatDotsFill/>
            </div>
        </div>
    </div>
  )
}

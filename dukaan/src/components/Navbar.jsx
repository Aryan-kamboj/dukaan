import React from 'react';
import profileImg from "../assets/Image.png";
import {FaChevronDown} from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { TbClipboardList } from "react-icons/tb";
import { PiSquaresFourLight } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineSound } from "react-icons/ai";
import { PiChartBar } from "react-icons/pi";
import { HiCash } from "react-icons/hi";
import { LuMousePointer2 } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
export const Navbar = () => {
  return (
    <div className='w-[15vw] bg-[#1E2640] text-[#FFFFFF] h-[1482px] flex flex-col justify-between '>
       <div>
       <span className='flex justify-between items-center p-6'>
            <div className='flex'>
                <img src={profileImg} className='rounded-lg'/>
                <span className='flex flex-col pl-2'>
                    <span>Nishyan</span>
                    <a className="underline text-[rgb(200,202,208)]">Visit store</a>
                </span>
            </div>
            <FaChevronDown/>
       </span> 
       <div className='p-3 space-y-[2px]'>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><GoHome className='text-xl'/><sapn>Home</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><TbClipboardList className='text-xl'/><sapn>Orders</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><PiSquaresFourLight className='text-xl'/><sapn>Products</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><GrDeliver className='text-xl'/><sapn>Delivery</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><AiOutlineSound className='text-xl'/><sapn>Marketing</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><PiChartBar className='text-xl'/><sapn>Analytics</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center bg-[rgba(255,255,255,0.1)]'><HiCash className='text-xl'/><sapn>Payments</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><LuMousePointer2 className='text-xl'/><sapn>Tools</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><TbDiscount2 className='text-xl'/><sapn>Discounts</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><MdOutlinePeopleAlt className='text-xl'/><sapn>Audience</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><MdOutlineColorLens className='text-xl'/><sapn>Appearance</sapn></div>
            <div className='flex rounded-lg space-x-2 px-4 py-2 items-center active:bg-[rgba(255,255,255,0.1)]'><BsLightningCharge className='text-xl'/><sapn>Plugins</sapn></div>
       </div>
       </div>
       <div className='m-4 rounded-xl bg-[#353C53] flex items-center  '>
            <div className='w-9 h-9 m-[10px] flex items-center justify-center rounded-[4px] bg-[rgba(255,255,255,0.1)]'>
                <CiWallet className='text-3xl'/>
            </div>
            <div className='flex flex-col'>
                <span className='text-[rgb(200,202,208)] text-[13px]'>Available credits</span>
                <span className='text-[16px]'>222.10</span>
            </div>
       </div>
    </div>
  )
}

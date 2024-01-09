import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { FaAngleRight, FaSortDown } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";

export const Overview = () => {
    const orders = [{
          id:"#281209",
          date:"7 July, 2023",
          amount:"₹1,278.23",
          fees:"$22",
    },
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
},
{
    id:"#281209",
    date:"7 July, 2023",
    amount:"₹1,278.23",
    fees:"$22",
}]
    const containerStyle = {
        backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3e%3cpolyline points=\"6 9 12 15 18 9\"%3e%3c/polyline%3e%3c/svg%3e')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 1rem center',
        backgroundSize: '1em',
      };
    const shadow = {
        boxShadow: "0px 2px 6px 0px #1A181E0A"
    }
  return (
    <div className='p-8 bg-[rgb(249,249,249)]'>
        <div className='flex justify-between'>
            <h1 className='font-[20px] text-[#1A181E] font-[500]'>Overview</h1>
            <select style={containerStyle} className='outline-none border w-[8.5rem] py-[6px] px-[14px] appearance-none border-[#D9D9D9] rounded-[4px] font-[16px] text-[#4D4D4D]'>
                <option >Last Month <FaChevronDown/></option>
            </select>
        </div>
        <div className=' h-[118px] space-x-[20px] flex mt-6'>
            <div style={shadow} className='bg-white rounded-lg p-5 flex flex-col justify-between  w-[50%]'>
                <h2 className='text-[#4D4D4D] font-[16px]' >Online orders</h2>
                <p className='text-[32px]' >231</p>
            </div>
            <div style={shadow} className='bg-white rounded-lg p-5 flex flex-col justify-between  w-[50%]'>
                <h2 className='text-[#4D4D4D] font-[16px]' >Amount received</h2>
                <p className='text-[32px] flex items-center' ><MdCurrencyRupee className='text-[28px]'/>2392312.19</p>
            </div>
        </div>
        <div className='mt-[24px]'>
            <h2 className='text-[#1A181E]'>Transactions | This Month</h2>
        </div>
        <div className='mt-[24px] bg-white p-3 rounded-lg'>
            <div className='flex justify-between'>
                <div className='flex items-center w-[33%] border-[1px] rounded-[4px] bg-white border-[#D9D9D9] '>
                <IoIosSearch className=' ml-4 text-xl text-[#808080] font-'/>
                <input className=' rounded-md pl-4 w-[100%] bg-white py-[9px] pr-4 outline-none placeholder:text-[#808080] placeholder:text-[15px] placeholder:font-normal' placeholder='Search features, tutorials, etc.'/>
                </div>
                <div className='flex'>
                    <div className='flex text-[#4D4D4D]  space-x-[6px] justify-center items-center border-[#D9D9D9] border-[1px] rounded-[4px] w-[79px] h-[36px] mr-[20px]'>Sort<BiSortAlt2/></div>
                    <div className='flex text-[#4D4D4D] justify-center items-center border-[#D9D9D9] border-[1px] rounded-[4px] w-[36px] h-[36px]'><BsDownload/></div>
                </div>
            </div>
            <div className='bg-[#F2F2F2] grid grid-cols-4  rounded h-[40px] items-center py-[10px] px-[12px] mt-[12px] text-[#4D4D4D]'>
                <div className=''>Order ID</div>
                <div className=' flex '><span>Order date</span><FaSortDown/></div>
                <div className='text-right'>Order amount</div>
                <div className='  flex flex-row-reverse items-center space-x-1'><IoIosInformationCircleOutline/><span>Transaction fees</span></div>
            </div>
            <div>
                {orders.map((order)=>{
                    return (<div className='py-[14px] mx-[12px] border-b-[1px]  border-[#E6E6E6] text-[#1A181E] grid grid-cols-4 '>
                        <div className='mr-10  text-[#146EB4]'>{order.id}</div>
                        <div className='' >{order.date}</div>
                        <div className=' text-right'>{order.amount}</div>
                        <div className=' flex flex-row-reverse'> {order.fees}</div>
                    </div>)})
                }
            </div>
            <div className='w-[100%] flex items-center justify-center mt-[30px] mb-[10px] space-x-4'>
                <button className='border-[1px] p-[6px] text-[#4D4D4D] border-[#D9D9D9] rounded items-center flex '><FaAngleLeft/>Previous</button>
                <div>
                    <span className='py-[6px] px-[8px]'>1</span>
                    <span className='py-[6px] px-[8px]'>...</span>
                    <span className='py-[6px] px-[8px] rounded bg-[#146EB4] text-white'>10</span>
                    <span className='py-[6px] px-[8px]'>11</span>
                    <span className='py-[6px] px-[8px]'>12</span>
                    <span className='py-[6px] px-[8px]'>13</span>
                    <span className='py-[6px] px-[8px]'>14</span>
                    <span className='py-[6px] px-[8px]'>15</span>
                    <span className='py-[6px] px-[8px]'>16</span>
                    <span className='py-[6px] px-[8px]'>17</span>
                    <span className='py-[6px] px-[8px]'>18</span>
                </div>
                <button className='border-[1px] p-[6px] text-[#4D4D4D] border-[#D9D9D9] rounded items-center flex '>Next<FaAngleRight/></button>
            </div>
        </div>
    </div>
)}
import React, { useState } from 'react'
import  { BsThreeDots, BsDot, BsArrow90DegRight, BsBookmark } from 'react-icons/bs'
import { BiWorld, BiLink, BiHide, BiShow  }  from 'react-icons/bi'
import { HiPlus, HiUserRemove } from "react-icons/hi"
import { AiOutlineDislike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { IoNavigate } from "react-icons/io5"
import  { FiDelete } from 'react-icons/fi'
function Open(props) {
    const [change, setChange] = useState(true);
  console.log(props)
  return (
    <div className=''>
   <p className='h-8 w-8 pl-1 pt-1  rounded-full hover:bg-gray-200 cursor-pointer'>
       <BsThreeDots onClick = {() => setChange(!change)} className='rotate-90 lg:rotate-180 h-6 w-6'/>
       {change?<h1></h1>:
      <div className='h-[594px] mt-1 w-[370px] bg-[#FFFFFF] 
      rounded-lg border-2 z-50 absolute top-0
       left-[140px]  sm:left-[260px] md:left-[366px] lg:left-[5px]'>
            <div className=' pt-1'>
              <ul className=''>
                <li className='flex items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <BsBookmark className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Save</span>
                     <span className='text-[14px]'>For later</span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 py-3 pl-3  hover:bg-gray-200'>
                  <BiLink className='h-6 w-6'/>
                  <p className='flex f'>
                     <span className='font-semibold'>Copy Link  to Post</span>
                  </p>
                </li>
                <li className='flex   space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <FiDelete className='h-6 w-6 mt-3'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Unfollow Talha Bhutta </span>
                     <span>Stay connected but stop seeing posts from talha in feed </span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <HiUserRemove className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Remove Connection With talha bhutta</span>
                     <span className='text-[14px]'>talha wan't be notiified</span>
                  </p>
                </li>
                <li className='flex   space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <FiDelete className='h-6 w-6 mt-3'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Unfollow Faizan mumtaz </span>
                     <span>Stay connected but stop seeing posts from faizana in feed </span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <HiUserRemove className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Remove Connection With Faizan Mumtaz</span>
                     <span className='text-[14px]'>Faizan wan't be notiified</span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <BiHide className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Hide or Report this Post</span>
                     <span className='text-[14px]'>Let us Know why you don't want to see this</span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <BiShow className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Let can see this post?</span>
                     <span className='text-[14px]'>Visible to anyone on or off on linked in</span>
                  </p>
                </li>
              </ul>
            </div>
                   </div>
                   }
       </p>
        
    </div>
  )
}

export default Open
import { FaGlobeAmericas, FaEllipsisH, FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import React from 'react';

const Posts = ({...data}) => {
  return (
   <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-4">
         {/* Header */}
         <div className="flex items-start justify-between">
           <div className="flex gap-3">
             <img
               src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your actual profile image
               alt="Profile"
               className="w-12 h-12 rounded-full"
             />
             <div>
               <h2 className="font-bold text-sm">{data.name}</h2>
               <div className="text-xs text-gray-500 flex items-center gap-1">
                 <span>{data.role} · {data.time}</span>
                 <FaGlobeAmericas />
               </div>
             </div>
           </div>
           <FaEllipsisH className="text-gray-500 cursor-pointer" />
         </div>
   
         {/* Post Content */}
         <p className="mt-3 text-sm text-gray-800">
           <span className="font-semibold">{data.domain}</span> 
          {data.description}
         </p>
   
         {/* Hashtags */}
         <div className="mt-2 text-sm text-blue-600 space-x-2">

            {data.hashtags?.map((hashtag,index)=>(
                <span key={index}>#{hashtag}</span>
            ))}

           {/* <span>#panda</span>
           <span>#funfact</span>
           <span>#redpanda</span> */}
         </div>
   
         {/* See translation */}
         <p className="text-blue-500 text-sm mt-1 cursor-pointer">See translation</p>
   
         {/* Image */}
         <div className="mt-3">
      {data.imageUrl && (
           <img
             src={data.imageUrl}
             alt="Post"
             className="rounded-md w-full"
           />) }
         </div>
   
         {/* Action Buttons */}
         <div className="flex justify-around mt-4 text-gray-600 border-t pt-2 text-sm">
           <button className="flex items-center gap-2 hover:text-blue-600">
             <FaThumbsUp /> Like
           </button>
           <button className="flex items-center gap-2 hover:text-blue-600">
             <FaCommentAlt /> Comment
           </button>
           <button className="flex items-center gap-2 hover:text-blue-600">
             <FaShare /> Share
           </button>
         </div>
       </div>
  );
};

export default Posts;

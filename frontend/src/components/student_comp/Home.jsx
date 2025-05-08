import { useState } from "react";
import {BsArrowLeftShort,BsChevronDown} from "react-icons/bs";
import { BsBrilliance } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdSearch } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";
import { MdOutlineTrendingUp } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import SideBar from "./SideBar";
import Postcard from "./PostCard";
import { FaGlobeAmericas, FaEllipsisH, FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";

const Home=()=>{
        
       const [open,setOpen] = useState(true);
       const [submenuOpen , setSubmenuOpen] = useState(false);
       const Menus = [
              {title:"Home",icon:<FaHome/>},
              {title:"Search",icon:<IoMdSearch />},
              {title:"Mentorship Programs",icon:<FaChalkboardTeacher />},
              {title:"Academic Performance",spacing:true,icon:<TbFileReport />},
              {title:"Announcements",
                     submenu : true,
                     submenuItems:[
                            {title:"Hackathon"},
                            {title:"Events"},
                            {title:"Exams"},
                            {title:"Others"}
                          ],
                          icon:<TfiAnnouncement />
              },
              {title:"Trending",icon:<MdOutlineTrendingUp />},
              {title:"Notification",spacing:true,icon:<IoIosNotifications />},
              {title:"Messages",icon:<TiMessages />},
              {title:"Profile",icon:<IoPerson />},
              {title:"Logout",icon:<BiLogOut />}
       ];
       return (
        <div className="flex">

<aside className="h-screen sticky top-0">

<SideBar
        Menus={Menus}
        open={open}
        setOpen={setOpen}
        submenuOpen={submenuOpen}
        setSubmenuOpen={setSubmenuOpen}
      />
 </aside>
  <div className="p-7 flex-1 overflow-y-auto space-y-2 bg-gray-100 min-h-screen">

    <h1 className="text-2xl font-semibold mb-6">Posts</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Example Post Card */}
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">Alumni Advice</h2>
      <p className="text-gray-700 text-sm">
        Explore internship strategies and resume tips shared by recent graduates.
      </p>
      <div className="mt-3 text-right text-sm text-blue-600 cursor-pointer hover:underline">Read More</div>
    
    </div>

    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">Hackathon Alert</h2>
      <p className="text-gray-700 text-sm">
        A new national-level hackathon has been announced! Participate and win exciting prizes.
      </p>
      <div className="mt-3 text-right text-sm text-blue-600 cursor-pointer hover:underline">View Details</div>
    </div>

    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">Hackathon Alert</h2>
      <p className="text-gray-700 text-sm">
        A new national-level hackathon has been announced! Participate and win exciting prizes.
      </p>
      <div className="mt-3 text-right text-sm text-blue-600 cursor-pointer hover:underline">View Details</div>
    </div>

    {/* Add more cards dynamically as needed */}
    
            </div>
              {/* Posts from all users*/}
              <div class="flex justify-center mt-4 md:mt-6 p-7">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">For you</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Explore</a>
              </div>

  {/* <Postcard/> */}


  {/* <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src="https://via.placeholder.com/50" // Replace with your actual profile image
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-bold text-sm">Panda Media</h2>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <span>326 abonnés · 20 h</span>
              <FaGlobeAmericas />
            </div>
          </div>
        </div>
        <FaEllipsisH className="text-gray-500 cursor-pointer" />
      </div>

      <p className="mt-3 text-sm text-gray-800">
        <span className="font-semibold">[Fun facts]</span> Did you know that red pandas were given the name 'panda'
        first, roughly fifty years before the black and white variety.
      </p>

      <div className="mt-2 text-sm text-blue-600 space-x-2">
        <span>#panda</span>
        <span>#funfact</span>
        <span>#redpanda</span>
      </div>

      <p className="text-blue-500 text-sm mt-1 cursor-pointer">See translation</p>

      <div className="mt-3">
        <img
          src="/215eba6b-cf4d-4da2-9456-f0321fd181ab.png"
          alt="Post"
          className="rounded-md w-full"
        />
      </div>

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
    </div> */}
 
 <Postcard/>



</div>




        </div>
       );     
}
export default Home;
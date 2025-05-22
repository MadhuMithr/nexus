
import {BsArrowLeftShort,BsChevronDown} from "react-icons/bs";
import { BsBrilliance } from "react-icons/bs";

const SideBar = ({ Menus, open, setOpen, submenuOpen, setSubmenuOpen })=>{
     return (
     <div className = {`bg-dark-blue h-screen p-5 pt-8 ${open?"w-72":"w-20"} duration-300 relative`}>
                <BsArrowLeftShort className = {`bg-white text-dark-blue text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-blue cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
    
                <div className="inline-flex">
                   <BsBrilliance className="bg-white text-4xl rounded-full cursor-pointer block float-left mr-2"></BsBrilliance>
                   <h1 className = {`text-white origin-left font-medium text-2xl pl-5 duration-300 ${!open && "scale-0"}`}>Nexus</h1>
               </div>
    
                  
                      
    
                         <ul className="pt-2">
                         {Menus.map((menu, index) => (
                         <div key={index}>
                         {/* Main Menu Item */}
                         <li
                                className={`text-gray-50 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#074799] rounded-md ${
                                menu.spacing ? "mt-9" : "mt-2"
                                }`}
                         >
                                <span className="text-2xl block float-left">
                                {menu.icon}
                                </span>
                                <span
                                className={`text-base font-medium flex-1 duration-200 ${
                                !open && "hidden"
                                }`}
                                >
                                {menu.title}
                                </span>
                                {menu.submenu && open && (
                                                     <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={()=> setSubmenuOpen(!submenuOpen)}/>
                                              )}
                         </li>
                       
                         {/* Submenu Items (if present) */}
                         {menu.submenu && submenuOpen && open && (
                                <ul className="pl-12">
                                {menu.submenuItems.map((submenuItem, subIndex) => (
                                <li
                                       key={subIndex}
                                       className="text-sm flex items-center rounded-md gap-x-4 p-2  text-gray-300 px-1 cursor-pointer hover:bg-[#074799]"
                                >
                                       {submenuItem.title}
                                </li>
                                ))}
                                </ul>
                         )}
                         </div>
                         ))}
                         </ul>
    
                      
           </div>);
}

export default SideBar;
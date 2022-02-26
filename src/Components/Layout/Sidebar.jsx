import React from 'react'
import { Link } from 'react-router-dom';

// Icons
import { MdHomeFilled, MdOutlineGavel } from 'react-icons/md';
import { FaAngleDoubleLeft, FaRegEdit } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillSave } from 'react-icons/ai';
import { RiMedalLine } from 'react-icons/ri';
import { BiPlusCircle } from 'react-icons/bi';

// Images & Icons
import logo from "../../Images/logo_with_slogan.png"

const Sidebar = () => {

    // ! Check Active Route, Sections & Sub Sections
    const active_route = "/home"
    let active_section = ""
    let active_sub_section = ""
    
    if(active_route.includes('home')) active_section = 'home'

    return (
        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white">
        <div className="sidebar-header flex items-center justify-center py-4">
            <Link to="/" className="inline-flex flex-row items-center">
                <div className="h-10">
                    <img src={logo} alt="" className='w-36'/>
                </div>
            </Link>
        </div>

        <div>
            <div className='flex justify-end mb-5'>
                <div className='bg-gray-300 p-1 inline cursor-pointer'>
                    <FaAngleDoubleLeft className='text-gray-700'/>
                </div>
            </div>

            <div className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${active_section === 'home' && 'bg-gray-100 text-limadi'}`}>
                <MdHomeFilled className='text-xl mr-2'/> Home
            </div>

            <div className='text-md px-7 pb-4 text-gray-800 cursor-pointer'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center text-sm font-semibold'>
                        <FaRegEdit className='text-lg mr-2'/> Request
                    </div>
                    <IoIosArrowForward />
                </div>
                <div className='pt-3'>
                    <div className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                        <AiFillSave className='text-lg mr-2'/> Saved
                    </div>
                    <div className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                        <MdOutlineGavel className='text-lg mr-2'/> In Bidding
                    </div>
                    <div className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                        <RiMedalLine className='text-lg mr-2'/> Awarded
                    </div>
                </div>
            </div>
            
            <div className="flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi">
                <BiPlusCircle className='text-xl mr-2'/> Create Request
            </div>
        </div>
        </aside>
    )
}

export default Sidebar
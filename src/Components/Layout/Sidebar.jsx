import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

// Icons
import { MdHomeFilled, MdOutlineGavel } from 'react-icons/md';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaRegEdit, FaTruck, FaTruckMoving } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillSave, AiOutlineHeart } from 'react-icons/ai';
import { RiFileHistoryLine, RiMedalLine } from 'react-icons/ri';
import { BiConfused, BiPlusCircle, BiWorld } from 'react-icons/bi';
import { GiNinjaStar, GiPirateFlag } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineCog } from 'react-icons/hi';

// Images & Icons
import logo from "../../Images/logo_with_slogan.png"
import Accordion from './Accordion';
import { AuthContext } from '../../Context/AuthContext';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const { active_route } = useContext(AuthContext);
    
    // !======================================= Checking Sections ====================================
    // ! Check Active Route, Sections & Sub Sections
    let active_section = ""
    let active_sub_section = ""
    
    // Sub Sections
    if(active_route.includes('request/saved')) active_sub_section = 'saved'
    if(active_route.includes('request/in-bidding')) active_sub_section = 'in_bidding'
    if(active_route.includes('request/awarded')) active_sub_section = 'awarded'
    if(active_route.includes('request/ongoing')) active_sub_section = 'ongoing'
    if(active_route.includes('request/completed')) active_sub_section = 'completed'
    if(active_route.includes('request/history')) active_sub_section = 'history'
    
    if(active_route.includes('pirate')) active_sub_section = 'pirate'
    if(active_route.includes('ninja')) active_sub_section = 'ninja'
    

    // Sections
    if(active_route.includes('/')) active_section = 'home'
    if(active_route.includes('create-request')) active_section = 'create_request'
    if(active_route.includes('favorite/companies')) active_section = 'favorite_companies'
    if(active_route.includes('favorite/address')) active_section = 'favorite_address'
    if(active_route.includes('settings')) active_section = 'settings'
    if(['saved', 'in_bidding', 'awarded', 'ongoing', 'completed', 'history'].includes(active_sub_section)) active_section = 'request'
    if(['pirate', 'ninja'].includes(active_sub_section)) active_section = 'hello_world'

    // !===============================================================================================
    
    return (
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} sidebar overflow-hidden md:shadow transform -translate-x-full md:translate-x-0 transition-all duration-150 ease-in bg-white`}>
            <div className="sidebar-header flex items-center justify-center py-4">
                <Link to="/" className="inline-flex flex-row items-center">
                    <div className="h-10">
                        <img src={logo} alt="" className='w-36'/>
                    </div>
                </Link>
            </div>

            <div>
                <div className='flex justify-end mb-5'>
                    <div onClick={() => setIsSidebarOpen(false)} className='bg-gray-300 p-1 inline cursor-pointer'>
                        <FaAngleDoubleLeft className='text-gray-700'/>
                    </div>
                </div>


                <Link to="/" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${active_section === 'home' && 'bg-gray-100 text-limadi'}`}>
                    <MdHomeFilled className='text-xl mr-2'/> Home
                </Link>

                <Accordion
                    isInitOpen={active_section === 'request'}
                    icon={<FaRegEdit className='text-lg mr-2'/>}
                    title={"Request"}
                    body={<>
                        <Link to="/request/saved" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'saved' && 'bg-gray-100 text-limadi'}`}>
                            <AiFillSave className='text-lg mr-2'/> Saved
                        </Link>
                        <Link to="/request/in-bidding" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'in_bidding' && 'bg-gray-100 text-limadi'}`}>
                            <MdOutlineGavel className='text-lg mr-2'/> In Bidding
                        </Link>
                        <Link to="/request/awarded" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'awarded' && 'bg-gray-100 text-limadi'}`}>
                            <RiMedalLine className='text-lg mr-2'/> Awarded
                        </Link>
                        <Link to="/request/ongoing" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'ongoing' && 'bg-gray-100 text-limadi'}`}>
                            <FaTruck className='text-lg mr-2'/> On Going
                        </Link>
                        <Link to="/request/completed" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'completed' && 'bg-gray-100 text-limadi'}`}>
                            <FaTruckMoving className='text-lg mr-2'/> Completed
                        </Link>
                        <Link to="/request/history" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'history' && 'bg-gray-100 text-limadi'}`}>
                            <RiFileHistoryLine className='text-lg mr-2'/> History
                        </Link>
                    </>}
                />
                
                <Link to="/create-request" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${active_section === 'create_request' && 'bg-gray-100 text-limadi'}`}>
                    <BiPlusCircle className='text-xl mr-2'/> Create Request
                </Link>

                {/* Random Accordion Example */}
                <Accordion
                    isInitOpen={active_section === 'hello_world'}
                    icon={<BiWorld className='text-lg mr-2'/>}
                    title={"Hello World"}
                    body={<>
                        <Link to="/pirate" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'pirate' && 'bg-gray-100 text-limadi'}`}>
                            <GiPirateFlag className='text-lg mr-2'/> Pirate
                        </Link>
                        <Link to="/ninja" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${active_sub_section === 'ninja' && 'bg-gray-100 text-limadi'}`}>
                            <GiNinjaStar className='text-lg mr-2'/> Ninja
                        </Link>
                    </>}
                />

                <Link to="/favorite/companies" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${active_section === 'favorite_companies' && 'bg-gray-100 text-limadi'}`}>
                    <AiOutlineHeart className='text-xl mr-2'/> Favorite Companies
                </Link>

                <Link to="/favorite/address" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${active_section === 'favorite_address' && 'bg-gray-100 text-limadi'}`}>
                    <GrLocation className='text-xl mr-2'/> Favorite Address
                </Link>

                <Link to="/settings" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${active_section === 'settings' && 'bg-gray-100 text-limadi'}`}>
                    <HiOutlineCog className='text-xl mr-2'/> Settings
                </Link>

            </div>
        </aside>
    )
}

export default Sidebar
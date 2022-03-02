import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

// Icons
import { MdHomeFilled, MdOutlineGavel } from 'react-icons/md';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaRegEdit, FaTruck, FaTruckMoving } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillSave, AiOutlineHeart } from 'react-icons/ai';
import { RiFileHistoryLine, RiMedalLine } from 'react-icons/ri';
import { BiConfused, BiPlusCircle, BiWorld } from 'react-icons/bi';
import { GiMonkey, GiNinjaStar, GiPerspectiveDiceSixFacesRandom, GiPirateFlag } from 'react-icons/gi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineCog } from 'react-icons/hi';

// Images & Icons
import {LOGO} from "../../Utility/Sources"
import SidebarAccordion from './SidebarAccordion';
import { AuthContext } from '../../Context/AuthContext';
import Section from './Section';
import SubSection from './SubSection';

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

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
    
    if(active_route.includes('monkey')) active_sub_section = 'monkey'
    if(active_route.includes('pirate')) active_sub_section = 'pirate'
    if(active_route.includes('ninja')) active_sub_section = 'ninja'
    if(active_route.includes('random-page')) active_sub_section = 'random_page'
    

    // Sections
    if(active_route.includes('/')) active_section = 'home'
    if(active_route.includes('request/create')) active_section = 'create_request'
    if(active_route.includes('favorite/companies')) active_section = 'favorite_companies'
    if(active_route.includes('favorite/address')) active_section = 'favorite_address'
    if(active_route.includes('settings')) active_section = 'settings'
    if(['saved', 'in_bidding', 'awarded', 'ongoing', 'completed', 'history'].includes(active_sub_section)) active_section = 'request'
    if(['monkey', 'pirate', 'ninja', 'random_page'].includes(active_sub_section)) active_section = 'hello_world'

    // !===============================================================================================
    
    return (
        // ! To Add auto hide add these 2 lines in bottom tag "-translate-x-full md:translate-x-0"
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} fixed z-30 h-full sidebar overflow-hidden md:shadow transform transition-all duration-150 ease-in bg-white`}>
            <div className="sidebar-header flex items-center justify-center py-4 h-[4.5rem]">
                <Link to="/" className="inline-flex flex-row items-center">
                    <div className={`${isSidebarOpen ? 'h-10' : 'h-6 px-4'}`}>
                        <img src={LOGO} alt="" className='w-36'/>
                    </div>
                </Link>
            </div>

            <div>
                <div className='flex justify-end mb-5'>
                    <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='bg-gray-300 p-1 inline cursor-pointer'>
                        <FaAngleDoubleLeft className={`text-gray-700 transition-all duration-500 ${isSidebarOpen ? '' : 'rotate-180'}`}/>
                    </div>
                </div>


                <Section
                    isSidebarOpen={isSidebarOpen}
                    url='/'
                    icon={<MdHomeFilled/>}
                    title={"Home"}
                    is_active={active_section === 'home'}
                />

                <SidebarAccordion
                    isSidebarOpen={isSidebarOpen}
                    isInitOpen={active_section === 'request'}
                    icon={<FaRegEdit/>}
                    title={"Request"}
                    body={<>
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/request/saved'
                            icon={<AiFillSave/>}
                            title={"Saved"}
                            is_active={active_sub_section === 'saved'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/request/in-bidding'
                            icon={<MdOutlineGavel/>}
                            title={"In Bidding"}
                            is_active={active_sub_section === 'in_bidding'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/request/awarded'
                            icon={<RiMedalLine/>}
                            title={"Awarded"}
                            is_active={active_sub_section === 'awarded'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/request/ongoing'
                            icon={<FaTruck/>}
                            title={"On Going"}
                            is_active={active_sub_section === 'ongoing'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/request/completed'
                            icon={<FaTruckMoving/>}
                            title={"Completed"}
                            is_active={active_sub_section === 'completed'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/request/history'
                            icon={<RiFileHistoryLine/>}
                            title={"History"}
                            is_active={active_sub_section === 'history'}
                        />
                    </>}
                />
                
                <Section
                    isSidebarOpen={isSidebarOpen}
                    url='/request/create'
                    icon={<BiPlusCircle/>}
                    title={"Create Request"}
                    is_active={active_section === 'create_request'}
                />

                {/* Random SidebarAccordion Example */}
                {/* I've used both type of section type here */}
                <SidebarAccordion
                    isSidebarOpen={isSidebarOpen}
                    isInitOpen={active_section === 'hello_world'}
                    icon={<BiWorld/>}
                    title={"Hello World"}
                    body={<>
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/monkey'
                            icon={<GiMonkey/>}
                            title={"Monkey D. Luffy"}
                            is_active={active_sub_section === 'monkey'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/pirate'
                            icon={<GiPirateFlag/>}
                            title={"Pirate"}
                            is_active={active_sub_section === 'pirate'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/ninja'
                            icon={<GiNinjaStar/>}
                            title={"Ninja"}
                            is_active={active_sub_section === 'ninja'}
                        />
                        <SubSection
                            isSidebarOpen={isSidebarOpen}
                            url='/random-page'
                            icon={<GiPerspectiveDiceSixFacesRandom/>}
                            title={"Random Page"}
                            is_active={active_sub_section === 'c'}
                        />
                    </>}
                />

                <Section
                    isSidebarOpen={isSidebarOpen}
                    url='/favorite/companies'
                    icon={<AiOutlineHeart/>}
                    title={"Favorite Companies"}
                    is_active={active_section === 'favorite_companies'}
                />
                <Section
                    isSidebarOpen={isSidebarOpen}
                    url='/favorite/address'
                    icon={<HiOutlineLocationMarker/>}
                    title={"Favorite Address"}
                    is_active={active_section === 'favorite_address'}
                />
                <Section
                    isSidebarOpen={isSidebarOpen}
                    url='/settings'
                    icon={<HiOutlineCog/>}
                    title={"Settings"}
                    is_active={active_section === 'settings'}
                />

            </div>
        </aside>
    )
}

export default Sidebar
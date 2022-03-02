import React, { useState } from 'react'

import { IoIosArrowForward } from 'react-icons/io';

const SidebarAccordion = ({isSidebarOpen, isInitOpen = false, icon = '', title = '', body = ''}) => {
    // ! isInitOpen = "Decides whether SidebarAccordion should be opened initially"

    const [isOpen, setIsOpen] = useState(isInitOpen)
    
    return (
        <div className={`text-md px-7 py-2 mb-4 text-gray-800 ${isOpen && 'bg-gray-100'}`}>
            <div onClick={(e) => {setIsOpen(!isOpen)}} className='flex justify-between items-center w-full cursor-pointer'>
                <div className='flex items-center text-sm font-medium'>
                    <div className={`flex justify-start items-center ${isSidebarOpen ? 'text-xl mr-2' : 'text-2xl'}`}>
                        {icon}
                    </div>
                    {isSidebarOpen && title}
                </div>
                {isSidebarOpen && <IoIosArrowForward className={`transition-transform ${isOpen && 'rotate-90'}`} />}
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${!isOpen ? 'max-h-0' : 'max-h-96'}`}>
                <div className='pt-3'></div>
                {body}
            </div>
        </div>
    )
}

export default SidebarAccordion
import React, { useEffect, useState } from 'react'

import { IoIosArrowForward } from 'react-icons/io';

const Accordion = ({isInitOpen = false, icon = '', title = '', body = ''}) => {
    // ! isInitOpen = "Decides whether accordion should be opened when rendered"

    const [isOpen, setIsOpen] = useState(isInitOpen)
    
    return (
        <div className={`text-md px-7 py-2 mb-4 text-gray-800 ${isOpen && 'text-limadi'}`}>
            <div onClick={(e) => {setIsOpen(!isOpen)}} className='flex justify-between items-center w-full cursor-pointer'>
                <div className='flex items-center text-sm font-semibold'>
                    {icon} {title}
                </div>
                <IoIosArrowForward className={`transition-transform ${isOpen && 'rotate-90'}`} />
            </div>
            <div className={`overflow-hidden transition-[max-height] ${!isOpen ? 'max-h-0' : 'max-h-96'}`}>
                <div className='pt-3'></div>
                {body}
            </div>
        </div>
    )
}

export default Accordion
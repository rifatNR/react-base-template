import React, { useState } from 'react'

import { MdHomeFilled, MdOutlineGavel } from 'react-icons/md';
import { FaAngleDoubleLeft, FaRegEdit } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillSave } from 'react-icons/ai';
import { RiMedalLine } from 'react-icons/ri';

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div onClick={() => setIsOpen(!isOpen)} className='text-md px-7 py-2 mb-4 text-gray-800 cursor-pointer'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center text-sm font-semibold'>
                    <FaRegEdit className='text-lg mr-2'/> Request
                </div>
                <IoIosArrowForward className={`transition-transform ${isOpen && 'rotate-90'}`} />
            </div>
            <div className={`overflow-hidden transition-[max-height] ${!isOpen ? 'max-h-0' : 'max-h-36'}`}>
                <div className='pt-3'></div>
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
    )
}

export default Accordion
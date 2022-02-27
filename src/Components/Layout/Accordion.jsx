import React, { useState } from 'react'

import { MdHomeFilled, MdOutlineGavel } from 'react-icons/md';
import { FaAngleDoubleLeft, FaRegEdit, FaTruck, FaTruckMoving } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillSave } from 'react-icons/ai';
import { RiFileHistoryLine, RiMedalLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={`text-md px-7 py-2 mb-4 text-gray-800 cursor-pointer ${isOpen && 'text-limadi'}`}>
            <div onClick={(e) => {setIsOpen(!isOpen)}} className='flex justify-between items-center w-full'>
                <div className='flex items-center text-sm font-semibold'>
                    <FaRegEdit className='text-lg mr-2'/> Request
                </div>
                <IoIosArrowForward className={`transition-transform ${isOpen && 'rotate-90'}`} />
            </div>
            <div className={`overflow-hidden transition-[max-height] ${!isOpen ? 'max-h-0' : 'max-h-96'}`}>
                <div className='pt-3'></div>
                <Link to="/request/saved" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                    <AiFillSave className='text-lg mr-2'/> Saved
                </Link>
                <Link to="/request/in-bidding" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                    <MdOutlineGavel className='text-lg mr-2'/> In Bidding
                </Link>
                <Link to="/request/awarded" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                    <RiMedalLine className='text-lg mr-2'/> Awarded
                </Link>
                <Link to="/request/ongoing" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                    <FaTruck className='text-lg mr-2'/> On Going
                </Link>
                <Link to="/request/completed" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                    <FaTruckMoving className='text-lg mr-2'/> Completed
                </Link>
                <Link to="/request/history" className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi`}>
                    <RiFileHistoryLine className='text-lg mr-2'/> History
                </Link>
            </div>
        </div>
    )
}

export default Accordion
import React, { useContext } from 'react'
import { RequestContext } from '../../Context/RequestContext'

import { GiCardPickup } from 'react-icons/gi'
import { FaBoxOpen, FaCalendarAlt } from 'react-icons/fa'
import { BsBuilding, BsCalendar2WeekFill, BsCalendar3, BsClockFill, BsClockHistory } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { BiMap } from 'react-icons/bi'

const RequestWizard = () => {

  const {type, status, ChangeType} = useContext(RequestContext);

  console.log(status);
  
  return (
    <div className="bg-white p-2 md:p-4 shadow rounded-xl">

        {type === 'simple' && <div className="grid grid-cols-2 gap-4 w-full mb-10 text-gray-400 pb-4 border-b border-gray-200">
              <div className={`relative flex flex-col justify-center items-center text-sm ${status === 'init' && 'text-gray-700'}`}>
                <GiCardPickup className="text-3xl mb-4"/> Pick Up
                <IoIosArrowForward className="absolute right-1 h-full"/>
              </div>
              <div className={`relative flex flex-col justify-center items-center text-sm ${status === 'companies' && 'text-gray-700'}`}>
                <BsBuilding className="text-3xl mb-4"/> Companies
              </div>
        </div>}

        {type === 'advance' && <div className="grid grid-cols-3 gap-4 w-full mb-10 text-gray-400 pb-4 border-b border-gray-200">
              <div className={`relative flex flex-col justify-center items-center text-sm ${status === 'pickup1' && 'text-gray-700'}`}>
                <GiCardPickup className="text-3xl mb-4"/> Pick Up
                <IoIosArrowForward className="absolute right-1 h-full"/>
              </div>
              <div className={`relative flex flex-col justify-center items-center text-sm ${status === 'pickup2' && 'text-gray-700'}`}>
                <FaBoxOpen className="text-3xl mb-4"/> Package Details
                <IoIosArrowForward className="absolute right-1 h-full"/>
              </div>
              <div className={`relative flex flex-col justify-center items-center text-sm ${status === 'companies' && 'text-gray-700'}`}>
                <BsBuilding className="text-3xl mb-4"/> Companies
              </div>
          </div>}

      
        <div className="flex justify-center space-x-7 mb-4">
          <button onClick={() => ChangeType('simple')} className={`border border-gray-200 w-48 py-2 rounded-lg ${type === 'simple' && 'bg-gray-200'}`}>Simple</button>
          <button onClick={() => ChangeType('advance')} className={`border border-gray-200 w-48 py-2 rounded-lg ${type === 'advance' && 'bg-gray-200'}`}>Advanced</button>
        </div>

        <div className="px-2">

          <div className="flex justify-between items-center mb-10">
            <div className="text-xl font-bold">General Information</div>
            <button className="text-sm text-red-500">Clear</button>
          </div>

          <div className="mb-5">
            <div className="text-gray-600 text-sm font-bold mb-2">Give a Title</div>
            <input type="text" name="" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Enter Title"/>
          </div>

          <div className="mb-5">
            <div className="text-gray-600 text-sm font-bold mb-2">Sender Name</div>
            <input type="text" name="" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Sender Name"/>
          </div>
          
          <div className="mb-5">
            <div className="text-gray-600 text-sm font-bold mb-2">Transportation Type</div>
            <div className="relative cursor-pointer text-gray-600 bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Sender Name">
              Select Transportation Type
              <IoIosArrowForward className="absolute top-0 right-1 h-full"/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-8 2xl:gap-12">
            <div className="mb-5">
              <div className="text-gray-600 text-sm font-bold mb-2">Pickup Date</div>
              <div className="relative flex justify-center items-center">
                <input type="text" name="" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Pickup Date"/>
                <BsCalendar2WeekFill className="absolute right-1 h-[70%] w-9 px-2 border-l border-gray-300 text-sm text-gray-600"/>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-gray-600 text-sm font-bold mb-2">Pickup Time</div>
              <div className="relative flex justify-center items-center">
                <input type="text" name="" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Pickup Time"/>
                <BsClockFill className="absolute right-1 h-[70%] w-9 px-2 border-l border-gray-300 text-sm text-gray-600"/>
              </div>
            </div>
          </div>

          <div className="mb-5">
              <div className="text-gray-600 text-sm font-bold mb-2">Pickup Time</div>
              <div className="relative flex justify-center items-center">
                <input type="text" name="" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Pickup Time"/>
                <div className="absolute right-1 px-2 border-l border-gray-300">
                  <BiMap className="w-5 h-5 p-0.5 rounded-full text-sm bg-gray-600 text-white"/>
                </div>
              </div>
          </div>

          <div className="mb-5">
            <div className="text-gray-600 text-sm font-bold mb-2">Write Comment</div>
            <input type="text" name="" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder="Write Comment"/>
          </div>

          <div className="mb-5">
            <div className="text-gray-600 text-sm font-bold mb-2">Upload Attachment</div>
            <div className="flex justify-center items-center border-dashed border-2 border-gray-400 p-5 rounded-lg text-sm">
              Drag & Drop or <span className="text-blue-600 mx-2">Browse</span>
            </div>
          </div>
          
        </div>
      
    </div>
  )
}

export default RequestWizard
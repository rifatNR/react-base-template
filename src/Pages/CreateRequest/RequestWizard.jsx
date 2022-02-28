import React from 'react'
import { GiCardPickup, GiPlayerTime } from 'react-icons/gi'
import { FaBoxOpen } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'

const RequestWizard = () => {
  return (
    <div className="bg-white p-4 shadow rounded-xl">

        <div className="grid grid-cols-3 gap-4 w-full text-gray-600 mb-10">
            <div className="relative flex flex-col justify-center items-center text-sm">
              <GiCardPickup className="text-3xl mb-4"/> Pick Up
              <IoIosArrowForward className="absolute right-1 h-full"/>
            </div>
            <div className="relative flex flex-col justify-center items-center text-sm">
              <FaBoxOpen className="text-3xl mb-4"/> Package Details
              <IoIosArrowForward className="absolute right-1 h-full"/>
            </div>
            <div className="relative flex flex-col justify-center items-center text-sm">
              <BsBuilding className="text-3xl mb-4"/> Companies
              {/* <IoIosArrowForward className="absolute right-1 h-full"/> */}
            </div>
        </div>
      
        <div className="flex justify-center space-x-7">
          <button className="border border-gray-400 px-7 py-2 rounded-lg">Simple</button>
          <button className="border border-gray-400 px-7 py-2 rounded-lg">Advanced</button>
        </div>
      
    </div>
  )
}

export default RequestWizard
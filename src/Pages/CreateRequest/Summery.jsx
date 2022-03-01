import React, { useContext } from 'react'
import { BsFillLayersFill } from 'react-icons/bs'
import Dropdown from '../../Components/Dropdown'
import Image from '../../Components/Image/Image'
import { RequestContext } from '../../Context/RequestContext'

const Summery = () => {

  const {is_submit_enabled} = useContext(RequestContext);
  
  return (
    <div className="bg-white p-4 shadow rounded-xl sticky">
      <div className="relative flex justify-center items-center mb-5">
        <div className="text-xl font-bold">Summery</div>
        <div className="absolute right-0">
          <Dropdown
              width={36}
              button={<div className="h-5 w-5 md:h-7 md:w-7 bg-gray-500 flex justify-center items-center rounded-full">
                  <BsFillLayersFill className="text-lg text-white"/>
              </div>}
              body={<div className="py-1">
                <div className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Save</div>
                <div className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Clear</div>
                <div className="py-2 px-3 hover:bg-red-200 hover:text-red-600 cursor-pointer">Delete</div>
              </div>}
          />
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Title</div>
            <button className="text-sm text-right">Home Moving BD to DK</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Sender Name</div>
            <button className="text-sm text-right">Jesse Pinkman</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Transportation Type</div>
            <button className="text-sm text-right">Home Moving</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Date</div>
            <button className="text-sm text-right">10.Feb.2022</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Time</div>
            <button className="text-sm text-right">8:00(Avg.- 2 hr)</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Address</div>
            <button className="text-sm text-right">20/4, Pallabi, Mirpur, Dhaka-1216</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Comment</div>
            <button className="text-sm w-[60%] text-right">Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</button>
          </div>
          <div className="flex justify-between mb-5">
            <div className="text-sm text-gray-500">Attachment</div>
            <div className="rounded-lg overflow-hidden w-36">
              <Image src='https://picsum.photos/1200/800?random=' className="cursor-pointer"/>
            </div>
          </div>
      </div>

      <div className="mt-10 mb-5 w-full text-center">
        <button className={`px-16 py-3 rounded-md ${is_submit_enabled ? 'bg-limadi' : 'bg-gray-400 cursor-not-allowed'} text-white font-bold`}>Submit</button>
      </div>
      
    </div>
  )
}

export default Summery
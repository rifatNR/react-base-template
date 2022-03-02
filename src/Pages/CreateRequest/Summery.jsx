import React, { useContext } from 'react'
import { BsFillLayersFill } from 'react-icons/bs'
import Dropdown from '../../Components/Dropdown'
import Image from '../../Components/Image/Image'
import { RequestContext } from '../../Context/RequestContext'

const Summery = () => {
  const {title, transport_type, pickup_date, pickup_start_time, delivery_start_time, pickup_address, delivery_address, pickup_comment} = useContext(RequestContext);

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
            <button className="text-sm text-right">{title ? title : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Transportation Type</div>
            <button className="text-sm text-right">{transport_type ? transport_type : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Date</div>
            <button className="text-sm text-right">{pickup_date ? "TODO:" : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Time</div>
            <button className="text-sm text-right">{pickup_start_time ? pickup_start_time : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Delivery Time</div>
            <button className="text-sm text-right">{delivery_start_time ? delivery_start_time : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Time</div>
            <button className="text-sm text-right">{pickup_start_time ? pickup_start_time : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Pick Up Address</div>
            <button className="text-sm text-right">{pickup_address ? pickup_address : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Delivery Address</div>
            <button className="text-sm text-right">{delivery_address ? delivery_address : <span className="text-gray-400">N/A</span>}</button>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-sm text-gray-500">Comment</div>
            <button className="text-sm w-[60%] text-right">{pickup_comment ? pickup_comment : <span className="text-gray-400">N/A</span>}</button>
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
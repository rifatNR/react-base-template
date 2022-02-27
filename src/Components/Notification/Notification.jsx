import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'
import Dropdown from '../Dropdown'

const Notification = () => {

    const notification_body = (
        <div className="p-3">
            <div className="flex justify-between items-center mb-5">
                <div className="font-bold text-md">Notification</div>
                <div className="text-limadi text-sm">See all</div>
            </div>

            <div className="bg-gray-100 p-3 rounded-md">
                <div className="font-bold text-sm mb-1">20% off for this session</div>
                <div className="text-xs">Praesent sapien massa, convallis a pellentesque nec, consectetur adipiscing elit.</div>
                <div className="flex justify-end items-center text-gray-500 text-xs">
                    <div className="flex justify-end items-center mr-4"> <FaRegCalendarAlt className="mr-1 text-sm"/> 2021.08.21</div>
                    <div className="flex justify-end items-center "> <BsClock className="mr-1 text-sm"/> 20.30</div>
                </div>
            </div>
        </div>
    )
    
    return (
        <div>
            <Dropdown
                width={96}
                button={<div className="h-10 w-10 bg-gray-300 flex justify-center items-center rounded-full">
                    <MdNotifications className="text-2xl"/>
                </div>}
                body={notification_body}
            />
        </div>
    )
}

export default Notification
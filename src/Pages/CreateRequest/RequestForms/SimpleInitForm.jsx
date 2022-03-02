import React, { useContext, useState } from 'react'
import Input01 from '../../../Components/Input/Input01'
import Input02 from '../../../Components/Input/Input02';

import { BiMap } from 'react-icons/bi'
import DatePicker from "react-datepicker";
import { BsCalendar2WeekFill, BsClockFill } from 'react-icons/bs';
import { RequestContext } from '../../../Context/RequestContext';
import TransportationType from './TransportationType';

const SimpleInitForm = () => {

    const {title, pickup_date, pickup_start_time, delivery_start_time, pickup_address, delivery_address, pickup_comment, ChangeValue} = useContext(RequestContext);

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        ChangeValue(e.target.name, e.target.value);
    }
    const onClick = (e) => {
        console.log(e.target.value);
    }
    
    return (
        <>
            <div className="flex justify-between items-center mb-10">
                <div className="text-xl font-bold">General Information</div>
                <button className="text-sm text-red-400 font-semibold">Clear</button>
            </div>

            <Input01 onChange={onChange} onClick={onClick} name="title" value={title} label="Give a Title" placeholder="Enter Title"/>
            
            <TransportationType/>

            <div className="grid grid-cols-2 gap-2 md:gap-8 2xl:gap-12">
                <Input02 name="pickup_date" className="cursor-pointer" label="Pickup Date" type="date" placeholder="Pickup Date"
                        icon={<BsCalendar2WeekFill className="h-[70%]"/>}
                        custom_input={<DatePicker onChange={(date) => ChangeValue('pickup_date', date)} selected={pickup_date} dateFormat="Y-MM-d" name="pickup_date" className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md"/>}/>
                <Input02 onChange={onChange} onClick={onClick} className="cursor-pointer" name="pickup_start_time" value={pickup_start_time} label="Pickup Time" type="text" placeholder="Pickup Time" icon={<BsClockFill className="h-[70%] cursor-pointer"/>}/>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-8 2xl:gap-12">
                <Input02 onChange={onChange} onClick={onClick} className="cursor-pointer" name="delivery_start_time" value={delivery_start_time} label="Delivery Time" type="text" placeholder="Delivery Time" icon={<BsClockFill className="h-[70%] cursor-pointer"/>}/>
            </div>

            <Input02 onChange={onChange} onClick={onClick} className="" name="pickup_address" value={pickup_address} label="Pickup Address" type="text" placeholder="Pickup Address" icon={<BiMap className="cursor-pointer w-4 h-4 p-0.5 rounded-full text-sm bg-gray-600 text-white"/>}/>
            <Input02 onChange={onChange} onClick={onClick} className="" name="delivery_address" value={delivery_address} label="Delivery Address" type="text" placeholder="Delivery Address" icon={<BiMap className="cursor-pointer w-4 h-4 p-0.5 rounded-full text-sm bg-gray-600 text-white"/>}/>

            <Input01 onChange={onChange} onClick={onClick} name="pickup_comment" value={pickup_comment} label="Write Comment" placeholder="Write Comment"/>

            <div className="mb-5">
                <div className="text-gray-600 text-sm font-bold mb-2">Upload Attachment</div>
                <div className="flex justify-center items-center border-dashed border-2 border-gray-400 bg-gray-200 p-5 rounded-lg text-sm">
                    Drag & Drop or <span className="text-blue-600 mx-2">Browse</span>
                </div>
            </div>

            
        </>
    )
}

export default SimpleInitForm
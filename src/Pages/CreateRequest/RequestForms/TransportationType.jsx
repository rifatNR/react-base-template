import React, { useContext, useState } from 'react'
import Input02 from '../../../Components/Input/Input02'
import Modal from '../../../Components/Modal'
import { RequestContext } from '../../../Context/RequestContext';

import { IoIosArrowForward } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { IoMdRadioButtonOn } from 'react-icons/io';

const TransportationType = () => {
    const {transport_type, ChangeValue} = useContext(RequestContext);
    const [show_transportation_modal, setTransportationModal] = useState(false)
    const [selected, setSelected] = useState(null)

    const transportation_types = [
        {
            'id': 1,
            'title': 'Home Moving'
        },
        {
            'id': 2,
            'title': 'Office Moving'
        },
        {
            'id': 3,
            'title': 'Pacel Moving'
        },
        {
            'id': 4,
            'title': 'Cool Moving'
        },
        {
            'id': 5,
            'title': 'Food Moving'
        },
        {
            'id': 6,
            'title': 'Home Moving'
        },
        {
            'id': 7,
            'title': 'Office Moving'
        },
        {
            'id': 8,
            'title': 'Pacel Moving'
        },
        {
            'id': 9,
            'title': 'Cool Moving'
        },
        {
            'id': 10,
            'title': 'Food Moving'
        },
    ]

    const submit = () => {
        const selected_transportation_type = transportation_types.find(item => item.id === selected)
        ChangeValue('transport_type', selected_transportation_type.title);
        console.log(selected_transportation_type.title);
        setTransportationModal(false)
    }
    
    return (
        <div>
            <Input02 onClick={() => setTransportationModal(true)} name="transport_type" value={transport_type} className="cursor-pointer" label="Transportation Type" type="text" placeholder="Select Transportation Type" icon={<IoIosArrowForward className="h-[70%] cursor-pointer"/>} is_readonly={true}/>
            <Modal
                show_modal={show_transportation_modal} 
                setShowModal={setTransportationModal}
                full_content={<div className="inline-block w-full max-w-3xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                    <div className="relative">
                        <AiFillCloseCircle onClick={() => setTransportationModal(false)} className="absolute top-0 right-0 text-2xl cursor-pointer text-gray-600"/>
                        <div className="text-center text-xl font-bold py-7 text-gray-700">Select Transportation Type</div>
                        <div className="h-[40vh] overflow-scroll">
                            {transportation_types.map(item => (
                                <div key={item?.id} onClick={() => setSelected(item?.id)} className={`${selected === item?.id && 'border-emerald-600'} border border-transparent flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold`}>
                                    {item?.title}
                                    {selected === item?.id ? <IoMdRadioButtonOn className="text-xl text-emerald-600"/> : <IoMdRadioButtonOff className="text-xl"/>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 w-full flex justify-center">
                        <button onClick={submit} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-36 text-sm font-medium text-white ${selected !== null ? 'bg-limadi' : 'bg-gray-400 cursor-not-allowed'} border border-transparent rounded-md`} disabled={selected === null}>
                            Submit
                        </button>
                    </div>
                </div>}
            />
        </div>
    )
    }

export default TransportationType
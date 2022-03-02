import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Modal from '../../../Components/Modal'
import StarBadge from './StarBadge'
import { NoImage } from '../../../Utility/Sources';

import { AiFillCloseCircle, AiTwotoneStar } from 'react-icons/ai'
import { MdCheckBox } from 'react-icons/md'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import Accordion from '../../../Components/Accordion';

const CompaniesForm = () => {
    const [show_modal, setShowModal] = useState(false)
    const [short_list, setShortList] = useState([])
    const [text, setText] = useState(false)
    const [stars, setStars] = useState([])
    const [toggled_accordion, setToggledAccordion] = useState('favorite') // ! favorite & global accordion

    const companies = [
        {
            'id': 1,
            'name': 'Google Inc.',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
            'rate': '5',
            'address': 'Mirpur-14, Dhaka'
        },
        {
            'id': 2,
            'name': 'Facebook',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png',
            'rate': '5',
            'address': 'Mirpur-12, Dhaka'
        },
        {
            'id': 3,
            'name': 'FEDEX',
            'image': 'https://seeklogo.com/images/F/FedEx_Express-logo-FCF4733C3B-seeklogo.com.png',
            'rate': '1',
            'address': 'Mirpur-11, Dhaka'
        },
        {
            'id': 4,
            'name': 'Microsoft',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiyugMWwmiOUi_ITjEOvdBkbgEgDba5ZZqYX80on5eo_PZeR7HtzlOdUh54GiY2avNjQ&usqp=CAU',
            'rate': '3',
            'address': 'Mirpur-10, Dhaka'
        },
        {
            'id': 5,
            'name': 'GenieInfoTech',
            'image': 'https://media-exp1.licdn.com/dms/image/C510BAQHye24yDG-AlQ/company-logo_200_200/0/1530786461730?e=2159024400&v=beta&t=3MinOOBfEkQtexSTKWlM-ByFJUmZSOqtNuqcf6GOylk',
            'rate': '2',
            'address': 'Mirpur-1, Dhaka'
        },
        {
            'id': 6,
            'name': 'Google Inc.',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
            'rate': '5',
            'address': 'Mirpur-14, Dhaka'
        },
        {
            'id': 7,
            'name': 'Facebook',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png',
            'rate': '5',
            'address': 'Mirpur-12, Dhaka'
        },
        {
            'id': 8,
            'name': 'FEDEX',
            'image': 'https://seeklogo.com/images/F/FedEx_Express-logo-FCF4733C3B-seeklogo.com.png',
            'rate': '1',
            'address': 'Mirpur-11, Dhaka'
        },
        {
            'id': 9,
            'name': 'Microsoft',
            'image': 'https://enc3333rypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiyugMWwmiOUi_ITjEOvdBkbgEgDba5ZZqYX80on5eo_PZeR7HtzlOdUh54GiY2avNjQ&usqp=CAU',
            'rate': '3',
            'address': 'Mirpur-10, Dhaka'
        },
        {
            'id': 10,
            'name': 'GenieInfoTech',
            'image': 'https://media-exp1.licdn.com/dms/image/C510BAQHye24yDG-AlQ/company-logo_200_200/0/1530786461730?e=2159024400&v=beta&t=3MinOOBfEkQtexSTKWlM-ByFJUmZSOqtNuqcf6GOylk',
            'rate': '2',
            'address': 'Mirpur-1, Dhaka'
        },
    ]

    const apply = () => {

    }

    useEffect(() => {
      console.log(toggled_accordion);
    }, [toggled_accordion])
    

    const selectStar = (rate) => {
        if(stars.includes(rate)) setStars(stars.filter(star => star !== rate))
        else setStars([...stars, rate])
    }
    const makeShortList = (id) => {
        if(short_list.includes(id)) setShortList(short_list.filter(star => star !== id))
        else setShortList([...short_list, id])
    }

    return (
        <div>
            <div className="flex justify-between space-x-8">
                <div onClick={() => setShowModal(true)} className="relative w-full flex items-center cursor-pointer">
                <BsSearch className="absolute right-4 text-gray-500"/>
                <div className="py-2 px-3 w-full pr-12 rounded-lg bg-gray-100 text-gray-600 outline-none">Search</div>
                </div>
                <button className="text-sm text-red-400 font-semibold">Clear</button>
            </div>

            <div className="mt-2">
                <Accordion
                    accordion_type='dependent'
                    isInitOpen={toggled_accordion === 'favorite' ? true : false}
                    customOnClick={() => setToggledAccordion('favorite')}
                    header={<div className="text-lg font-semibold py-2 text-gray-700">Favorite Companies (10)</div>}
                    body={
                        <div className="h-[40vh] overflow-scroll">
                            {companies.map(item => (
                                <div key={item?.id} onClick={() => makeShortList(item?.id)} className={`${short_list === item?.id && 'border-limadi'} border border-transparent flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold`}>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                            <img className="" src={item?.image} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=NoImage}}/>
                                        </div>
                                        <div>
                                            <div>{item?.name}</div>
                                            <div className="flex items-center text-md font-extralight"><AiTwotoneStar className="mr-2 text-lg text-limadi"/> {item?.rate}</div>
                                        </div>
                                    </div>
                                    {short_list.includes(item?.id) ? <MdCheckBox className="text-xl text-emerald-600"/> : <MdCheckBoxOutlineBlank className="text-xl"/>}
                                </div>
                            ))}
                        </div>
                    }
                />
                <Accordion
                    accordion_type='dependent'
                    isInitOpen={toggled_accordion === 'global' ? true : false}
                    customOnClick={() => setToggledAccordion('global')}
                    header={<div className="text-lg font-semibold py-2 text-gray-700">Global Companies (15)</div>}
                    body={
                        <div className="h-[40vh] overflow-scroll">
                            {companies.map(item => (
                                <div key={item?.id} onClick={() => makeShortList(item?.id)} className={`${short_list === item?.id && 'border-limadi'} border border-transparent flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold`}>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                            <img className="" src={item?.image} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=NoImage}}/>
                                        </div>
                                        <div>
                                            <div>{item?.name}</div>
                                            <div className="flex items-center text-md font-extralight"><AiTwotoneStar className="mr-2 text-lg text-limadi"/> {item?.rate}</div>
                                        </div>
                                    </div>
                                    {short_list.includes(item?.id) ? <MdCheckBox className="text-xl text-emerald-600"/> : <MdCheckBoxOutlineBlank className="text-xl"/>}
                                </div>
                            ))}
                        </div>
                    }
                />
            </div>

            <Modal
                show_modal={show_modal} 
                setShowModal={setShowModal}
                full_content={<div className="inline-block w-full max-w-3xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                    <div className="relative">
                        <AiFillCloseCircle onClick={() => setShowModal(false)} className="absolute top-0 right-0 text-2xl cursor-pointer text-gray-600"/>
                        <div className="text-xl font-bold py-2 text-gray-700 mb-5">Search Company</div>

                        <div className="relative w-full flex items-center">
                            <BsSearch className="absolute right-4 text-gray-500 border-l border-gray-400 pl-3 w-7 h-[60%]"/>
                            <input onChange={(e) => setText(e.target.value())} type="search" placeholder="Search..." className="py-2 px-3 w-full pr-16 rounded-lg bg-gray-100 text-gray-600 outline-none"/>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8 mt-5">
                        <div className="flex justify-between w-full">
                            <StarBadge rate={1} stars={stars} selectStar={selectStar}/>
                            <StarBadge rate={2} stars={stars} selectStar={selectStar}/>
                            <StarBadge rate={3} stars={stars} selectStar={selectStar}/>
                            <StarBadge rate={4} stars={stars} selectStar={selectStar}/>
                            <StarBadge rate={5} stars={stars} selectStar={selectStar}/>
                        </div>
                        <button onClick={() => setStars([])} className="text-sm text-limadi font-semibold py-2">Clear</button>
                    </div>

                    <div className="mt-10">
                        <div className="text-md font-bold py-2 text-gray-700 mb-5">Suggested</div>
                        
                        <div className="h-[40vh] overflow-scroll">
                            {companies.map(item => (
                                <div key={item?.id} onClick={() => makeShortList(item?.id)} className={`${short_list === item?.id && 'border-limadi'} border border-transparent flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold`}>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                            <img className="" src={item?.image} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=NoImage}}/>
                                        </div>
                                        <div>
                                            <div>{item?.name}</div>
                                            <div className="flex items-center text-md font-extralight"><AiTwotoneStar className="mr-2 text-lg text-limadi"/> {item?.rate}</div>
                                        </div>
                                    </div>
                                    {short_list.includes(item?.id) ? <MdCheckBox className="text-xl text-emerald-600"/> : <MdCheckBoxOutlineBlank className="text-xl"/>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 w-full flex justify-center">
                        <button onClick={apply} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-36 text-sm font-medium text-white bg-limadi rounded-md`}>
                            Apply
                        </button>
                    </div>
                </div>}
            />

        </div>
    )
}

export default CompaniesForm
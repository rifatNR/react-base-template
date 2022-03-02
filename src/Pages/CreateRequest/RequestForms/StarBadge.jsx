import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

const StarBadge = ({title, rate, stars, selectStar}) => {
  return (
    <div onClick={() => selectStar(rate)} className={`${stars.includes(rate) ? 'bg-limadi text-white' : 'text-gray-500'} flex justify-between items-center border  rounded-full px-2 md:px-3 py-1 cursor-pointer text-sm`}>
       <AiTwotoneStar className={`${stars.includes(rate) ? 'text-white' : 'text-limadi'} text-xl mr-1 md:mr-2`}/>
       {rate} <span className="hidden sm:block ml-1">Star</span>
    </div>
  )
}

export default StarBadge
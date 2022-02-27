import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({search}) => {
  return (
    <div className="relative text-gray-600">
        <span className="flex item-center z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <BsSearch className="text-gray-500"/>
        </span>
        <input onChange={(e) => search(e.target.value, e)} className="border-2 border-gray-400 bg-white w-36 md:w-64 h-10 px-5 pl-10 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
    </div>
  )
}

export default Search
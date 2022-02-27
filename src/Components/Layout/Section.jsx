import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({isSidebarOpen = true, url = '/', icon, title, is_active = false}) => {
  return (
    <Link to={url} className={`flex justify-start items-center text-sm font-semibold px-7 py-2 mb-4 text-gray-800 cursor-pointer hover:text-limadi ${is_active && 'bg-gray-100 text-limadi'}`}>
        <div className={`flex justify-start items-center transition-all ${isSidebarOpen ? 'text-xl mr-2' : 'text-2xl'}`}>
          {icon}
        </div>
        {isSidebarOpen && title}
    </Link>
  )
}

export default Section
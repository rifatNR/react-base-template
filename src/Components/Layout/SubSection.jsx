import React from 'react'
import { Link } from 'react-router-dom'

const SubSection = ({isSidebarOpen, url = '/', icon, title, is_active = false}) => {
  return (
    <Link to={url} className={`flex justify-start items-center text-sm font-semibold ${isSidebarOpen ? 'px-7' : ''} py-2 mb-1 text-gray-800 cursor-pointer hover:text-limadi ${is_active && 'bg-gray-100 text-limadi'}`}>
        <div className={`flex justify-start items-center transition-all ${isSidebarOpen ? 'text-lg mr-2' : 'text-lg'}`}>
          {icon}
        </div>
        {isSidebarOpen && title}
    </Link>
  )
}

export default SubSection
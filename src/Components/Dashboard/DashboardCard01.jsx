import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const DashboardCard01 = ({is_selected, title, number, icon, cardClick, type, selected_card}) => {
  return (
    <div onClick={() => cardClick(type)} className={`relative flex flex-col justify-center items-center bg-white p-4 shadow rounded-lg py-8 cursor-pointer border ${selected_card === type && 'border-limadi'}`}>
        <div className="absolute top-1 right-1">
          <FiExternalLink className="text-2xl"/>
        </div>
        {title && <div className="text-2xl font-bold text-gray-800">{title}</div>}
        {title && number && <div className="mb-5"></div>}
        {number && <div className="text-5xl font-extrabold text-gray-700">{number}</div>}
    </div>
  )
}

export default DashboardCard01
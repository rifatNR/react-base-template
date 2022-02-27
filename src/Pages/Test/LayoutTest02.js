import React from 'react'

// Icons
import { MdHomeFilled } from 'react-icons/md';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Images & Icons
import logo from "../../Images/logo_with_slogan.png"

const LayoutTest02 = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">

        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white">

            <div className="sidebar-header flex items-center justify-center py-4">
                <Link to="/" className="inline-flex flex-row items-center">
                    <div className="h-10">
                        <img src={logo} alt="" className='w-36'/>
                    </div>
                </Link>
            </div>

            <div>

                <div className='flex justify-end mb-5'>
                    <div className='bg-gray-300 p-1 inline cursor-pointer'>
                        <FaAngleDoubleLeft className='text-gray-700'/>
                    </div>
                </div>
                
                <div className='flex justify-start items-center px-7 text-gray-800 cursor-pointer hover:text-limadi'>
                    <MdHomeFilled className='text-2xl mr-2'/> Home
                </div>
            </div>

        </aside>

        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">

            <header className="header bg-white shadow py-4 px-4">
                <div className="header-content flex items-center flex-row">
                    <div className="flex ml-auto">
                        <a href="/" className="flex flex-row items-center">
                        <img src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png" alt="Not Found" className="h-10 w-10 bg-gray-200 border rounded-full"/>
                        </a>
                    </div>
                </div>
            </header>
        </main>
    </div>
  )
}

export default LayoutTest02
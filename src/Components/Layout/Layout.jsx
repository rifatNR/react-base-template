import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <main className="main flex items-end flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in w-full">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <div className="container mx-auto">
              {props.children}
            </div>
        </main>
    </div>
  )
}

export default Layout
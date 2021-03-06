import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    // console.log(width);

    if(width <= 875) setIsSidebarOpen(false)
    else setIsSidebarOpen(true)
    
  }, [width])
  
  
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <main className="main flex items-end flex-col flex-grow transition-all duration-150 ease-in w-full">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <div className={`w-full ${isSidebarOpen ? 'pl-64' : 'pl-20'} pt-[4.5rem]`}>
              <div className="m-2 sm:m-4 md:m-8 lg:m-10 xl:m-12">
                {props.children}
              </div>
            </div>
        </main>
    </div>
  )
}

export default Layout
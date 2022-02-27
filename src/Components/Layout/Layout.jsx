import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <Header/>
            <div className="container mx-auto">
              {props.children}
            </div>
        </main>
    </div>
  )
}

export default Layout
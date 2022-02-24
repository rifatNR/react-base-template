import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
                <Sidebar/>
            </div>
            <main className="col-span-10 h-full">
                {props.children}
            </main>
        </div>
    </div>
  )
}

export default Layout
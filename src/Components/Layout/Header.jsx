import React from 'react'
import Notification from '../Notification/Notification'
import ProfileDropdown from '../Profile/ProfileDropdown'
import Search from '../Search'

const Header = ({isSidebarOpen, setIsSidebarOpen}) => {

  const search = (text, e) => {
    console.log(text);
  }
  
  return (
    <header className={`header bg-white shadow fixed w-full z-40 transition-all ${isSidebarOpen ? 'pl-0 md:pl-64' : 'pl-20'}`}>
        <div className="py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <Search search={search}/>

            <div className="flex justify-between items-center">
              <Notification/>
              <ProfileDropdown/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import Notification from '../Notification/Notification'
import ProfileDropdown from '../Profile/ProfileDropdown'
import Search from '../Search'

const Header = ({isSidebarOpen, setIsSidebarOpen}) => {

  const search = (text, e) => {
    console.log(text);
  }
  
  return (
    <header className={`header bg-white shadow fixed h-15 w-full z-20 transition-all ${isSidebarOpen ? 'pl-64' : 'pl-20'}`}>
        <div className="py-4">
          <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-12 flex justify-between items-center">
            <Search search={search}/>

            <div className="flex justify-between items-center space-x-10">
              <Notification/>
              <ProfileDropdown/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
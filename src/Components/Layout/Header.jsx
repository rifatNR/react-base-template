import React from 'react'
import Notification from '../Notification/Notification'
import ProfileDropdown from '../Profile/ProfileDropdown'

const Header = () => {
  return (
    <header className="header bg-white shadow py-4 px-4 flex justify-between items-center ">
        <div className="header-content flex items-center flex-row">
            <div className="flex ml-auto">
                <a href className="flex flex-row items-center">
                  <img src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png" alt="Not Found" className="h-10 w-10 bg-gray-200 border rounded-full"/>
                </a>
            </div>
        </div>

        <div className="flex justify-between items-center">
          <Notification/>
          <ProfileDropdown/>
        </div>
        
    </header>
  )
}

export default Header
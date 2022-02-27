import React from 'react'
import Notification from '../Notification/Notification'
import ProfileDropdown from '../Profile/ProfileDropdown'
import Search from '../Search'

const Header = () => {

  const search = (text, e) => {
    console.log(text);
  }
  
  return (
    <header className="header bg-white shadow py-4 px-4 flex justify-between items-center ">
        <Search search={search}/>

        <div className="flex justify-between items-center">
          <Notification/>
          <ProfileDropdown/>
        </div>
        
    </header>
  )
}

export default Header
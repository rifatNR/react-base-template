import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Register = (props) => {

  const {isAuth, Register} = useContext(AuthContext)
    
  const [user_data, setUserData] = useState({
      "name": '',
      "email": '',
      "password": '',
      "password_confirmation": '',
      "role": 'private',
  });
  const onChange = (e) => {setUserData({...user_data, [e.target.name]: e.target.value})}

  const onSubmit = (e) => {
      e.preventDefault()
  
      console.log(user_data);
      Register(user_data)
  }
  
  if (isAuth) return <Navigate to="/" />;
  
  return (
    <div className="flex items-center justify-center h-screen">
          <div className="text-center w-96 p-3 rounded">
              <p className="font-poppins text-4xl font-bold text-gray-700 mb-3">Sign Up</p>
              <p className="text-xl font-medium text-gray-500">Please sign in to continue</p>

              <form onSubmit={onSubmit} action="" className="mt-14">
                  <input onChange={onChange} value={user_data.name} className="px-4 py-2 mb-4 w-full rounded outline-none bg-gray-100" name="name" type="name" placeholder="Name" required />
                  <input onChange={onChange} value={user_data.email} className="px-4 py-2 mb-4 w-full rounded outline-none bg-gray-100" name="email" type="email" placeholder="Email" required />
                  <input onChange={onChange} value={user_data.password} className="px-4 py-2 mb-4 w-full rounded outline-none bg-gray-100" name="password" type="password" placeholder="Password" required />
                  <input onChange={onChange} value={user_data.password_confirmation} className="px-4 py-2 mb-4 w-full rounded outline-none bg-gray-100" name="password_confirmation" type="password" placeholder="Confirm Password" required />

                  <button type="submit" className="w-48 px-4 py-2 my-5 mx-auto rounded-md font-bold text-xl text-white bg-limadi flex justify-center">
                      {/* {auth_loading && <ImSpinner2 className="animate-spin duration-150 mr-2 font-bold text-2xl" />} */}
                      Sign Up
                  </button>

                  <p>Already have an account? <Link to="/login"><span className="text-gray-700 hover:text-limadi font-bold cursor-pointer">Sign In</span></Link></p>
                  
              </form>
          </div>
      </div>
  )
}

export default Register
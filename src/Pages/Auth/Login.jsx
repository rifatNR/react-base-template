import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import LogoLoading from '../../Utility/LogoLoading';

const Login = (props) => {

  const {isAuth, auth_loading, loading, Login, active_route} = useContext(AuthContext)
  const [showFlash, setShowFlash] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowFlash(false), 1000);
  }, [])
    
  const [user_data, setUserData] = useState({
      "email": '',
      "password": ''
  });
  const onChange = (e) => {setUserData({...user_data, [e.target.name]: e.target.value})}

  const onSubmit = (e) => {
      e.preventDefault()
  
      console.log(user_data);
      Login(user_data)
  }

  
  if(loading || showFlash) return <LogoLoading/>

  if (isAuth) return <Navigate to="/" />;
  
  return (
    <div className="flex items-center justify-center h-screen">
          <div className="text-center w-96 p-3 rounded">
              <p className="font-poppins text-4xl font-bold text-gray-700 mb-3">Sign In</p>
              <p className="text-xl font-medium text-gray-500">Please sign in to continue</p>

              <form onSubmit={onSubmit} action="" className="mt-14">
                  <input onChange={onChange} value={user_data.email} className="px-4 py-2 mb-4 w-full rounded outline-none bg-gray-100" name="email" type="email" placeholder="Email..." required />
                  <input onChange={onChange} value={user_data.password} className="px-4 py-2 mb-4 w-full rounded outline-none bg-gray-100" name="password" type="password" placeholder="Password..." required />

                  <div className="flex justify-between">
                      <span>Remember me</span>
                      <Link to="/forgot-password"><span className="text-gray-600 hover:text-limadi cursor-pointer text-bold">Forgot Password?</span></Link>
                  </div>

                  <button type="submit" className="w-48 px-4 py-2 my-5 mx-auto rounded-md font-bold text-xl text-white bg-limadi flex justify-center">
                      {/* {auth_loading && <ImSpinner2 className="animate-spin duration-150 mr-2 font-bold text-2xl" />} */}
                      Sign In
                  </button>

                  <p>Don`t have an account? <Link to="/register"><span className="text-gray-700 hover:text-limadi font-bold cursor-pointer">Sign Up</span></Link></p>
                  
              </form>
          </div>
      </div>
  )
}

export default Login
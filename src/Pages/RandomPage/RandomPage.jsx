import React from 'react'
import { Link } from 'react-router-dom'

const RandomPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div>
          <div className="text-3xl font-bold flex justify-center mb-5">Random Page</div>
          <ul>
              <li className="text-xl font-bold flex justify-center hover:text-limadi"><Link to="/">Home</Link></li>
              <li className="text-xl font-bold flex justify-center hover:text-limadi"><Link to="/about-us">About Us</Link></li>
              <li className="text-xl font-bold flex justify-center hover:text-limadi"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default RandomPage
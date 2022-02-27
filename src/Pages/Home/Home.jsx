import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

const Home = () => {
  const {user, Logout} = useContext(AuthContext)
  
  return (
    <div className="flex items-center justify-center p-4">
      <div>
        <div className="text-3xl font-bold flex justify-center mb-5">Home</div>
        <div className="text-xl font-bold flex justify-center mb-5">
            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </div>
        <div className="text-xl font-bold flex justify-center mb-5">
            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </div>
        <div className="text-xl font-bold flex justify-center mb-5">
            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </div>
        
        <div className="text-3xl font-bold flex justify-center mb-5">Home</div>
        <div className="text-xl font-bold flex justify-center">User: {user?.name}</div>
        <div className="text-xl font-bold flex justify-center">Email: {user?.email}</div>
        <div className="text-md font-bold flex justify-center hover:text-limadi underline my-4"><Link to="/random-page">Go to Random Page</Link></div>
        <button onClick={Logout} className="w-48 px-4 py-2 my-5 mx-auto rounded-md font-bold text-xl text-white bg-limadi flex justify-center">Logout</button>
      </div>
    </div>
  )
}

export default Home
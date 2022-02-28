import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardCard01 from '../../Components/Dashboard/DashboardCard01'
import { AuthContext } from '../../Context/AuthContext'

const Home = () => {
  const {user, Logout} = useContext(AuthContext)

  const [selected_card, setSelectedCard] = useState(null)

  const cardClick = (card_type) => {
    setSelectedCard(card_type)
  }
  
  return (
    <div className="flex items-center justify-center">
      <div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-4 lg:gap-4 xl:gap-7 2xl:gap-12">
          <DashboardCard01 title="Create Request" cardClick={cardClick} type={'create_request'} selected_card={selected_card}/>
          <DashboardCard01 title="In Bidding" number="12" cardClick={cardClick} type={'in_bidding'} selected_card={selected_card}/>
          <DashboardCard01 title="Awarded" number="42" cardClick={cardClick} type={'awarded'} selected_card={selected_card}/>
          <DashboardCard01 title="On Going" number="60" cardClick={cardClick} type={'ongoing'} selected_card={selected_card}/>
        </div>

        <div className="my-5"></div>
        
        <div className="text-md flex justify-center mb-5">
            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </div>
        <div className="text-md flex justify-center mb-5">
            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </div>
        <div className="text-md flex justify-center mb-5">
            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </div>
        
        <div className="text-3xl font-bold flex justify-center mb-5">Profile</div>
        <div className="text-xl font-bold flex justify-center">User: {user?.name}</div>
        <div className="text-xl font-bold flex justify-center">Email: {user?.email}</div>
        <button onClick={Logout} className="w-48 px-4 py-2 my-5 mx-auto rounded-md font-bold text-xl text-white bg-limadi flex justify-center">Logout</button>
      </div>
    </div>
  )
}

export default Home
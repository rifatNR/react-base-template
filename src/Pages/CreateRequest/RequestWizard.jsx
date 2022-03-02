import React, { useContext } from 'react'
import { RequestContext } from '../../Context/RequestContext'

import { GiCardPickup } from 'react-icons/gi'
import { FaBoxOpen } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'


import "react-datepicker/dist/react-datepicker.css";
import SimpleInitForm from './RequestForms/SimpleInitForm'
import CompaniesForm from './RequestForms/CompaniesForm'

const RequestWizard = () => {

  const {type, status, ChangeType} = useContext(RequestContext);

  console.log(status);
  
  return (
    <div className="bg-white p-2 md:p-4 shadow rounded-xl">

        {type === 'simple' && <div className="grid grid-cols-2 gap-4 w-full mb-5 text-gray-400 pb-4 border-b border-gray-200">
              <div className={`relative flex flex-col justify-center items-center text-sm ${['init', 'companies', 'summery'].includes(status) && 'text-gray-700'}`}>
                <GiCardPickup className="text-3xl mb-4"/> Pick Up
                <IoIosArrowForward className="absolute right-1 h-full"/>
              </div>
              <div className={`relative flex flex-col justify-center items-center text-sm ${['companies', 'summery'].includes(status) && 'text-gray-700'}`}>
                <BsBuilding className="text-3xl mb-4"/> Companies
              </div>
        </div>}

        {type === 'advance' && <div className="grid grid-cols-3 gap-4 w-full mb-5 text-gray-400 pb-4 border-b border-gray-200">
              <div className={`relative flex flex-col justify-center items-center text-sm ${['pickup1', 'pickup2', 'companies', 'summery'].includes(status) && 'text-gray-700'}`}>
                <GiCardPickup className="text-3xl mb-4"/> Pick Up
                <IoIosArrowForward className="absolute right-1 h-full"/>
              </div>
              <div className={`relative flex flex-col justify-center items-center text-sm ${['pickup2', 'companies', 'summery'].includes(status) && 'text-gray-700'}`}>
                <FaBoxOpen className="text-3xl mb-4"/> Package Details
                <IoIosArrowForward className="absolute right-1 h-full"/>
              </div>
              <div className={`relative flex flex-col justify-center items-center text-sm ${['companies', 'summery'].includes(status) && 'text-gray-700'}`}>
                <BsBuilding className="text-3xl mb-4"/> Companies
              </div>
          </div>}


          {['init', 'pickup1', 'pickup2'].includes(status) && <div className="flex justify-center space-x-7 mb-4">
            <button onClick={() => ChangeType('simple')} className={`border border-gray-200 w-48 py-2 rounded-lg ${type === 'simple' && 'bg-gray-200'}`}>Simple</button>
            <button onClick={() => ChangeType('advance')} className={`border border-gray-200 w-48 py-2 rounded-lg ${type === 'advance' && 'bg-gray-200'}`}>Advanced</button>
          </div>}

          {type ===  'simple' && <div className="px-2">
            {['init'].includes(status) && <SimpleInitForm/>}
            {['companies'].includes(status) && <CompaniesForm/>}
          </div>}

    </div>
  )
}

export default RequestWizard
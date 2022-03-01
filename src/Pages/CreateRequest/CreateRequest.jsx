import React from 'react'
import RequestWizard from './RequestWizard'
import Summery from './Summery'

const CreateRequest = () => {

  
  
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-8 2xl:gap-12">
      <div className="col-span-12 lg:col-span-7">
        <RequestWizard/>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <Summery/>
      </div>
    </div>
  )
}

export default CreateRequest
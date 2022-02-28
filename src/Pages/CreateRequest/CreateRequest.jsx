import React from 'react'
import RequestWizard from './RequestWizard'
import Summery from './Summery'

const CreateRequest = () => {

  
  
  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-8">
        <RequestWizard/>
      </div>
      <div className="col-span-4">
        <Summery/>
      </div>
    </div>
  )
}

export default CreateRequest
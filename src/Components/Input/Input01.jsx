import React from 'react'

const Input01 = ({onClick, onChange, name, label, placeholder}) => {
  return (
    <div className="mb-5">
        <div className="text-gray-600 text-sm font-bold mb-2">{label}</div>
        <input onClick={onClick} onChange={onChange} type="text" name={name} className="bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md" placeholder={placeholder}/>
    </div>
  )
}

export default Input01
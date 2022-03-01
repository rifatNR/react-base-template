import React from 'react'

const Input02 = ({onClick, onChange, className = "", type="text", name, label, placeholder, icon, custom_input, is_disabled, is_readonly, no_pipe}) => {

    return (
        <div className="mb-5">
            <div className="text-gray-600 text-sm font-bold mb-2">{label}</div>
            <div className="relative flex justify-center items-center">
                {custom_input ? custom_input : (
                    <input onClick={onClick} onChange={onChange} type={type} name={name} className={`bg-gray-100 px-4 py-2 w-full text-sm outline-none rounded-md ${className}`} placeholder={placeholder} disabled={is_disabled} readOnly={is_readonly}/>
                )}
                <div className={`absolute right-1 px-2 ${!no_pipe && 'border-l'} border-gray-300 text-gray-600`}>
                    {icon}
                </div>
            </div>
        </div>
      )
}

export default Input02
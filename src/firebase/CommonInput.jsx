import React from 'react'

const CommonInput = ({type, placeholder, value, name, onChange, className}) => {
  return <input 
    type={type || "text"}
    placeholder={placeholder || "Enter value here"}
    name={name}
    value={value}
    onChange={onChange}
    className={className || "w-full block px-5 py-2 mt-2 text-black border-2 border-red-600 focus:border-red-400 rounded-sm"}
  />
}

export default CommonInput

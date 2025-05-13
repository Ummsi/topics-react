import React from 'react'

const Button = ({label, borderColor, bgColor}) => {
  return (
    <div>
      <button className={`border-2 ${borderColor ? borderColor : 'border-indigo-500'} ${ bgColor ? bgColor:'bg-indigo-500 text-white'
      } rounded-md px-4 py-1 cursor-pointer hover:bg-indigo-600 `}>{label}</button>
    </div>
  )
}

export default Button

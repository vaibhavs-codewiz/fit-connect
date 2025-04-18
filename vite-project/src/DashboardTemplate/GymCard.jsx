import React from 'react'

const GymCard = () => {
  return (
      <div className='bg-gray-500  rounded-md m-2 text-white w-38 h-52 overflow-x-hidden'>
          <img src="https://plus.unsplash.com/premium_photo-1671631630555-1cb3ffa7dfe6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <h2 className='text-xs m-1'>this is dummy card
          </h2>
          <button onClick={() => {

          }} className='bg-amber-400 text-white text-xs rounded-md px-3 py-1 m-3'>click</button>
      </div>
  )
}

export default GymCard
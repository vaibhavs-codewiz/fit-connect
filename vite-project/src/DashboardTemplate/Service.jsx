import React from 'react'
import GymCards from './GymCards'

const Service = () => {
  return (
    <div className='w-full h-full bg-zinc-700 flex flex-col items-center'>
      <div className="border rounded-md p-4 w-[95%] flex flex-wrap mt-8 bg-[var(--primary-color)] border-none">no service used currently ...</div>
    <GymCards />
    </div>
  )
}

export default Service
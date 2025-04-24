import React from 'react'
import GymCard from './GymCard'

const GymCards = () => {
  return (
      <div className="border rounded-md p-4 w-[95%] h-[70%] border-none overflow-auto flex flex-wrap mt-8 bg-[var(--primary-color)]">
          <GymCard />
          <GymCard />
          
      </div>
  )
}

export default GymCards
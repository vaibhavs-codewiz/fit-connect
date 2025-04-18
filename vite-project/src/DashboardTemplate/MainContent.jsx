import React from 'react'
import ProfileCard from './ProfileCard'
import Service from './Service'
import ServiceHistory from './ServiceHistory'

const MainContent = ({active}) => {
  const components = {
    Service,
    ServiceHistory,
    ProfileCard
  };
  const ActiveComponent = components[active];
  return (
    <div className='bg-[#1c1c1c] h-full flex flex-col justify-center items-center'>
      {ActiveComponent ? <ActiveComponent /> : <p className="text-white">Component not found</p>}
    </div>
  )
}

export default MainContent
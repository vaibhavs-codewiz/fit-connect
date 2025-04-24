import React from 'react'
import ProfileCard from './ProfileCard'
import Service from './Service'
import ServiceHistory from './ServiceHistory'
import ExploreGyms from './ExploreGyms'

const MainContent = ({ data, active }) => {
  console.log("main content", data)
  const components = {
    Service,
    ServiceHistory,
    ProfileCard,
    ExploreGyms
  };
  const ActiveComponent = components[active];
  return (
    <div className='bg-[#1c1c1c] h-full flex flex-col justify-center items-center '>
      {ActiveComponent ? <ActiveComponent data={data} /> : <p className="text-white">Component not found</p>}
    </div>
  )
}

export default MainContent
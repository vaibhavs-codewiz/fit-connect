import Information from "./template/Information"
import Image_overlay from "./template/Image_overlay"
import { HeroSection } from "./HeroSection"
import CardHoverEffectDemo from "./CardHoverEffectDemo"
import GymComponent from "./GymComponent"
import { useRef } from "react"
const Home = () => {
  const homeRef = useRef(null);
  const gymRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="h-[280vh] w-screen bg-cover bg-center bg-no-repeat object-center"
      style={{ backgroundImage: "url('../../public/gymbg2.jpg')" }}
    >
      <div ref={homeRef}>
        <HeroSection scrollTargets={{ homeRef, gymRef, reviewRef, contactRef }} />
      </div>
      {/* gyms you can have */}
      <div ref={gymRef}>
      <div className="h-auto bg-[var(--primary-color)]  text-center text-[var(--text-color)] text-6xl text-bold flex flex-col justify-center items-center gap-[100px]">
        <h1 className=" flex flex-col justify-center items-center mt-8 -mb-12">Explore Gyms at MEFIT !</h1>
        <GymComponent />
      </div>
      </div>
      {/* review section */}
      <div ref={reviewRef} className="h-[135vh] bg-[var(--background-color)] text-center text-[var(--text-color)] text-6xl text-bold flex flex-col justify-center items-center gap-[100px]">
        <h1>Hear from our awesome users!</h1>

        {/* <Review /> */}
        <CardHoverEffectDemo />
      </div>
      {/* image */}
      <Image_overlay />
      {/* information section */}
      <div ref={contactRef}>
        <Information />
      </div>
      <div className="w-full h-16 bg-zinc-800 text-white flex items-center justify-center px-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-[#C8AD7F]">Contact for good work ...</h2>
        <p className="text-sm text-gray-300"><span className="text-lg font-semibold">...</span> vaibhavsharma00721@gmail.com</p>
      </div>
    </div>
  )
}

export default Home;
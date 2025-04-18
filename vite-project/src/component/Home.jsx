import Information from "./template/Information"
import Image_overlay from "./template/Image_overlay"
import { HeroSection } from "./HeroSection"
import CardHoverEffectDemo from "./CardHoverEffectDemo"
import GymComponent from "./GymComponent"
const Home = () => {
  return (
    <div className="h-[280vh] w-screen bg-cover bg-center bg-no-repeat object-center"
      style={{ backgroundImage: "url('../../public/gymbg2.jpg')" }}
    >

      <HeroSection />
        {/* gyms you can have */}
      <div className="h-auto bg-[var(--primary-color)]  text-center text-[var(--text-color)] text-6xl text-bold flex flex-col justify-center items-center gap-[100px]"> 
      <h1 className=" flex flex-col justify-center items-center mt-8 -mb-12">Explore Gyms at MEFIT !</h1>
          <GymComponent />
      </div>

      {/* review section */}
      <div className="h-[135vh] bg-[var(--background-color)] text-center text-[var(--text-color)] text-6xl text-bold flex flex-col justify-center items-center gap-[100px]">
        <h1>Hear from our awesome users!</h1>

        {/* <Review /> */}
        <CardHoverEffectDemo />
      </div>
      {/* image */}
      <Image_overlay />
      {/* information section */}
      <Information />

    </div>
  )
}

export default Home;
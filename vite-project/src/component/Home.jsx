import Navbar from "./template/Navbar"
import MainContainer from "./template/MainContainer"
import Information from "./template/Information"
import Review from "./template/Review"
import ScrollingText from "./template/ScrollingText"
import Image_overlay from "./template/Image_overlay"
const Home = () => {
  return (
    <div className="h-[240vh] w-screen bg-cover bg-center bg-no-repeat object-center"
      style={{ backgroundImage: "url('../../public/gymbg2.jpg')" }}
    >
      <Navbar />
      {/* Main container */}
      <div className="h-[80vh] w-[80vw] mx-auto flex flex-col mt-[16vh]">
        <MainContainer />
      </div>

      {/* scrolling text */}
      <ScrollingText />

      {/* review section */}
      <div className="h-[100vh] bg-[#1c1c1c] text-center text-[#FAF9F6] text-6xl text-bold flex flex-col justify-center items-center gap-[100px]">
        <h1>Hear from our awesome users!</h1>
        <Review />
      </div>
      {/* image */}
      <Image_overlay />
      {/* information section */}
      <Information />
    </div>
  )
}

export default Home;
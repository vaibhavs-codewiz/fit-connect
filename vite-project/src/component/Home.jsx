import Navbar from "./template/Navbar"
import MainContainer from "./template/MainContainer"
import Information from "./template/Information"
import Review from "./template/Review"
const Home = () => {
  return (
    <div className="h-[240vh] w-screen">
      <Navbar />
      {/* Main container */}
      <div className="h-[80vh] w-[80vw] mx-auto flex flex-col mt-[16vh]">       
         <MainContainer />
         {/* image section */}
        <div className="h-[30vh] bg-blue-400 overflow-hidden">
          <img src="../../public/gymBG.jpg" alt="" />
        </div>
      </div>
      {/* information section */}
      <Information />

      {/* review section */}
      <div className="h-[100vh] bg-[#FAF9F6] text-center text-6xl text-bold flex flex-col justify-center items-center gap-[100px]">
         <h1>Hear from our awesome users!</h1>
         <Review />
      </div>
     
    </div>
  )
}

export default Home
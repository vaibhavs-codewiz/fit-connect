import Navbar from "./template/Navbar"
import MainContainer from "./template/MainContainer"
import Information from "./template/Information"
const Home = () => {
  return (
    <div className="h-[300vh] w-screen">
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
     
    </div>
  )
}

export default Home
import { Route,Routes } from "react-router-dom"
import Home from "./component/Home"
const App = () => {
  return (
    <div className="bg-[#FAF9F6] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
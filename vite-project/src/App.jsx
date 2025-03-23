import { Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login"
import RegisterPage from "./RegisterTemplate/UserRegisterPage";
import { RegisterProvider } from "./component/context/RegisterContext"; // Wrap your app with context
import UserDashboard from "./DashboardTemplate/UserDashboard";
import Explore from "./UserSpecific/Explore";
import History from "./UserSpecific/History";
import GymExplore from "./UserSpecific/GymExplore";

const App = () => {
  return (
    <RegisterProvider>
      <div className="bg-[#FAF9F6] w-screen h-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/register" element={<RegisterPage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/UserDashboard" element={<UserDashboard />} />
          <Route path="/users/explore" element={<Explore />} />
          <Route path="/users/history" element={<History />} />
          <Route path="/users/explore/:id" element={<GymExplore />} />

        </Routes>
      </div>
    </RegisterProvider>
  );
};

export default App;

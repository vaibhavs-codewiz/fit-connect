import { Routes, Route } from 'react-router-dom';
import GymExplore from '../UserSpecific/GymExplore';
import Home from "../component/Home";
import Login from "../component/Login";
import RegisterPage from "../RegisterTemplate/UserRegisterPage";
import UserDashboard from "../DashboardTemplate/UserDashboard";
import Explore from "../UserSpecific/Explore";
import History from "../UserSpecific/History";

//gym imports
import GymRegisterPage from '../RegisterTemplate/GymRegister';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/register" element={<RegisterPage />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/UserDashboard" element={<UserDashboard />} />
      <Route path="/users/explore" element={<Explore />} />
      <Route path="/users/history" element={<History />} />
      <Route path="/users/explore/:id" element={<GymExplore />} />

      {/* gym owner routes */}
      <Route path="/GymOwner/register" element={<GymRegisterPage />} />
    </Routes>
  )
}

export default Routing;
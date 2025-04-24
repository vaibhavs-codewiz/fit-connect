import { Routes, Route } from 'react-router-dom';
import GymExplore from '../UserSpecific/GymExplore';
import Home from "../component/Home";
import Login from "../LoginTemplate/Login";
import RegisterPage from "../RegisterTemplate/UserRegisterPage";
import UserDashboard from "../DashboardTemplate/UserDashboard/UserDashboard";
import Explore from "../UserSpecific/Explore";
import History from "../UserSpecific/History";
import GymLogin from '../LoginTemplate/GymLogin';

//gym imports
import GymRegisterPage from '../RegisterTemplate/GymRegister';
import GymOwnerDashboard from '../DashboardTemplate/GymOwnerDashboard/GymOwnerDashboard';
import GymDetails from '../DashboardTemplate/UserDashboard/GymDetails';
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
      <Route path="/GymOwner/login" element={<GymLogin />} />
      <Route path="/GymOwner/GymDashboard" element={<GymOwnerDashboard />} />
      {/* the explore page in userDashboard uses this component */}
      <Route path="/gym/:gymId" element={<GymDetails />} />
    </Routes>
  )
}

export default Routing;
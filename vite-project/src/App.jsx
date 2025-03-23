import { Route, Routes } from "react-router-dom";
// import ReactDOM from "react-dom/client";
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
/*
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);


*/
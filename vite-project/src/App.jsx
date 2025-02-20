import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import RegisterPage from "./component/RegisterPage";
import { RegisterProvider } from "./component/context/RegisterContext"; // Wrap your app with context

const App = () => {
  return (
    <RegisterProvider>
      <div className="bg-[#FAF9F6] w-screen h-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </RegisterProvider>
  );
};

export default App;

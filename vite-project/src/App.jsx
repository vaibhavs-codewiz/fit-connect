import Routing from "./utils/Routing";
import { RegisterProvider } from "./component/context/RegisterContext"; 

const App = () => {
  return (
    <RegisterProvider>
      <div className="bg-[#FAF9F6] w-screen h-screen flex">
       <Routing />
      </div>
    </RegisterProvider>
  );
};

export default App;

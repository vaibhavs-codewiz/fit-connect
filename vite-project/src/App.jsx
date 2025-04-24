import Routing from "./utils/Routing";
import { RegisterProvider } from "./component/context/RegisterContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <RegisterProvider>
      <>
        <div className="bg-[#FAF9F6] w-screen h-screen flex">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Routing />
        </div>
      </>
    </RegisterProvider>
  );
};

export default App;

import UserRegisterPage from "../RegisterTemplate/UserRegisterPage";
import { useRegister } from "./context/RegisterContext";

const RegisterPage = () => {
  const { role } = useRegister();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        {role === "User" && 
        <div 
            className="flex flex-col justify-center items-center mx-auto w-screen min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('../../public/UserGymBg.jpg')"}}
        >
            <UserRegisterPage />
          </div>
        }
        {role === "GymOwner" && <h2 className="text-2xl font-bold">Gym Owner Registration</h2>}
      </div>
    </div>
  );
};

export default RegisterPage;

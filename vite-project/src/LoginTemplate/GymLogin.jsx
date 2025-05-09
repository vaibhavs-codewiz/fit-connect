import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../config/api"; // Your Axios instance
import { toast } from "react-toastify";

const GymLogin = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/GymOwner/register");
    }

    const onSubmit = async (data) => {
        console.log("Gym login attempt:", data);
        try {
            console.log(data);
            const response = await api.get(`/Gym/login/${data.email}/${data.password}`); // POST with body

            console.log("Gym login response:", response.data);
            if (response.data.responseCode === "00000") {
                toast.success("logged in successfully 🎉")
                // Store gymOwnerId in localStorage
                localStorage.setItem("gymOwnerId", response.data.gymId); // store the gymOwnerId
                navigate("/GymOwner/GymDashboard");
            } else {
                toast.error("wrong credentials ❌")
            }
        } catch (error) {
            console.error("Login error:", error.message);
            toast.error("failed login due to server error ❌", error)
        }
    };


    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#000000] text-[#FAF9F6]">
            <div className="w-full max-w-md bg-[#1c1c1c] p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                    <img
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Logo"
                        className="mx-auto h-10 w-10"
                    />
                    <h2 className="mt-6 text-2xl font-bold">Sign in to your Gym Owner account</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            className="w-full p-2 rounded-md border border-[#C8AD7F] bg-transparent text-[#FAF9F6] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                            className="w-full p-2 rounded-md border border-[#C8AD7F] bg-transparent text-[#FAF9F6] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#C8AD7F] text-[#1c1c1c] font-semibold p-2 rounded-md hover:bg-[#b3986c] transition"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm">
                    Not a Gym Owner yet?{" "}
                    <a onClick={handleNavigation} href="#" className="text-[#C8AD7F] hover:underline">
                        Register now
                    </a>
                </p>
            </div>
        </div>
    );
};

export default GymLogin;

import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../config/api"; // adjust path if needed


const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log("Attempting login with:", data);
        try {
            const response = await api.post("/user/login", data); // using your custom Axios instance
            console.log("Login response:", response.data);
            if (response.data.responseCode === "00000") {
                alert("Login Successful!");
                localStorage.setItem("user", JSON.stringify(response.data.userDto));
                navigate("/users/UserDashboard");
            } else {
                alert("Login Failed: " + response.data.responseMessage);
            }
        } catch (error) {
            console.error("Login error:", error.message);
            alert("Login failed due to server error or bad credentials!");
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
                    <h2 className="mt-6 text-2xl font-bold">Sign in to your account</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            className="w-full p-2 rounded-md border border-[#C8AD7F] bg-transparent text-[#FAF9F6] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                            className="w-full p-2 rounded-md border border-[#C8AD7F] bg-transparent text-[#FAF9F6] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]"
                        />
                    </div>

                    {/* Submit Button */}
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
                    Not a member?{" "}
                    <a href="#" className="text-[#C8AD7F] hover:underline">
                        Start your journey
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;

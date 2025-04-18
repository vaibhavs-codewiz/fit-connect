import { useForm } from "react-hook-form";
import api from '../config/api';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const GymRegisterPage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (formData) => {
        try {
            const response = await api.post('/Gym/save', formData);
            console.log('Gym registered successfully:', response.data);
            alert('Gym Registration Successful!');
            reset();
        } catch (error) {
            console.error('Gym registration failed:', error.message);
            alert('Gym Registration Failed! Check console for details.');
        }
    };

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen w-full"
            style={{
                backgroundColor: "#000000",
                color: "#FAF9F6",
                fontFamily: "sans-serif",
            }}
        >
            <div className="w-full max-w-4xl bg-[#1c1c1c] p-10 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full cursor-pointer" onClick={handleNavigate}><FaArrowLeft size={21} /></h1>
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-4 text-3xl font-bold text-[#C8AD7F]">Register Your Gym</h2>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Gym Name */}
                        <div>
                            <label className="block text-sm mb-1">Gym Name</label>
                            <input type="text" {...register("name", { required: true })} placeholder="Gym Name" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm mb-1">Address</label>
                            <input type="text" {...register("address", { required: true })} placeholder="Gym Address" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>

                        {/* Owner Name */}
                        <div>
                            <label className="block text-sm mb-1">Owner Name</label>
                            <input type="text" {...register("ownerName", { required: true })} placeholder="Owner Name" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label className="block text-sm mb-1">Contact Number</label>
                            <input type="tel" {...register("contactNo", { required: true })} placeholder="Contact Number" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>

                        {/* Monthly Fee */}
                        <div>
                            <label className="block text-sm mb-1">Monthly Fee</label>
                            <input type="number" {...register("monthlyFee", { required: true })} placeholder="e.g., 1200" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>

                        {/* Daily Fee */}
                        <div>
                            <label className="block text-sm mb-1">Daily Fee</label>
                            <input type="number" {...register("dailyFee", { required: true })} placeholder="e.g., 100" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F] focus:outline-none focus:ring-2 focus:ring-[#C8AD7F]" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="w-full rounded-md bg-[#C8AD7F] p-2 text-[#1c1c1c] font-semibold hover:bg-[#b49c6e] transition duration-200">
                            Register Gym
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GymRegisterPage;

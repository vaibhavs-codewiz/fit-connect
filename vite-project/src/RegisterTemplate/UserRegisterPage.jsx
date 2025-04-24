import { useForm } from "react-hook-form";
import api from '../config/api';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      console.log("Submitting form data:", formData);
      const response = await api.post('/user/save', formData);//checked
      console.log('User registered successfully:', response.data);
      alert('Registration Successful!');
      reset();
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed! Check console for details.');
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  }
  
  const handleNavigateLogin = () => {
    navigate('/users/login');
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#000000] text-[#FAF9F6]">
      <div className="bg-[#1c1c1c] p-10 rounded-xl shadow-lg w-[90%] max-w-5xl">
        <h1 className="cursor-pointer w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full" onClick={handleNavigate}><FaArrowLeft /></h1>
        <div className="text-center mb-8">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#C8AD7F]">
            Create your account
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input type="text" {...register("name", { required: true })} placeholder="Full Name" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input type="email" {...register("email", { required: true })} placeholder="Email" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input type="text" {...register("address", { required: true })} placeholder="Address" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-sm font-medium">Gender</label>
            <select {...register("gender", { required: true })} className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-1 text-sm font-medium">Contact Number</label>
            <input type="tel" {...register("contactNo", { required: true })} placeholder="Phone Number" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Height */}
          <div>
            <label className="block mb-1 text-sm font-medium">Height (cm)</label>
            <input type="number" {...register("height", { required: true })} placeholder="Height" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Weight */}
          <div>
            <label className="block mb-1 text-sm font-medium">Weight (kg)</label>
            <input type="number" {...register("weight", { required: true })} placeholder="Weight" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Create Password</label>
            <input type="password" {...register("password", { required: true })} placeholder="Password" className="w-full rounded-md border p-2 bg-[#000000] text-[#FAF9F6] border-[#C8AD7F]" />
          </div>

          {/* Submit Button (full width across 2 columns) */}
          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-md bg-[#C8AD7F] text-[#000000] font-semibold py-3 hover:bg-[#b99c65] transition">
              Register
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-[#FAF9F6]">
          Already have an account?{' '}
          <a href="#" className="text-[#C8AD7F] font-semibold hover:underline" onClick={() => handleNavigateLogin()}>Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

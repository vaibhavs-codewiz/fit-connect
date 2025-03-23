import { useState } from "react";
// import axios from "axios";
import {  useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (role, e) => {
    console.log(role)
    e.preventDefault();
    console.log("Sending request to backend with:", user);
    try {
      // const response = await axios.post("http://localhost:8083/api/users/register", user);
      //console.log("Full Response:", response); // 👀 Debug here
      navigate(`/${role}/login`);
    } catch (error) {
      console.error("Axios Error:", error);
      console.error("Full Error Response:", error.response);
      alert("Registration failed: " + (error.response?.data || "No response from server"));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="bg-amber-200" onSubmit={(e) => (handleSubmit("users", e))}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;


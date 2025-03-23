import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    //const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("sending request ot backend with data ", credentials)
        try {
            //const response = await axios.post("http://localhost:8083/api/users/login", credentials);
            //setUserData(response.data);
            alert("Login Successful!");
            navigate("/users/UserDashboard");
        } catch (error) {
            console.log("due to wrong credentials." + error)
            alert("Invalid email or password!");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>

        </div>
    );
};

export default Login;


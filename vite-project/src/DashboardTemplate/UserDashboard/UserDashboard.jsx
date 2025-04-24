import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import MainContent from './MainContent';
import { useState, useEffect } from 'react';
import api from '../../config/api';
const UserDashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();

    let [active, setActive] = useState("Service");
    let handleActive = (active) => {
        setActive(active);
    }
    const userEmail = JSON.parse(localStorage.getItem("user"));
    console.log(userEmail)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await api.get(`/user/details/${userEmail}`);
                setData(response.data);
                console.log("User details response:", response.data);
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch user details:", error.message);
            }
        };

        fetchDetails();
    }, []);


    return (
        <div className='w-full h-screen overflow-auto flex'>
            <div className=''>
                <Sidebar details={{ data, handleActive }} />
            </div>
            <div className='w-full flex flex-col'>
                <TopNav data={data} />
                <div className='w-full flex flex-col h-full'>
                    <MainContent data={data} active={active} />
                </div>
            </div>
        </div>
    )
}

export default UserDashboard
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import MainContent from './MainContent';
import { useState } from 'react';
const UserDashboard = () => {
    const navigate = useNavigate();

    let [active, setActive] = useState("Service");
    let handleActive = (active) =>{
        setActive(active);
    }
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className='w-full h-screen overflow-auto flex'>
         <div className=''>
                <Sidebar details={{ user, handleActive }} />
         </div>
         <div className='w-full flex flex-col'>
                <TopNav user={user} />
        <div className='w-full flex flex-col h-full'>
                    <MainContent user={user}  active={active} />
        </div>
         </div>
        </div>
    )
}

export default UserDashboard
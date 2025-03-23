import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    const navigate = useNavigate();
    return (
        <div>UserDashboard
            <div className='m-2 flex gap-2 p-4 bg-gray-400 rounded-md'>
                <button className='bg-green-200 p-3 rounded-md' onClick={() => (navigate("/users/explore"))}>Explore</button>
                <button className='bg-red-200 p-3 rounded-md' onClick={() => (navigate("/users/history"))}>History</button>
            </div>
        </div>
    )
}

export default UserDashboard
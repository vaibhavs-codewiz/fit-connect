import { useEffect, useState } from 'react';
import api from '../config/api';

const GymComponent = () => {
    const [gyms, setGyms] = useState([1, 2, 3]);

    useEffect(() => {
        const fetchGyms = async () => {
            try {
                const response = await api.get('/Gym/all'); // adjust endpoint if needed
                setGyms(response.data.responseData);
                console.log("gyms are :" + gyms)
                console.log(response.data.responseData);
            } catch (error) {
                console.error("Failed to fetch gyms:", error.message);
            }
        };

        fetchGyms();
    }, []);

    return (
        <div className="flex flex-wrap   justify-center gap-6 p-5 bg-[#2c2c2c]">
            {gyms.map((gym, index) => (
                <div
                    key={index}
                    className="w-80 rounded-lg bg-black shadow-xl p-4 text-center relative font-sans"
                    style={{
                        background: '#000000',
                        color: '#FAF9F6',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {/* Header icons */}


                    {/* Logo Placeholder */}
                    <div className="text-sm font-bold mb-1 mt-6"><br />LOGO 🏋️</div>

                    {/* Gym Image */}
                    <div className="mx-auto w-32 h-32 rounded overflow-hidden border-4 border-black my-4">
                        <img
                            src="https://media.istockphoto.com/id/2170450588/photo/interior-of-modern-light-gym-is-well-equipped-with-modern-machines-and-fitness-gear-offering.jpg?s=1024x1024&w=is&k=20&c=SVm6faIII4bVB49sEq92dsHgN4pnI27g_rsD0HG506o=" // replace with a gym-themed static image
                            alt="Gym Owner"
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>

                    {/* Name */}
                    <div className="text-lg font-bold text-[#C8AD7F]">{gym.name}</div>

                    {/* Owner Position */}
                    <div className="text-sm text-[#FAF9F6] mb-2">Owner: {gym.ownerName}</div>

                    {/* Contact Info */}
                    <div className="text-sm text-[#FAF9F6]">Email: {gym.email}</div>
                    <div className="text-sm text-[#FAF9F6]">Location: {gym.address}</div>

                    {/* Footer */}
                    <div className="mt-4 text-xs text-[#FAF9F6] italic">
                        www.health&fitness.com
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GymComponent;

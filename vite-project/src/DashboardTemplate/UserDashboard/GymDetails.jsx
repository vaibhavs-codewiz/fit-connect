import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../config/api';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-multi-date-picker";

const GymDetails = () => {
    const { gymId } = useParams();
    const navigate = useNavigate();
    const [gym, setGym] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const [subscription, setSubscription] = useState({
        userEmail: '',
        gymId: gymId,
        dates: [],
        subscriptionType: '',
    });

    const [responseMsg, setResponseMsg] = useState('');

    useEffect(() => {
        const fetchGym = async () => {
            try {
                const response = await api.get(`/Gym/${gymId}`);
                setGym(response.data);
            } catch (error) {
                console.error("Failed to fetch gym details:", error.message);
            }
        };
        fetchGym();
    }, [gymId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSubscription({ ...subscription, [name]: value });
    };

    const handleDateChange = (selectedDates) => {
        setSubscription({ ...subscription, dates: selectedDates });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(subscription);
        try {
            const payload = {
                ...subscription,
                dates: subscription.dates.map(timestamp =>
                    new Date(timestamp).toISOString().split('T')[0]
                ),
            };

            const res = await api.post('/user/gym/subscribe', payload);
            setResponseMsg(res.data.message || 'Subscription successful!');
            toast.info("Payment handling is in progress. 👨💻");
            toast.success("Subscribed successfully");
        } catch (error) {
            setResponseMsg(error.response?.data?.message || 'Subscription failed.');
            toast.error("Subscription failed");
        }
    };



    if (!gym) return <div className="bg-zinc-800 min-h-screen text-white p-10">Loading...</div>;

    return (
        <div className="bg-black min-h-screen min-w-screen text-[#FAF9F6] font-sans">
            {/* Banner Section */}
            <div className="relative h-[380px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1723117417879-2effcca63cda?q=80&w=2070&auto=format&fit=crop"
                    alt="Gym Banner"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
                    <span className="text-sm bg-[#C8AD7F] text-black px-4 py-2 rounded-md font-bold mb-2">
                        {gym.gymName}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                        Elevate<br />Your Fitness<br />Journey
                    </h1>
                    <p className="mt-4 text-sm max-w-md">
                        Experience the ultimate fitness environment at {gym.gymName} and unlock your full potential. Our state-of-the-art facility is designed to transform both your body and mind.
                    </p>
                </div>
                <div className="absolute top-9 right-11 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-1.5 bg-[#C8AD7F] text-black text-sm font-bold rounded hover:bg-[#e0c290] transition"
                    >
                        ← Back to Explore
                    </button>
                </div>
            </div>

            <div className="p-8 space-y-10 max-w-4xl mx-auto">
                {/* Gym Info */}
                <h2 className="text-xl font-bold mb-6 text-[#C8AD7F]">Gym Information:</h2>
                <div className="bg-zinc-800 rounded-xl p-6 text-sm shadow-lg grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
                    <p><strong className="text-white">Gym Name:</strong> {gym.gymName}</p>
                    <p><strong className="text-white">Address:</strong> {gym.address}</p>
                    <p><strong className="text-white">Owner:</strong> {gym.ownerName}</p>
                    <p><strong className="text-white">Contact No:</strong> {gym.contactNo}</p>
                    <p><strong className="text-white">Email:</strong> {gym.email}</p>
                    <p><strong className="text-white">Monthly Fee:</strong> ₹{gym.monthlyFee}</p>
                    <p><strong className="text-white">Daily Fee:</strong> ₹{gym.dailyFee}</p>
                </div>

                {/* Facilities */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-[#C8AD7F]">Our Facilities:</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Cutting-edge Equipments', 'Spacious Fitness Studio', 'Cardio & Strength Classes', 'Personal Trainer'].map((facility, index) => (
                            <span key={index} className="border px-4 py-2 rounded-full">{facility}</span>
                        ))}
                    </div>
                </div>

                {/* Classes */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-[#C8AD7F]">Available Classes:</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Cycling Adventures', 'HIIT', 'Zumba Fitness Parties', 'Yoga & Pilates Fusion'].map((cls, index) => (
                            <span key={index} className="border px-4 py-2 rounded-full">{cls}</span>
                        ))}
                    </div>
                </div>

                {/* Membership CTA */}
                <div className="bg-[#FF6A3D] text-black p-6 rounded-xl shadow-md text-center cursor-pointer"
                    onClick={() => setShowForm(prev => !prev)}>
                    <h3 className="font-bold text-lg">CLICK 👆 TO JOIN OUR MEMBERSHIP NOW AND GET 15% OFF</h3>
                    <p className="text-sm mt-2">Available from 1–10 January 2027</p>
                </div>

                {/* Subscription Form */}
                {showForm && (
                    <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded-xl shadow-md text-sm space-y-4">
                        <h2 className="text-lg font-bold text-[#C8AD7F] mb-4">Subscribe to {gym.gymName}</h2>

                        <input
                            type="email"
                            name="userEmail"
                            placeholder="Your Email"
                            value={subscription.userEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 rounded bg-zinc-700 text-white"
                        />

                        <label className="block mb-1 text-white">Select Dates</label>
                        <DatePicker
                            multiple
                            value={subscription.dates}
                            onChange={(dates) => setSubscription({ ...subscription, dates })}
                            format="YYYY-MM-DD"
                            className="bg-zinc-700 text-white p-2 rounded w-full"
                        />


                        <select
                            name="subscriptionType"
                            value={subscription.subscriptionType}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 rounded bg-zinc-700 text-white"
                        >
                            <option value="">Select Subscription Type</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Daily">Daily</option>
                        </select>

                        <button
                            type="submit"
                            className="bg-[#C8AD7F] text-black px-4 py-2 rounded hover:bg-[#e0c290]"
                        >
                            Submit Subscription
                        </button>

                        {responseMsg && (
                            <div className="mt-4 text-center text-green-400 font-medium">
                                {responseMsg}
                            </div>
                        )}
                    </form>
                )}

                {/* Reviews */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-6 text-[#C8AD7F]">What Members Say:</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[1, 2, 3, 4].map((num, index) => (
                            <div key={index} className="bg-zinc-800 p-6 rounded-xl shadow-md text-center">
                                <img
                                    src={`https://source.unsplash.com/80x80/?person,fitness,${num}`}
                                    alt={`User ${num}`}
                                    className="h-16 w-16 mx-auto rounded-full mb-4 object-cover"
                                />
                                <p className="text-sm">
                                    {[
                                        "Amazing equipment and vibe! The trainers are really motivating. I've never felt better.",
                                        "Love the Zumba classes! It’s the perfect mix of fun and sweat.",
                                        "Facilities are top-notch and super clean. Definitely recommend Iron Paradise!",
                                        "A great environment to push your limits and stay consistent."
                                    ][index]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymDetails;

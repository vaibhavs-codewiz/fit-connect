import { useEffect, useState } from 'react';
import api from '../../config/api'; // adjust the path if needed
import { toast } from 'react-toastify';
import TrainerForm from './TrainerForm';
import TrainerCard from './TrainerCard';

const GymOwnerDashboard = () => {
  const [gym, setGymDetails] = useState(null);

  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        const storedGymOwnerId = localStorage.getItem('gymOwnerId'); // Fetch gymOwnerId from localStorage
        console.log("Stored Gym Owner ID:", storedGymOwnerId); // Check if the ID is correct
        if (!storedGymOwnerId) {
          console.error("No gym owner ID found in localStorage.");
          return;
        }

        // Fetch gym details using gymOwnerId (no encoding needed)
        const response = await api.get(`/Gym/${storedGymOwnerId}`);
        setGymDetails(response.data);
        console.log(response.data)
        toast.success("details fetched successfully");
      } catch (error) {
        if (error.response) {
          toast.error("Error fetching gym details:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      }
    };

    fetchGymDetails();
  }, []);

  return (
    <div className="bg-black min-h-screen min-w-screen text-[#FAF9F6] font-sans">
      {/* Banner Image with overlay */}
      <div className="relative h-[380px] w-full">
        <img
          src="https://images.unsplash.com/photo-1723117417879-2effcca63cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gym Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
          <span className="text-sm bg-[#C8AD7F] text-black px-4 py-2 rounded-md font-bold mb-2">
            {gym?.gymName}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            Elevate<br />Your Fitness<br />Journey
          </h1>
          <p className="mt-4 text-sm max-w-md">
            Experience the ultimate fitness environment at {gym?.gymName} and unlock your full potential. Our state-of-the-art facility is designed to transform both your body and mind.
          </p>
        </div>

      </div>

      <div className="p-8 space-y-10 max-w-4xl mx-auto">
        {/* gym information */}
        <h2 className="text-xl font-bold mb-6 text-[#C8AD7F]">Gym Information:</h2>
        <div className="bg-zinc-800 rounded-xl p-6 text-sm text-[#FAF9F6] shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
            {gym && (
              <>
                <p><span className="font-semibold text-white">Gym Name:</span> {gym.gymName}</p>
                <p><span className="font-semibold text-white">Address:</span> {gym.address}</p>
                <p><span className="font-semibold text-white">Owner:</span> {gym.ownerName}</p>
                <p><span className="font-semibold text-white">Contact No:</span> {gym.contactNumber}</p>
                <p><span className="font-semibold text-white">Email:</span> {gym.email}</p>
                <p><span className="font-semibold text-white">Monthly Fee:</span> ₹{gym.monthlyFee}</p>
                <p><span className="font-semibold text-white">Daily Fee:</span> ₹{gym.dailyFee}</p>
              </>
            )}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#C8AD7F]">Our Facilities:</h2>
          <div className="flex flex-wrap gap-4">
            <span className="border px-4 py-2 rounded-full">Cutting-edge Equipments</span>
            <span className="border px-4 py-2 rounded-full">Spacious Fitness Studio</span>
            <span className="border px-4 py-2 rounded-full">Cardio & Strength Classes</span>
            <span className="border px-4 py-2 rounded-full">Personal Trainer</span>
          </div>
        </div>

        {/* Available Classes */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#C8AD7F]">Available Classes:</h2>
          <div className="flex flex-wrap gap-4">
            <span className="border px-4 py-2 rounded-full">Cycling Adventures</span>
            <span className="border px-4 py-2 rounded-full">HIIT</span>
            <span className="border px-4 py-2 rounded-full">Zumba Fitness Parties</span>
            <span className="border px-4 py-2 rounded-full">Yoga & Pilates Fusion</span>
          </div>
        </div>

        {/* Membership Box */}
        <div className="bg-[#FF6A3D] text-black p-6 rounded-xl shadow-md text-center"
        >
          <h3 className="font-bold text-lg">JOIN OUR MEMBERSHIP NOW AND GET 15% OFF</h3>
          <p className="text-sm mt-2">Available from 1-10 January 2027</p>
        </div>
        {/*{showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-800 p-6 rounded-xl shadow-md text-sm space-y-4"
          >
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

            <input
              type="date"
              name="startDate"
              value={subscription.startDate}
              onChange={handleInputChange}
              required
              className="w-full p-2 rounded bg-zinc-700 text-white"
            />

            <input
              type="date"
              name="endDate"
              value={subscription.endDate}
              onChange={handleInputChange}
              required
              className="w-full p-2 rounded bg-zinc-700 text-white"
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
        )} */}

        {/* trainers */}
        <TrainerForm />

        {/* review portion */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6 text-[#C8AD7F]">What Members Say:</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Review 1 */}
            <div className="bg-zinc-800 text-[#FAF9F6] p-6 rounded-xl shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1729343120898-150933add237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXIlMjBwcm9maWxlJTIwZ2lybCUyMGFzaWFuJTIwc291dGh8ZW58MHx8MHx8fDA%3D"
                alt="User 1"
                className="h-16 w-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-sm">
                “Amazing equipment and vibe! The trainers are really motivating. Ive never felt better.”
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-zinc-800 text-[#FAF9F6] p-6 rounded-xl shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1590650618955-d682df736c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User 2"
                className="h-16 w-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-sm">
                “Love the Zumba classes! It’s the perfect mix of fun and sweat.”
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-zinc-800 text-[#FAF9F6] p-6 rounded-xl shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1676083192960-2a4873858487?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User 3"
                className="h-16 w-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-sm">
                “Facilities are top-notch and super clean. Definitely recommend Iron Paradise!”
              </p>
            </div>

            {/* Review 4 */}
            <div className="bg-zinc-800 text-[#FAF9F6] p-6 rounded-xl shadow-md text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User 4"
                className="h-16 w-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-sm">
                “Great community and support. I’ve already hit my fitness goals in 2 months!”
              </p>
            </div>
          </div>
        </div>

        {/* Trainer card */}
        {/* <TrainerCard trainer={ } /> */}

        {/* Contact Info */}
        <div className="text-center text-sm mt-8 bg-zinc-800 text-zinc-400">
          <p>For more information, contact us at:</p>
          <p className="text-white">{gym?.contactNo}</p>
          <p className="text-white">address : {gym?.address}</p>
        </div>

        {/* Back Button */}

      </div>
    </div>
  );
};

export default GymOwnerDashboard;

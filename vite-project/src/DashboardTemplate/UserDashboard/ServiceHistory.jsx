import { useEffect, useState } from "react"
import api from "../../config/api";

const ServiceHistory = () => {
  const [availGym, setAvailGym] = useState([]);
  const email = JSON.parse(localStorage.getItem("user"));
  console.log(email)
  useEffect(
    () => {
      const fetchGyms = async () => {
        try {
          const response = await api.get(`user/subscriptions/${email}`);
          setAvailGym(response.data);
          console.log(response.data);
        }
        catch (error) {
          console.log("catch the error while get request ", error.message)
        }
      };
      fetchGyms();
    }
    , []
  )
  return (
    <div>
      <h2 className="text-[#C8AD7F] text-2xl font-semibold m-2">gyms you have avail !!</h2>
      <div className="flex flex-wrap justify-center rounded-md w-[70vw] h-[70vh] overflow-auto gap-6 p-5 bg-[#2c2c2c] ">
        {
          availGym.map(
            (gym, index) => {
              return (
                <>
                  <div key={index} className="bg-zinc-800 text-[#FAF9F6] rounded-xl shadow-lg p-6 max-w-md mx-auto w-80">
                    {/* Gym Image */}
                    <div className="mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1723117417879-2effcca63cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Gym"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-[#C8AD7F]">{`Welcome, ${gym.userName}`}</h2>
                      <p><span className="font-semibold text-white">Gym Name:</span> {gym.gymName}</p>
                      <p><span className="font-semibold text-white">Address:</span>{gym.gymAddress}</p>
                      <p><span className="font-semibold text-white">Subscription charge:</span>{gym.paymentAmount}</p>
                      <p><span className="font-semibold text-white">Start Date:</span>{gym.startDate}</p>
                      <p><span className="font-semibold text-white">End Date:</span>{gym.endDate}</p>
                      <p><span className="font-semibold text-white">booking duration:</span>{gym.bookingDays}</p>
                    </div>
                  </div>
                </>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default ServiceHistory
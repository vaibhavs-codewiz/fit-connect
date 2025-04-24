import UserGymChart from './UserGymChart';
import { useEffect, useState } from 'react';
import api from '../../config/api';
import dayjs from 'dayjs';

const Service = () => {
  const [chartData, setChartData] = useState([]);
  const userMail = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await api.get(`/user/subscriptions/${userMail}`);
        const fetchedData = response.data;

        const bookingMap = {};

        fetchedData.forEach(item => {
          const start = dayjs(item.startDate);
          const end = dayjs(item.endDate);
          const diffDays = end.diff(start, 'day');

          if (bookingMap[item.gymName]) {
            bookingMap[item.gymName] += diffDays;
          } else {
            bookingMap[item.gymName] = diffDays;
          }
        });

        const chartReadyData = Object.entries(bookingMap).map(([gymName, bookingDays]) => ({
          name: gymName,
          value: bookingDays
        }));

        setChartData(chartReadyData);
      } catch (error) {
        console.error("Failed to fetch gyms in Service:", error.message);
      }
    };

    fetchGyms();
  }, [userMail]);

  return (
    <div className="w-full min-h-screen bg-zinc-900 p-6 text-white">
      <div className="max-w-4xl mx-auto bg-zinc-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Your Booking Distribution Across Gyms
        </h2>
        <p className="text-center text-zinc-300 mb-4">
          This chart shows what percentage of total bookings you've made at each gym.
        </p>
        <div className="w-full h-[400px]">
          <UserGymChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Service;

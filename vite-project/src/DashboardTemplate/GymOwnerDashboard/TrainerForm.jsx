import { useState } from 'react';
import api from '../../config/api';
import { toast } from 'react-toastify';

const TrainerForm = () => {
    const storedGymOwnerId = localStorage.getItem('gymOwnerId');

    const [trainer, setTrainer] = useState({
        name: '',
        contactNo: '',
        email: '',
        acheivements: '',
        gymId: storedGymOwnerId || '',
    });

    const [responseMsg, setResponseMsg] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
        setTrainer({
            ...trainer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post(
                '/Gym/trainer/save',
                trainer
            );

            setResponseMsg(response.data.message || 'Trainer added successfully!');
            toast.success("new trainer added successfully 🎉")
            setTrainer({
                name: '',
                contactNo: '',
                email: '',
                acheivements: '',
                gymId: storedGymOwnerId || '',
            });
        } catch (error) {
            console.error(error);
            toast.error("error in adding new trainer ❌")
            setResponseMsg('Failed to add trainer.');
        }
    };

    return (
        showForm && (
            <form
                onSubmit={handleSubmit}
                className="bg-zinc-800 p-6 rounded-xl shadow-md text-sm space-y-4"
            >
                <h2 className="text-lg font-bold text-[#C8AD7F] mb-4">Add New Trainer</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Trainer Name"
                    value={trainer.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-zinc-700 text-white"
                />

                <input
                    type="text"
                    name="contactNo"
                    placeholder="Contact Number"
                    value={trainer.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-zinc-700 text-white"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={trainer.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-zinc-700 text-white"
                />

                <textarea
                    name="acheivements"
                    placeholder="Achievements"
                    value={trainer.acheivements}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-zinc-700 text-white"
                />
                <span className='font-semibold text-[#C8AD7F]'>Gym Id</span>
                <input
                    type="text"
                    name="gymId"
                    value={trainer.gymId}
                    readOnly

                    className="w-full mt-2 p-2 rounded bg-zinc-700 text-white opacity-50 cursor-not-allowed"
                />

                <button
                    type="submit"
                    className="bg-[#C8AD7F] text-black px-4 py-2 rounded hover:bg-[#e0c290]"
                >
                    Submit Trainer
                </button>

                {responseMsg && (
                    <div className="mt-4 text-center text-green-400 font-medium">
                        {responseMsg}
                    </div>
                )}
            </form>
        )
    );
};

export default TrainerForm;

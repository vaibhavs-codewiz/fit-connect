const TrainerCard = ({ trainer }) => {
    return (
        <div className="bg-zinc-800 text-white p-6 rounded-xl shadow-md space-y-2 w-full max-w-md">
            <h3 className="text-xl font-bold text-[#C8AD7F] mb-2">{trainer.name}</h3>

            <p><span className="font-semibold text-gray-300">Email:</span> {trainer.email}</p>
            <p><span className="font-semibold text-gray-300">Contact No:</span> {trainer.contactNo}</p>
            <p><span className="font-semibold text-gray-300">Achievements:</span> {trainer.acheivements}</p>
            <p><span className="font-semibold text-gray-300">Gym ID:</span> {trainer.gymId}</p>
        </div>
    );
};

export default TrainerCard;

const ProfileCard = () => {
    const user = JSON.parse(localStorage.getItem("user")); // or pass as prop

    if (!user) return <div className="text-white">No user data found.</div>;

    return (
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-800 max-w-3xl mx-auto">
            {/* Top - Profile Name and Avatar */}
            <div className="flex items-center gap-6 mb-6">
                <img
                    src=""
                    alt="img from DB"
                    className="w-20 h-20 rounded-full border-2 border-gray-700"
                />
                <div>
                    <h2 className="text-2xl font-bold capitalize">{user.name}</h2>
                    <p className="text-gray-400">{user.email}</p>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoItem label="Address" value={user.address} />
                <InfoItem label="Contact No" value={user.contactNo} />
                <InfoItem label="Gender" value={user.gender} />
                <InfoItem label="Height" value={`${user.height} cm`} />
                <InfoItem label="Weight" value={`${user.weight} kg`} />
            </div>
        </div>
    );
};

// Reusable info item
const InfoItem = ({ label, value }) => (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-lg font-medium">{value}</p>
    </div>
);

export default ProfileCard;

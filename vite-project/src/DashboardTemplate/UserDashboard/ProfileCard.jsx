const ProfileCard = ({ data }) => {
    console.log("profile card :", data);
    if (!data) return <div className="text-white">No user data found.</div>;

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
                    <h2 className="text-2xl font-bold capitalize">{data.name}</h2>
                    <p className="text-gray-400">{data.email}</p>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoItem label="Address" value={data.address} />
                <InfoItem label="Contact No" value={data.contactNo} />
                <InfoItem label="Gender" value={data.gender} />
                <InfoItem label="Height" value={`${data.height} cm`} />
                <InfoItem label="Weight" value={`${data.weight} kg`} />
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

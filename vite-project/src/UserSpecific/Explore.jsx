import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
    const data = [
        { id: 1, name: "gymHolic" },
        { id: 2, name: "rockWay" },
        { id: 3, name: "vinod" },
        { id: 4, name: "mefit" },
        { id: 5, name: "fitConnect" },
        { id: 5, name: "fitConnect" }
    ];

    let navigate = useNavigate();

    let handleExplore = (id) => {
        console.log(id);
        navigate(`/users/explore/${id}`);
    }
    return (
        <div className="flex flex-col w-screen">
            <div className="">Explore</div>
            <div className="h-90 w-full flex flex-col justify-center items-center gap-3 bg-gray-300">
                {
                    data.map(item => (
                        <div key={item.id} onClick={() => handleExplore(item.id)} className="w-[30vw] text-center bg-amber-300 p-3 font-bold">{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Explore
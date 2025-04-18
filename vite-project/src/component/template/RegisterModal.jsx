import { useState } from 'react';
import { Button, Modal } from 'antd';
import { useRegister } from "../context/RegisterContext";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setRole } = useRegister();
    const navigate = useNavigate();

    const handleSelection = (selectedRole) => {

        console.log(selectedRole);
        setRole(selectedRole);
        setIsModalOpen(false);
        navigate(`/${selectedRole}/register`);

    };

    return (
        <>
            <Button type="primary" size="large"
                className="theme-button"
                onClick={() => setIsModalOpen(true)}
            >
                Register
            </Button>

            <Modal
                title="Select Role"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null} // Remove default OK/Cancel buttons
            >
                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-[#bcb293] text-white px-4 py-2 rounded-lg"
                        
                        onClick={() => handleSelection("Users")}
                    >
                        Register as User
                    </button>
                    <button
                        className="bg-[#bcb293] text-white px-4 py-2 rounded-lg"
                        onClick={() => handleSelection("GymOwner")}
                    >
                        Register as Gym Owner
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default RegisterModal;

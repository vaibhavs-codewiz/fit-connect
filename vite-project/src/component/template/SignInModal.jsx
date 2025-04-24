import { useState } from 'react';
import { Button, Modal } from 'antd';
import { useNavigate } from "react-router-dom";

const SignInModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLoginSelection = (selectedRole) => {
        setIsModalOpen(false);
        navigate(`/${selectedRole}/login`);
    };

    return (
        <>
            <Button type="primary" size="large"
                className="theme-button"
                onClick={() => setIsModalOpen(true)}
            >
                Sign In
            </Button>

            <Modal
                title="Select Role to Sign In"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-[#bcb293] text-white px-4 py-2 rounded-lg"
                        onClick={() => handleLoginSelection("users")}
                    >
                        Sign In as User
                    </button>
                    <button
                        className="bg-[#bcb293] text-white px-4 py-2 rounded-lg"
                        onClick={() => handleLoginSelection("GymOwner")}
                    >
                        Sign In as Gym Owner
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default SignInModal;

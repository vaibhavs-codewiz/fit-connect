import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  return (
    <RegisterContext.Provider value={{ role, setRole }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);

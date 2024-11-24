import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(() => !!localStorage.getItem("user_id"));

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    setIsLogin(!!storedUserId); // Update isLogin based on local storage
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

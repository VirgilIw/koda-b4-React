import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [email, setEmail] = React.useState(null);

  React.useEffect(() => {
    const dataEmail = window.localStorage.getItem("email");
    if (dataEmail) {
      setEmail(dataEmail);
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const logIn = (userEmail) => {
    setIsLoggedIn(true);
    window.localStorage.setItem("email", userEmail);
    setEmail(userEmail);
    setIsLoading(false);
  };
  const logOut = () => {
    setIsLoggedIn(false);
    setIsLoading(true);
    window.localStorage.removeItem("email");
  };

  const AuthContextValue = {
    isLoggedIn,
    isLoading,
    email,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

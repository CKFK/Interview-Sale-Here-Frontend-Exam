import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="app">
      <img
        className="logo"
        src="/proxumer-icon.png"
        onClick={handleBackToHome}
      />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;

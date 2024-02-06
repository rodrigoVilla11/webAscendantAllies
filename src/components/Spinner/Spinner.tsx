import React, { ReactNode } from "react";
import "./styles.css";

interface SpinnerProps {
  children: ReactNode;
}

const Spinner: React.FC<SpinnerProps> = ({ children }) => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="content">      
      {children}    
      </div>
    </div>
  );
};

export default Spinner;

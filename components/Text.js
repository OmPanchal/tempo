import React from "react";

const Text = ({ size, fontFamily, className, children }) => {
  return (
    <p
      className={`text-${size || "lg"} 
                font-[${fontFamily || "WorkSansRegular"}] ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;

import React from "react";

const Card = ({ width, height, className, children }) => {
  return (
    <div
      className={`w-${width || "fit"} 
                  h-${height || "fit"}
                  p-4 rounded-lg bg-light ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

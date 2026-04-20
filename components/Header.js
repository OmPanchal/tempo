import React from "react";
import Text from "./Text";

const Header = ({ size, fontFamily, className, children }) => {
  return (
    <Text
      size={size || "8xl"}
      fontFamily={fontFamily || "WorkSansBold"}
      className={className}
    >
      {children}
    </Text>
  );
};

export default Header;

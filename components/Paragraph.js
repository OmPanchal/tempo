import React from "react";
import Text from "./Text";

const Paragraph = ({ size, fontFamily, className, children }) => {
  return (
    <Text
      size={size || "lg"}
      fontFamily={fontFamily || "WorkSansRegular"}
      className={className}
    >
      {children}
    </Text>
  );
};

export default Paragraph;

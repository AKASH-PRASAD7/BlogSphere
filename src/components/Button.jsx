import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-cyan-500",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-2 py-2 rounded-xl ${className}${bgColor}${textColor}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

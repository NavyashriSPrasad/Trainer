import React from "react";

const Button = ({ children, onClick, variant = "default", size = "md", ...props }) => {
  const classes = {
    default: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
    destructive: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",
  };
  return (
    <button onClick={onClick} className={`${classes[variant]} text-${size}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

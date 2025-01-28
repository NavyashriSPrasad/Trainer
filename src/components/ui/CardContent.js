import React from "react";

const CardContent = ({ children, className = "" }) => (
  <div className={`mt-2 ${className}`}>{children}</div>
);

export default CardContent;

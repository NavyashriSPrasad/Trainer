import React from "react";

const Dialog = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded p-4">{children}</div>
    </div>
  );
};

export default Dialog;

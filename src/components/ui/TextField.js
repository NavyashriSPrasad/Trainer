import React from "react";

const TextField = ({ label, value, onChange, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border rounded p-2 w-full"
      {...props}
    />
  </div>
);

export default TextField;

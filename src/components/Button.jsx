import React from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <button
      className={`px-3 py-1 mr-2 rounded-lg ${
        active ? "bg-white text-black" : "bg-customBackground text-white"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;

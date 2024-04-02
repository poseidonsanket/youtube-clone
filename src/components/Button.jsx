import React, { useEffect } from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <button
      className={`md:px-3 md:py-1 md:mr-2 rounded-lg w-fit mr-2 h-[40px] p-2 ${
        active ? "bg-white text-black" : "bg-customBackground text-white"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;

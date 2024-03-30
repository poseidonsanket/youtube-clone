import React from "react";

const Button = ({name}) => {
  return (
    <div className="overflow-x-auto">
      <button className="px-4 py-2 m-2 bg-customBackground rounded-lg">{name}</button>
    </div>
  );
};

export default Button;

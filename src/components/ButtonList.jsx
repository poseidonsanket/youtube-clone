import React, { useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Indian Premiere League",
    "Live",
    "Soccer",
    "Football",
    "Cricket",
    "Cooking",
    "Adventure",
    "Valentine",
    "Romance",
    "Racing",
    "Rap",
    "Music",
  ];

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="flex items-center">
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {list.map((name, index) => (
            <Button
              key={index}
              name={name}
              active={activeButton === index}
              onClick={() => handleButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonList;

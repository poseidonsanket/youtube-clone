import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { activateButton } from "../utils/videoSlice";

const ButtonList = () => {
  const dispatch = useDispatch();
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

  const handleButtonClick = (index, name) => {
    setActiveButton(index);
    dispatch(activateButton(name));
    console.log(name);
  };

  return (
    <div className="flex items-center ml-4">
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {list.map((name, index) => (
            <Button
              key={index}
              name={name}
              active={activeButton === index}
              onClick={() => handleButtonClick(index, name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonList;

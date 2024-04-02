import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { activateButton } from "../utils/videoSlice";

const ButtonList = () => {
  const dispatch = useDispatch();
  const list = [
    "All",
    "Gaming",
    "IPL",
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
  };

  return (
    <div className="md:flex md:items-center md:ml-4 ml-4 hidden">
      <div className="flex overflow-x-auto no-scrollbar md:max-w-screen max-w-screen">
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

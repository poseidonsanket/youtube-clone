import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
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
  return (
    <div className="flex items-center">
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {list.map((list, index) => (
            <Button key={index} name={list} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonList;

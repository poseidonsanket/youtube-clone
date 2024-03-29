import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
    "Cricket",
    "Cooking",
    "Adventure",
    "Valentine",
    "Romance",
  ];
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    // Add event listener to check scroll position
    const handleScroll = () => {
      if (scrollRef.current.scrollLeft === 0) {
        setIsAtStart(true);
      } else {
        setIsAtStart(false);
      }
    };
    scrollRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200, // Adjust this value as needed to control the scroll distance
      behavior: "smooth",
    });
    setIsAtStart(false);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center" ref={scrollRef}>
      {!isAtStart && (
        <div className="flex justify-start">
          <MdKeyboardArrowLeft className="text-lg" onClick={scrollLeft} />
        </div>
      )}
      <div className="flex overflow-x-auto no-scrollbar" ref={scrollRef}>
        <div className="flex">
          {list.map((list, index) => (
            <Button key={index} name={list} />
          ))}
        </div>
      </div>
      <div className="">
        <MdKeyboardArrowRight className="text-3xl z-10" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default ButtonList;

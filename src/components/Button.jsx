import React, { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const Button = ({ name, active, onClick }) => {
  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = async () => {
  //   const data = await fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${name}&key=${GOOGLE_API_KEY}`
  //   );
  //   const json = await data.json();
  //   console.log(json);
  // };

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

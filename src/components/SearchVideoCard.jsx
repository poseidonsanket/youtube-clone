import React from "react";
import { CgProfile } from "react-icons/cg";

const SearchVideoCard = ({ videos }) => {
  const { snippet } = videos;
  const { thumbnails, channelTitle, description, title } = snippet;
  return (
    <div className="my-5 md:flex md:items-center md:mx-20 ">
      <div className=" flex-col w-full">
        <div className="md:flex md:gap-5">
          <img
            className="w-[500px] h-[280px] rounded-lg"
            src={thumbnails.medium.url}
          />
          <div className="my-2">
            <p className="font-bold text-xl">{title}</p>
            <p className="font-bold text-xl py-2 flex items-center gap-2">
              <CgProfile className="text-2xl" />
              {channelTitle}
            </p>
            <p className="md:block hidden">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;

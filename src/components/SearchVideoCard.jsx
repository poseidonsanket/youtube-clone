import React from "react";
import { CgProfile } from "react-icons/cg";

const SearchVideoCard = ({ videos }) => {
  const { snippet } = videos;
  const { thumbnails, channelTitle, description, title } = snippet;
  return (
    <div className="w-full my-5 flex items-center mx-20">
      <div className="flex gap-5">
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;

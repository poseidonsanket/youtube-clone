import React from "react";

const SearchChannelCard = ({ channels }) => {
  const { snippet } = channels;
  const { thumbnails, channelTitle, description } = snippet;
  return (
    <div className="md:my-10 md:flex md:justify-center md:items-center my-10">
      <div className="flex md:gap-20 items-center gap-5">
        <img
          className="w-[180px] h-[180px] rounded-full"
          src={thumbnails.medium.url}
        />
        <div>
          <p className="font-bold text-xl">{channelTitle}</p>
          <p>{description}</p>
        </div>
        <div>
          <button className="p-4 bg-white text-black rounded-full md:block hidden">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchChannelCard;

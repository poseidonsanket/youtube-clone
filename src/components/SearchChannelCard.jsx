import React from "react";

const SearchChannelCard = ({ channels }) => {
  const { snippet } = channels;
  const { thumbnails, channelTitle, description } = snippet;
  return (
    <div className="my-10 flex justify-center items-center w-full">
      <div className="flex gap-20 items-center">
        <img
          className="w-[180px] h-[180px] rounded-full"
          src={thumbnails.medium.url}
        />
        <div>
          <p className="font-bold text-xl">{channelTitle}</p>
          <p>{description}</p>
        </div>
        <div>
          <button className="p-4 bg-white text-black rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchChannelCard;

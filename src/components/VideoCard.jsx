import React from "react";
import { CgProfile } from "react-icons/cg";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="md:p-2 md:m-2 shadow-lg md:w-80 p-2 mx-2 my-4">
      <div className="">
        <img className="md:rounded-lg w-full rounded-lg" src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold pt-2">{title}</li>
          <li className="flex items-center gap-2"><CgProfile className="text-xl"/>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="md:px-2 md:mx-1 border border-gray-500 rounded-lg md:w-80">
      <VideoCard info={info} />
      <label className="px-4 my-2 text-lg">Ad</label>
    </div>
  );
};
export default VideoCard;

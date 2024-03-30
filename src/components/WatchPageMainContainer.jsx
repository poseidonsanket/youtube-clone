import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const WatchPageMainContainer = ({ videoDetails }) => {
  return (
    <div className="w-[1300px]">
      <p className="pl-14 font-bold text-2xl">{videoDetails.title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="pl-14 text-5xl pt-2">
            <CgProfile />
          </p>
          <p className="font-bold mt-2">{videoDetails.channelTitle}</p>
          <button className="p-2 bg-white rounded-full text-black ml-6 font-bold">
            Subscribe
          </button>
        </div>
        <div className="gap-3 flex -mr-11">
          <button className="bg-gray-800 p-4 rounded-full hover:bg-gray-600 flex items-center gap-2 font-bold">
            <BiLike className="text-xl" />
            Like
          </button>
          <button className="bg-gray-800 p-4 rounded-full hover:bg-gray-600 font-bold">
            <BiDislike className="text-xl" />
          </button>
          <button className="bg-gray-800 p-4 rounded-full hover:bg-gray-600 flex gap-2 items-center font-bold">
            <FaShare className="text-xl" /> Share
          </button>
          <button className="bg-gray-800 p-4 rounded-full hover:bg-gray-600 flex gap-2 items-center font-bold">
            <FaDownload className="text-xl" /> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchPageMainContainer;

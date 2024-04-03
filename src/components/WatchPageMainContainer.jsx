import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const WatchPageMainContainer = ({ videoDetails }) => {
  return (
    <div className="md:w-[1300px] w-[400px]">
      <div className="md:p-0 md:my-2 pl-4 pr-4 pt-4">
        <p className="md:pl-14 font-bold text-2xl">{videoDetails.title}</p>
      </div>

      <div className="md:flex md:items-center md:justify-between p-4 md:p-0">
        <div className="md:flex md:items-center md:gap-2 flex items-center gap-2 pb-4 md:p-0">
          <p className="md:pl-14 text-5xl pt-2">
            <CgProfile />
          </p>
          <p className="font-bold mt-2">{videoDetails.channelTitle}</p>
          <button className="p-2 bg-white rounded-full text-black ml-6 font-bold">
            Subscribe
          </button>
        </div>
        <div className="md:gap-3 flex -mr-11 gap-1">
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

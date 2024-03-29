import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-[12rem] text-xl h-screen">
      <ul>
        <li className="flex gap-4 items-center">
          <FaHome />
          Home
        </li>
        <li className="flex gap-4 items-center">
          <SiYoutubeshorts />
          Shorts
        </li>
        <li className="flex gap-4 items-center">
          <MdSubscriptions />
          Videos
        </li>
        <li className="flex gap-4 items-center">
          <RiLiveFill />
          Live
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

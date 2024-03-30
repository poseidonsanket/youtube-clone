import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="px-5 shadow-lg w-[16rem] text-xl mx-2 h-svh">
      <ul className="p-2">
        <li className="flex gap-4 items-center py-1">
          <Link to="/" className="flex items-center gap-4">
            <FaHome />
            Home
          </Link>
        </li>
        <li className="flex gap-4 items-center py-1">
          <SiYoutubeshorts />
          Shorts
        </li>
        <li className="flex gap-4 items-center py-1">
          <MdSubscriptions />
          Videos
        </li>
        <li className="flex gap-4 items-center py-1">
          <RiLiveFill />
          Live
        </li>
      </ul>
      <hr className="font-bold mt-4"></hr>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr className="font-bold mt-4"></hr>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr className="font-bold mt-4"></hr>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

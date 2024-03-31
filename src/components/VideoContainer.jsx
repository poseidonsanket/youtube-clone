import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import { GOOGLE_API_KEY } from "../utils/constants";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((store) => store.video.activeButton);
  console.log(currentCategory);
  const videos = useSelector((store) => store.video.videos);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  const getFliteredVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${currentCategory}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log(json.items);
    dispatch(addVideos(json.items));
  };
  useEffect(() => {
    if (currentCategory === null || currentCategory === "All") {
      getVideos();
    } else {
      getFliteredVideos();
    }
  }, [currentCategory]);
  return (
    <div className="flex flex-wrap p-2 m-2 max-h-[820px] overflow-y-auto no-scrollbar h-screen">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

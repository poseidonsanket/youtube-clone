import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((store) => store.video.activeButton);
  const videos = useSelector((store) => store.video.videos);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  const getFliteredVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${currentCategory}&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const json = await data.json();
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
    <div className="md:flex md:flex-wrap md:p-2 md:m-2 md:max-h-[820px] md:overflow-y-auto md:no-scrollbar md:h-screen overflow-y-auto max-h-screen no-scrollbar">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos.map((video, index) => (
        <Link
          key={index}
          to={
            video.id.videoId
              ? `/watch?v=${video.id.videoId}`
              : `/watch?v=${video.id}`
          }
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

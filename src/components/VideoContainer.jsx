import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewVideos, addPageToken, addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const mainDivRef = useRef(null);
  const pageToken = useSelector((store) => store.video.pageToken);
  const currentCategory = useSelector((store) => store.video.activeButton);
  const videos = useSelector((store) => store.video.videos);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
    dispatch(addPageToken(json.nextPageToken));
    console.log(pageToken);
  };
  const getFliteredVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${currentCategory}&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const json = await data.json();
    dispatch(addVideos(json.items));
    dispatch(addPageToken(json.nextPageToken));
  };
  const handleScroll = () => {
    if (
      mainDivRef.current &&
      mainDivRef.current.scrollHeight - mainDivRef.current.scrollTop ===
        mainDivRef.current.clientHeight
    ) {
      if (currentCategory === null || currentCategory === "All") {
        addMoreVideos();
      } else {
        addMoreFilteredVideos();
      }
    }
  };

  const addMoreFilteredVideos = async () => {
    console.log("filtered");
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${currentCategory}&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&pageToken=${pageToken}`
    );
    const json = await data.json();
    dispatch(addNewVideos(json.items));
  };

  const addMoreVideos = async () => {
    console.log("All");
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&pageToken=${pageToken}`
    );
    const json = await data.json();
    dispatch(addNewVideos(json.items));
  };

  useEffect(() => {
    if (currentCategory === null || currentCategory === "All") {
      getVideos();
    } else {
      getFliteredVideos();
    }
  }, [currentCategory]);

  useEffect(() => {
    if (mainDivRef.current) {
      mainDivRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainDivRef.current) {
        mainDivRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainDivRef.current]);
  
  return (
    <div
      className="md:flex md:flex-wrap md:p-2 md:m-2 md:max-h-[820px] md:overflow-y-auto md:no-scrollbar md:h-screen overflow-y-auto max-h-screen no-scrollbar"
      ref={mainDivRef}
    >
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

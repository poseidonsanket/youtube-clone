import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import WatchPageMainContainer from "./WatchPageMainContainer";
import WatchPageDescription from "./WatchPageDescription";
import LiveChat from "./LiveChat";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`;
  const dispatch = useDispatch();
  const getVideoDetails = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    setVideoDetails(json.items[0].snippet);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);
  return (
    <div className="flex flex-col w-full mr-20">
      <div className="p-2 m-4 ml-12 flex w-full">
        <div>
          <iframe
            className="rounded-lg border border-white"
            width="1300"
            height="700"
            src={"https://www.youtube.com/embed/" + videoId + "?&autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <WatchPageMainContainer videoDetails={videoDetails} />
      <WatchPageDescription videoDetails={videoDetails} />
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;

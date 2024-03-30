import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import WatchPageMainContainer from "./WatchPageMainContainer";
import WatchPageDescription from "./WatchPageDescription";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const GOOGLE_API_KEY = "AIzaSyB1P6aDj_yr6jhXxSCTnKaI2mG65WfXBAs";
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`;
  const dispatch = useDispatch();
  const getVideoDetails = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    console.log(json.items[0].snippet);
    setVideoDetails(json.items[0].snippet);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="p-2 m-4 ml-12">
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
      <WatchPageMainContainer videoDetails={videoDetails}/>
      <WatchPageDescription videoDetails={videoDetails}/>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

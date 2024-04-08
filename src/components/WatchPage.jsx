import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import WatchPageMainContainer from "./WatchPageMainContainer";
import WatchPageDescription from "./WatchPageDescription";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${
    import.meta.env.VITE_GOOGLE_API_KEY
  }`;
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
    <div className="md:flex md:flex-col md:w-screen md:mr-20 mt-10 md:mt-0 h-screen w-screen">
      <div className="md:p-2 md:m-4 md:ml-12 md:w-screen md:flex">
        <div className="md:m-0 ml-4 md:w-screen">
          <iframe
            className="rounded-lg border border-white md:w-[1300px] md:h-[700px] w-[400px] h-[250px]"
            src={"https://www.youtube.com/embed/" + videoId + "?&autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <WatchPageMainContainer videoDetails={videoDetails} />
      <WatchPageDescription videoDetails={videoDetails} />

      <div>
        <div className="md:w-full">
          <LiveChat />
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;

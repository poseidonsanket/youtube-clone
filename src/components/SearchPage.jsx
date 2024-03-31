import React, { useEffect, useState } from "react";
import SearchVideoCard from "./SearchVideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import SearchChannelCard from "./SearchChannelCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = searchParams.get("q");
  const getResults = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q="${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setSearchResults(json.items);
  };
  const channels = searchResults.filter(
    (video) => video.id.kind === "youtube#channel"
  );
  const videoResults = searchResults.filter(
    (video) => video.id.kind === "youtube#video"
  );
  useEffect(() => {
    getResults();
  }, [searchQuery]);
  return (
    <div className="p-2 m-2 w-full">
      {channels.map((channel, index) => (
        <SearchChannelCard key={index} channels={channel} />
      ))}
      <hr className="w-full"></hr>
      {videoResults.map((video, index) => (
        <Link to={"/watch?v=" + video.id.videoId} key={index}>
          <SearchVideoCard key={index} videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;

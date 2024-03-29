import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg w-80">
      <div>
        <img className="rounded-lg" src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold pt-2">{title}</li>
          <li className="pt-2">{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;

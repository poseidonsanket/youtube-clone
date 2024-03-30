import React, { useState } from "react";

const WatchPageDescription = ({ videoDetails }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="ml-12  pl-2 mt-6 bg-customBg w-[1300px] rounded-lg">
      <p className="px-2 m-2">{videoDetails.title}</p>
      {!showDescription && <p className="px-2 m-2 mt-4" onClick={() => setShowDescription(true)}>
        ...more
      </p>}
      {showDescription && (
        <>
          <p className="px-2 m-2">{videoDetails.description}</p>
          {videoDetails.tags.map((tag) => (
            <p className="px-4 text-blue-500">#{tag}</p>
          ))}
          <p className="px-2 m-2" onClick={() => setShowDescription(false)}>
            Show Less
          </p>
        </>
      )}
    </div>
  );
};

export default WatchPageDescription;

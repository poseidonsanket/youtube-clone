import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col shadow-lg items-center gap-28">
      <div className="flex items-center col-span-1 gap-5">
        <img
          className="h-8 ml-4"
          alt="menu"
          src="https://imgs.search.brave.com/861qOMRSwIKx9_EOvO14rElWhWuv7m-4EW8x9GAGzqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
        />
        <img
          className="h-16"
          src="https://imgs.search.brave.com/ZKOjwcVxTFoL7nzF0Q2xxEBm6bcZbAHcbmnAQ0irCYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc"
        />
      </div>
      <div className="col-span-10 flex items-center">
        <input
          className="w-1/2 border p-2 border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="px-4 py-2 border border-gray-400 rounded-r-full">
          <img
            className="h-6 w-8"
            src="https://imgs.search.brave.com/wj6ws-HmrJ4OtbAHpGoNUM0hzR53AjtVNHFW8w0N_wM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzU4LzI3LzI3/LzM2MF9GXzU1ODI3/Mjc5OF9ETnFqNHEy/VFhFN0VzRE05WnAy/d2R5YXA4Z3phdHds/Ri5qcGc"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="w-10 h-10"
          src="https://imgs.search.brave.com/5amcOeNX4OM3cD9bKI5v89yRGDHaEZOpJhVpikpSiWw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE4LzAzLzMz/LzM2MF9GXzExODAz/MzM3N19KS1FBM1VG/RTRqb0oxazY3ZE5v/U21tb0c0RXNRZjlI/by5qcGc"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;

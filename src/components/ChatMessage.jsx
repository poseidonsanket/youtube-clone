import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 py-1">
      <div>
        <FaUserCircle className="text-4xl" />
      </div>

      <p className="font-bold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;

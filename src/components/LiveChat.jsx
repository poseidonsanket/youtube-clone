import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [isChat, setIsChat] = useState(true);
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  });
  const hideChat = () => {
    setIsChat(!isChat);
  };
  const sendComment = () => {
    dispatch(addMessage({ name: "Sanket Dadali", message: liveMessage }));
    setLiveMessage("");
  };
  return (
    <>
      {isChat && (
        <>
          <div className="w-[400px] mt-10 mx-2 md:ml-2 md:m-0 rounded-lg md:w-full h-[610px] p-2 border bg-customBg overflow-y-auto no-scrollbar flex flex-col-reverse">
            <div>
              {chatMessages.map((chat, index) => (
                <ChatMessage
                  key={index}
                  name={chat.name}
                  message={chat.message}
                />
              ))}
            </div>
          </div>
          <form
            className="ml-2 rounded-lg md:w-full py-2 flex items-center gap-2 w-screen"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="border rounded-lg md:w-full p-2 bg-customBg"
              placeholder="Chat..."
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button
              className="p-2 bg-customBg rounded-lg"
              onClick={sendComment}
            >
              Send
            </button>
          </form>
        </>
      )}

      <button
        className="p-2 bg-customBg rounded-lg mx-2 md:w-full w-[400px] my-5 md:my-0"
        onClick={hideChat}
      >
        {isChat ? "Hide Chat" : "Show Chat"}
      </button>
    </>
  );
};

export default LiveChat;

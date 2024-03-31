import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
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
  const sendComment = () => {
    dispatch(addMessage({ name: "Sanket Dadali", message: liveMessage }));
    setLiveMessage("");
  };
  return (
    <>
      <div className="ml-2 rounded-lg w-full h-[650px] p-2 border bg-customBg overflow-y-auto no-scrollbar flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="ml-2 rounded-lg w-full py-2 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="border rounded-lg w-full p-2 bg-customBg"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 bg-customBg rounded-lg" onClick={sendComment}>
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;

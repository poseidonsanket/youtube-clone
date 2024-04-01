import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../utils/videoSlice";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

export const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-4 items-center py-2 px-2 bg-gray-700 rounded-lg my-2 w-full">
      <div className="flex gap-4 justify-between">
        <CgProfile className="text-4xl my-2" />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
          <div className="flex items-center gap-4">
            <BiLike className="text-xl"/>
            <BiDislike className="text-xl"/>
            <p className="text-lg">reply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-5  ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const [currentComment, setCurrentComment] = useState(null);
  const comments = useSelector((store) => store.video.comments);
  const addCurrentComment = () => {
    const newComment = {
      name: "Sanket Dadali",
      text: currentComment,
      replies: [],
    };
    dispatch(addComments(newComment));
    setCurrentComment("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newComment = {
        name: "Sanket Dadali",
        text: currentComment,
        replies: [],
      };
      dispatch(addComments(newComment));
      setCurrentComment("");
    }
  };
  return (
    <div className="m-5 ml-10 p-2 pl-4 w-[1320px]">
      <h1 className="text-2xl font-bold mb-2">Comments:</h1>
      <div className="flex items-center">
        <CgProfile className="text-5xl mr-2"/>
        <input
          type="text"
          className="rounded-lg w-full bg-customBg px-4 py-2"
          placeholder="Add a Comment"
          value={currentComment}
          onChange={(e) => setCurrentComment(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="mx-2 p-2 rounded-lg bg-customBg"
          onClick={addCurrentComment}
        >
          Comment
        </button>
      </div>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;

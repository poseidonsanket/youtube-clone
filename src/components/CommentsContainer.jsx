import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const commentsData = [
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

const Comment = ({ data, handleReply }) => {
  const [isReply, setIsReply] = useState(false);
  const [currentReply, setCurrentReply] = useState("");

  const { name, text, replies } = data;

  const handleReplyClick = () => {
    setIsReply(!isReply);
  };

  const handleReplySubmit = () => {
    handleReply(currentReply, data);
    setCurrentReply("");
    setIsReply(false);
  };

  return (
    <>
      <div className="py-2 px-2 bg-gray-700 rounded-lg my-2 w-full">
        <div className="flex gap-4">
          <CgProfile className="text-4xl my-2" />
          <div className="flex flex-col">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
            <div className="flex items-center gap-4">
              <BiLike className="text-xl" />
              <BiDislike className="text-xl" />
              <p className="text-lg" onClick={handleReplyClick}>
                {!isReply ? "reply" : "cancel"}
              </p>
            </div>
          </div>
        </div>
        {isReply && (
          <div className="ml-12 my-1 flex items-center gap-2">
            <input
              type="text"
              className="w-full rounded-lg bg-white px-4 py-2 text-black"
              placeholder="Add a reply"
              value={currentReply}
              onChange={(e) => setCurrentReply(e.target.value)}
            />
            <button
              className="p-2 bg-white text-black rounded-lg"
              onClick={handleReplySubmit}
            >
              Reply
            </button>
          </div>
        )}
      </div>
      {replies.map((reply, index) => (
        <div key={index} className="ml-12">
          <Comment data={reply} handleReply={handleReply} />
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState(commentsData);

  const handleCommentSubmit = () => {
    const newComment = {
      name: "Sanket Dadali",
      text: currentComment,
      replies: [],
    };
    setComments([newComment, ...comments]);
    setCurrentComment("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  const handleReply = (text, parentComment) => {
    const newReply = {
      name: "Sanket Dadali",
      text: text,
      replies: [],
    };

    const updatedReplies = [newReply, ...parentComment.replies];
    const updatedComment = { ...parentComment, replies: updatedReplies };

    const updatedComments = updateComment(
      comments,
      parentComment,
      updatedComment
    );

    setComments(updatedComments);
  };

  const updateComment = (commentsArr, parent, updatedComment) => {
    return commentsArr.map((comment) => {
      if (comment === parent) {
        return updatedComment;
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateComment(comment.replies, parent, updatedComment),
        };
      } else {
        return comment;
      }
    });
  };

  return (
    <div className="m-5 ml-10 p-2 pl-4 w-[1320px]">
      <h1 className="text-2xl font-bold mb-2">Comments:</h1>
      <div className="flex items-center">
        <CgProfile className="text-5xl mr-2" />
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
          onClick={handleCommentSubmit}
        >
          Comment
        </button>
      </div>
      {comments.map((comment, index) => (
        <Comment key={index} data={comment} handleReply={handleReply} />
      ))}
    </div>
  );
};

export default CommentsContainer;

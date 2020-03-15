import React from 'react';
import '../styles/Comment.css';

function Comment({ data }) {
  return (
    <>
      <div id="comments">
        <div className="commentsHeader">
          <img src={data.author.avatar} alt="" />
        </div>
        <div className="commentContent">
          <span className="commentName">{data.author.name}</span>
          <span>{data.content}</span>
        </div>
      </div>
    </>
  );
}

export default Comment;

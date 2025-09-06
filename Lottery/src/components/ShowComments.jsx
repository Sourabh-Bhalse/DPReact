import React, { useState } from "react";

export default function ShowComments({ comments }) {
  const [show, setShow] = useState(false);

  return (
    <div className="comment-list">
      <button onClick={() => setShow(!show)} className="toggle-btn">
        {show ? "Hide Comments" : "Show Comments"}
      </button>

      {show && (
        <div className="comments-wrapper">
          {comments.length === 0 ? (
            <p className="no-comments">No comments yet.</p>
          ) : (
            comments.map((c, index) => (
              <div key={index} className="comment">
                <h4>{c.userName}</h4>
                <p className="rating">⭐ {c.rating}/5</p>
                <p>{c.comment}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

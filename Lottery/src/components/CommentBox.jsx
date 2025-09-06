 import React, { useState } from "react";
import ShowComments from "./ShowComments";
import "../styling/Comment.css";

export default function CommentBox() {
  const [formData, setFormData] = useState({
    userName: "",
    rating: "5",
    comment: "",
  });

  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userName.trim() || !formData.comment.trim()) {
      alert("⚠️ Please fill out name and comment!");
      return;
    }

    setComments([...comments, formData]);
    setFormData({ userName: "", rating: "5", comment: "" });
  };

  return (
    <div className="comment-container">
      <h2>Leave a Comment</h2>

      <form onSubmit={handleSubmit} className="comment-form">
        {/* User Name */}
        <input
          type="text"
          name="userName"
          placeholder="Enter your name"
          value={formData.userName}
          onChange={handleChange}
        />

        {/* Rating */}
        <label>Rating:</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>

        {/* Comment */}
        <textarea
          name="comment"
          placeholder="Write your comment..."
          value={formData.comment}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit">Post Comment</button>
      </form>

      {/* ✅ Pass comments to ShowComments */}
      <ShowComments comments={comments} />
    </div>
  );
}

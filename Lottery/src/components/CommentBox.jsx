import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ShowComments from "./ShowComments";
import "../styling/Comment.css";

// ✅ Validation schema using Yup
const CommentSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Name is required"),
  rating: Yup.number().min(1).max(5).required(),
  comment: Yup.string()
    .min(5, "Comment is too short")
    .required("Comment is required"),
});

export default function CommentBox() {
  const [comments, setComments] = useState([]);

  return (
    <div className="comment-container">
      <h2>Leave a Comment</h2>

      <Formik
        initialValues={{ userName: "", rating: "5", comment: "" }}
        validationSchema={CommentSchema}
        onSubmit={(values, { resetForm }) => {
          setComments([...comments, values]);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="comment-form">
            {/* User Name */}
            <div className="form-group">
              <Field
                type="text"
                name="userName"
                placeholder="Enter your name"
              />
              <ErrorMessage name="userName" component="div" className="error" />
            </div>

            {/* Rating */}
            <div className="form-group">
              <label>Rating:</label>
              <Field as="select" name="rating">
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </Field>
            </div>

            {/* Comment */}
            <div className="form-group">
              <Field
                as="textarea"
                name="comment"
                placeholder="Write your comment..."
                rows="4"
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>

            {/* Submit */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Comment"}
            </button>
          </Form>
        )}
      </Formik>

      {/* ✅ Show Comments */}
      <ShowComments comments={comments} />
    </div>
  );
}

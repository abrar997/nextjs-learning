"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../../reusable/Form";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment === "") toast.error("please write your comment");
  };
  return (
    <div>
      <Form
        type="comment"
        data={{ comment: comment, setComment: setComment }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CommentForm;

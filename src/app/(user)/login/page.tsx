"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../../../components/reusable/Form";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") {
      return toast.error("email is required");
    }
    if (password === "") {
      return toast.error("password is required");
    }
    console.log(email, password);
  };

  return (
    <div className="p-4 rounded lg:py-12 shadow lg:mx-24 bg-white gap-2 flex flex-col text-main">
      <h1 className="text-blue-800 lg:text-3xl font-semibold font-serif">
        Log in
      </h1>
      <Form
        type="login"
        onSubmit={handleSubmit}
        data={{ email, password, setEmail, setPassword }}
      />
    </div>
  );
}

export default Page;

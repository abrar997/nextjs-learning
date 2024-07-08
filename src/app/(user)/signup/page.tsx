"use client";
import Form from "@/components/reusable/Form";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("name is required");
    } else if (email === "") {
      return toast.error("email is required");
    } else if (password === "") {
      return toast.error("password is required");
    }
    console.log(name, email, password);
  };
  return (
    <div className="p-4 bg-white rounded lg:py-12 shadow lg:mx-24 gap-2 flex flex-col text-main">
      <h1 className="text-blue-800 lg:text-3xl font-semibold font-serif">
        create new account
      </h1>
      <Form
        type="register"
        onSubmit={handleSubmit}
        data={{ email, password, name, setEmail, setPassword, setName }}
      />
    </div>
  );
}

"use client";
import Form from "@/components/reusable/Form";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("title is required");
    if (description === "") return toast.error("description is required");
    console.log(title, description);
  };
  return (
    <div className="px-10 flex flex-col gap-4 py-6 bg-slate-100 h-full">
      <h1 className="lg:text-2xl text-blue-800 font-semibold font-serif">
        Add new article
      </h1>
      <Form
        type="admin"
        data={{ title, setTitle, description, setDescription }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Page;

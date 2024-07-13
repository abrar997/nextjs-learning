"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../../../components/reusable/Form";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
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
    //same job
    router.push("/"); // we click on back button take me to login page that means push put loagin page in history of browser
    // router.replace("/"); // if i wouldn't user not able to back to login page we can use this , but if we want user able back to login page we can use puh
  };

  return (
    <div className="p-4 bg-white rounded lg:p-12 shadow m-4 lg:my-12 lg:mx-24 gap-2 flex flex-col text-main">
      <h1 className="text-blue-800 lg:text-3xl font-semibold font-serif">
        Log in
      </h1>
      <Form
        type="login"
        onSubmit={handleSubmit}
        data={{
          email: email,
          password: password,
          setEmail: setEmail,
          setPassword: setPassword,
        }}
      />
    </div>
  );
}

export default Page;

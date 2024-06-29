"use client";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Full name"
            className="border text-sm border-slate-500 bg-transparent rounded w-full p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Enter your password"
            className="border text-sm border-slate-500 bg-transparent rounded w-full p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="bg-blue-700 p-2 rounded hover:bg-opacity-90">
          Send
        </button>
      </form>
    </div>
  );
}

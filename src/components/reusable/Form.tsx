"use client";
import React, { FormEvent } from "react";
interface FormProps {
  type: "login" | "register";
  onSubmit: (e: FormEvent) => void;
  data: {
    email: string;
    password: string;
    name?: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setName?: (name: string) => void;
  };
}

export default function Form({ type, onSubmit, data }: FormProps) {
  return (
    <div className="flex flex-col gap-4 text-black">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {type === "login" ? (
          <div className="grid gap-3">
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Full name"
                className="border text-sm border-slate-500  rounded w-full p-2"
                value={data.email}
                onChange={(e) => data.setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="password"
                placeholder="Enter your password"
                className="border text-sm border-slate-500  rounded w-full p-2"
                value={data.password}
                onChange={(e) => data.setPassword(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Enter your user name"
              className="border text-sm border-slate-500  rounded w-full p-2"
              value={data.name}
              onChange={(e) => data?.setName?.(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="border text-sm border-slate-500  rounded w-full p-2"
              value={data.email}
              onChange={(e) => data.setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border text-sm border-slate-500  rounded w-full p-2"
              value={data.password}
              onChange={(e) => data.setPassword(e.target.value)}
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-700 p-2 text-white rounded hover:bg-opacity-90 lg:ml-auto lg:px-12"
        >
          Send
        </button>
      </form>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import module from "./header.module.css";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={module.header}>
      <div className="flex w-full border-b border-gray-600 pb-2 items-start">
        <div className="flex lg:flex-row w-full lg:justify-between flex-col gap-1">
          <div className="text-main flex justify-between items-start">
            <Link href="/" className="lg:flex grid lg:items-end lg:gap-1">
              <span className="text-3xl font-semibold font-serif">AM</span>
              <span className="text-[12px] text-center text-secondary">
                start InShaa'Allah learn next js
              </span>
            </Link>
          </div>
          <div className="lg:flex gap-4 text-main hidden capitalize">
            <Link className="hover:opacity-80" href="/">
              home
            </Link>
            <Link className="hover:opacity-80" href="/about">
              about
            </Link>
            <Link className="hover:opacity-80" href="/admin">
              admin
            </Link>
            <Link className="hover:opacity-80" href="/articles">
              articles
            </Link>
          </div>

          <div className="flex gap-2 lg:gap-4">
            <Link
              href="login"
              className="bg-secondary text-dark px-3 rounded flex items-center justify-center hover:opacity-80 py-1.5"
            >
              login
            </Link>
            <Link
              href="signup"
              className="bg-secondary text-dark  px-1 lg:px-3 rounded flex items-center justify-center hover:opacity-80"
            >
              signUp
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="text-4xl text-main"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <BiMenu />
          </button>
        </div>
      </div>
      <div
        className="lg:hidden"
        style={{
          clipPath: (isOpen && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <div
          style={{
            clipPath:
              (isOpen && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
          }}
          className="grid gap-2 lg:gap-4 text-lg capitalize divide-y divide-secondary text-main py-3 lg:hidden"
        >
          <Link
            href="/"
            className="py-1 hover:bg-secondary hover:text-black px-2 rounded"
          >
            home
          </Link>
          <Link
            href="admin"
            className="py-1 hover:bg-secondary hover:text-black px-2 rounded"
          >
            admin
          </Link>
          <Link
            href="articles"
            className="py-1 hover:bg-secondary hover:text-black px-2 rounded"
          >
            articles
          </Link>
        </div>
      </div>
    </div>
  );
}

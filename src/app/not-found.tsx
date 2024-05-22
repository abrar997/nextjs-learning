"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-main grid gap-2 items-center justify-center mt-12 font-serif">
      <h1 className="capitalize text-3xl">not found page</h1>
      <p className="flex gap-2 items-center justify-center font-sans">
        <span>click here to back to </span>{" "}
        <Link href="/" className="text-secondary underline">
          Home
        </Link>{" "}
      </p>
    </div>
  );
}

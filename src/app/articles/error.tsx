"use client";
import Link from "next/link";
import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function ArticlesErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="text-center text-main flex flex-col items-center gap-5">
      <h1> we have error with Article Loading </h1>
      <h2 className="test-secondary">Error message :{error.message}</h2>
      <Link href="/" className="underline text-teal-600 font-semibold">
        Home
      </Link>
      <button
        onClick={() => reset()}
        className="bg-secondary text-black rounded py-1 px-4 "
      >
        {" "}
        try again
      </button>
    </div>
  );
}

export default ArticlesErrorPage;

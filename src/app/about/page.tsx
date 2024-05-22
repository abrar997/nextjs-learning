import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="grid grid-cols-2">
      <div className="grid">
        <h1 className="text-3xl font-serif font-bold">About This Project</h1>
        <h3 className="text-xl text-secondary">Next js</h3>
      </div>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="image"
        />
      </div>
    </div>
  );
}

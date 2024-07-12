import React from "react";
import { FaRegFaceSmile } from "react-icons/fa6";

function Page() {
  return (
    <div className="p-12 lg:text-3xl text-center text-secondary flex lg:items-center gap-2 justify-center font-serif font-bold tracking-tight">
      Welcome with my full next project
      <FaRegFaceSmile className="text-pink-600" />
    </div>
  );
}

export default Page;

import React from "react";
import { BiSolidEdit, BiTrash } from "react-icons/bi";

const CommentItem = () => {
  return (
    <div className="bg-gray-200 p-4 grid gap-5 rounded border border-slate-300">
      <div className="flex justify-between">
        <h1 className="capitalize font-semibold text-secondary">
          abrar muthana
        </h1>
        <h1 className="text-gray-400 text-sm bg-slate-50 rounded p-1">
          10/4/2024
        </h1>
      </div>
      <div className="flex justify-between items-center gap-3 lg:text-xl">
        <h1 className="text-[16px] text-gray-600">It was great article</h1>
        <div className="flex gap-1">
          <button className="text-secondary hover:text-blue-600">
            <BiSolidEdit />
          </button>
          <button className="hover:text-pink-500 text-pink-600">
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

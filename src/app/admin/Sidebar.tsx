import React from "react";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import { TbTableShortcut } from "react-icons/tb";
import { LiaCommentsSolid } from "react-icons/lia";
const Sidebar = () => {
  return (
    <div className="bg-gray-800 flex flex-col gap-3 text-white lg:h-[91vh] px-2 p-4 lg:py-6  w-full h-full">
      <div className="text-2xl flex items-center gap-2">
        <RxDashboard />
        <h1 className="font-serif hidden lg:flex">Dashboard</h1>
      </div>
      <div className="grid lg:gap-3 gap-3">
        <Link
          href="/admin/article-comments"
          className="flex gap-1 bg-slate-600 hover:bg-opacity-50 p-2 items-center"
        >
          <LiaCommentsSolid size={25} />

          <p className="hidden lg:flex">Comments </p>
        </Link>
        <Link
          href="/admin/article-table"
          className="flex gap-1 bg-slate-600 hover:bg-opacity-50 p-2 items-center"
        >
          <TbTableShortcut size={22} />
          <p className="hidden lg:flex">Tables </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

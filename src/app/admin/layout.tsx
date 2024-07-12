import React from "react";
import Sidebar from "./Sidebar";
import { Metadata } from "next";

interface DashboardLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "this is admin dashboard page",
};

const Layout = ({ children }: DashboardLayout) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-2 lg:col-span-3">{children} </div>
    </div>
  );
};

export default Layout;

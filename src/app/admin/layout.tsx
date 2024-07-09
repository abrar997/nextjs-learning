import React from "react";
import Sidebar from "./Sidebar";

interface DashboardLayout {
  children: React.ReactNode;
}

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

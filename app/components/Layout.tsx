"use client"

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = React.memo(
  ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(true);

    return (
      <div className="PageLayout flex min-h-screen">
        <div className={`sidebar-wrapper ${showMenu ? "active" : ""}`}>
          <Sidebar />
          <div
            onClick={() => setShowMenu(false)}
            className="touchable fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            style={{ display: showMenu ? "block" : "none" }}
          />
        </div>
        <div className="main-section flex-1 ml-0 md:ml-64 pt-16">
          <Header />
          <main className="main-content p-4 bg-gray-100">{children}</main>
        </div>
      </div>
    );
  }
);

Layout.displayName = "Layout";

export default Layout;

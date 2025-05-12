"use client"

import React from "react";

const Header: React.FC = React.memo(() => {
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card shadow p-4 flex flex-col md:flex-row justify-between items-center fixed top-0 left-0 right-0 z-10 font-circular-normal">
      <div className="w-full md:w-auto mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-64 p-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-muted text-muted-foreground"
          disabled
        />
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <span className="text-muted-foreground">{time || "Loading..."}</span>
        <button className="btn-primary">Clock Out</button>
        <button className="btn-outline">Break</button>
        <div className="flex items-center space-x-2">
          <span className="text-muted-foreground">Olayemi - Rater</span>
          <div className="w-8 h-8 bg-muted rounded-full" />
        </div>
      </div>
    </div>
  );
});

Header.displayName = "Header";

export default Header;

"use client";

import { ReactNode, useState } from "react";

interface ContentSwitcherProps {
  children: [ReactNode, ReactNode];
}

export default function ContentSwitcher({ children }: ContentSwitcherProps) {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-4 divide-x divide-gray-700">
        <button
          className="flex items-center justify-center w-full m-2"
          onClick={() => setActiveContent(0)}
        >
          playlists
        </button>
        <button
          className="flex items-center justify-center w-full m-2"
          onClick={() => setActiveContent(1)}
        >
          queue
        </button>
      </div>
      <div className="flex justify-center border-gray-700 m-2 ">{children[activeContent]}</div>
    </div>
  );
}

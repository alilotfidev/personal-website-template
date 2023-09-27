"use client";
import { useState } from "react";

export default function CursorProvider({ children }) {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const handleCustomCursor = (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  };
  return (
    <div className="cursor-none" onMouseMove={(e) => handleCustomCursor(e)}>
      {children}
      <div
        className="cursor pointer-events-none absolute z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-transform duration-300"
        style={{ top: cursorY, left: cursorX }}
      ></div>
    </div>
  );
}

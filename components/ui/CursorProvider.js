"use client";
import { useState, useRef, useEffect } from "react";

export default function CursorProvider({ children }) {
  // disabling custom cursor on mobile
  const parentRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    }
  }, []);

  // custom cursor code
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const handleCustomCursor = (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  };

  return isDesktop ? (
    <div
      className="relative cursor-none overflow-hidden"
      onMouseMove={(e) => handleCustomCursor(e)}
      ref={parentRef}
    >
      {children}
      <div
        className="cursor pointer-events-none absolute z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 overflow-x-auto rounded-full bg-white mix-blend-difference transition-transform duration-300"
        style={{ top: cursorY, left: cursorX }}
      ></div>
    </div>
  ) : (
    <div className="overflow-x-hidden">{children}</div> // if it's not a desktop device just return children
  );
}

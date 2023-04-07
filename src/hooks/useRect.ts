import React, { useLayoutEffect, useCallback, useState } from "react";

type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

function getRect<T extends HTMLElement>(element?: T): RectResult {
  let rect: RectResult = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0
  };
  if (element) {
    rect = element.getBoundingClientRect();
  }
  return rect;
}

export function useRect<T extends HTMLElement>(
  ref: React.RefObject<T>
): RectResult {
  const [ rect, setRect ] = useState<RectResult>(
    ref && ref.current ? getRect(ref.current) : getRect()
  );

  const handleResizeAndScroll = useCallback(() => {
    if (!ref.current) return;
    setRect(getRect(ref.current)); // Update client rect
  }, [ ref ]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    handleResizeAndScroll();

    window.addEventListener("resize", handleResizeAndScroll);
    window.addEventListener("scroll", handleResizeAndScroll);
    return () => {
      window.removeEventListener("resize", handleResizeAndScroll)
      window.removeEventListener("scroll", handleResizeAndScroll)
    };
  }, [ ref.current ]);

  return rect;
}

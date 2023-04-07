import React, { useEffect, useMemo, useRef, useState } from "react";

import styles from "./FadeInAnimator.module.css";
import { useRect } from "@/hooks/useRect";

interface IProps {
  children: React.ReactNode;
  effect?: 'fade-right' | 'fade-left' | 'fade-bottom';
  visibleAreaPercent?: number;
}

export const FadeInAnimator: React.FC<IProps> = (props) => {
  const [ height, setHeight ] = useState<number>(0);

  const {visibleAreaPercent = 0.9, effect = 'fade-right'} = props;

  const contentRef = useRef(null);
  const contentRect = useRect(contentRef);

  const isActive = useMemo(()=>{
      return contentRect.top < height * visibleAreaPercent;
    },
    [contentRect]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    // Add event listener for resize event
    window.addEventListener('resize', handleResize);

    // Call the resize handler to set the initial height
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={contentRef} className={styles.reveal + (isActive ? ` active ${effect}` : '')}>
      {props.children}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./HelloThere.module.css";
import { ScrollEvent } from "@/models/commonTypes";

interface IProps {
  isMobile: boolean;
  height: number;
}

export const HelloThere: React.FC<IProps> = (props) => {
  const [ bgColor, setBgColor ] = useState(255);

  useEffect(() => {
    const handleScroll = (event: ScrollEvent) => {
      // Normalized 0-9
      const scrollPercent = Math.round(event.target.scrollTop * 10 / props.height);

      if (scrollPercent >= 0 && scrollPercent <= 9) {
        setBgColor(Math.round(255 * (1 - scrollPercent / 10)));
      }
    }

    const container = document.getElementById('@@main-window')
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [props.height])

  return (
    <div
      className={styles.landing + ' flex flex-col'}
      style={{
        backgroundAttachment: props.isMobile ? 'inherit' : 'fixed',
        backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})`
      }}
    >
      <div className="w-full flex-1 flex justify-center items-center">
        <div className={`w-10/12 md:w-8/12 lg:w-6/12`}>
          <img src="https://paulpatena.com/public_images/paul_logo.png"
               alt="pauls logo"
               className={`w-full h-full object-contain`}
            // className={'fade-in-image'}
          />
        </div>
      </div>
      <div className="text-5xl px-8">
        Hello there.
      </div>
      <div className="text-2xl px-8 my-8">
        &#128075; My name is Paul and I love architecting solutions and developing software.
      </div>

      {/*    className={"fade-right"}*/}
      {/*    className={"fade-left"}*/}
    </div>
  );
}

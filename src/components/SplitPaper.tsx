import React from "react";

interface IProps {
  bgColor: string;
  counter?: string;
  title: string;
  subtitle: string;
  isMobile: boolean;
}

export const SplitPaper: React.FC<IProps> = (props) => {
  return (
    <div className="h-full">
      <div
        className="sm:w-full md:w-1/2 h-full opacity-80 flex justify-center items-center"
        style={{
          backgroundColor: props.bgColor,
          transition: "opacity 400ms ease-in"
        }}
      >
        {/*<FadeInAnimator>*/}
        <div className="px-8">
          <div className="text-2xl text-sky-50">
            {props.counter}{props.counter && <br/>}
            {props.title}
          </div>
          <div className="text-lg mt-2 text-sky-50">
            {props.subtitle}
          </div>
        </div>
        {/*</FadeInAnimator>*/}
      </div>

      {props.isMobile &&
        <div className="md:w-1/2">
        </div>
      }
    </div>
  );
}

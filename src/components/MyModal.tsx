import React from "react";

interface IProps {
  show: boolean;
  onClose?: ()=>void;
  children?: JSX.Element;
}

const MyModal:React.FC<IProps> = (props) => {
  const {onClose: closeHandler, show} = props;

  if (!show) {
    return null;
  }

  return(
    <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-900/75
          flex justify-center items-center">

      {!!closeHandler &&
        <div className="text-sky-50 text-5xl fixed top-8 right-16 cursor-pointer"
             onClick={closeHandler}
        >
          x
        </div>
      }

      {props.children}
    </div>
  )
}

export default MyModal;
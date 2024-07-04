import {
  bgBtnMap,
  borderBtnMap,
  colorBtnMap,
  heightBtnMap,
  widthBtnMap,
} from "../constants";

export default function Button({
  children,
  bg = "supporter-saturate",
  border,
  color = "black",
  height = 11,
  width = 40,
  disabled,
  onClick,
  isNotActive = false,
}) {
  const commonClasses = `flex justify-center items-center transition hover:brightness-110 active:brightness-75 duration-300 font-bold px-4  rounded-md 
                         h-10 md:${heightBtnMap[height]} ${widthBtnMap[width]} ${
    bgBtnMap[bg]
  } ${borderBtnMap[border]} ${colorBtnMap[color]} ${border && "border-4"}`;


  const notActiveClasses = `flex justify-center items-center font-bold px-4 rounded-md h-10 md:${
    heightBtnMap[height]
  } ${widthBtnMap[width]} ${bgBtnMap[bg]} ${borderBtnMap[border]} ${colorBtnMap[color]} ${
    border && "border-4"
  }`;

  return (
    <button
      className={isNotActive ? notActiveClasses : commonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

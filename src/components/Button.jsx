import { Link } from "react-router-dom"

const bgMap = {
  "radomtoon-dark" : "bg-radomtoon-dark ",
  "radomtoon-bright" : "bg-radomtoon-bright",
  "creator-normal" : "bg-creator-normal",
  "creator-saturate" : "bg-creator-saturate",
  "supporter-normal" : "bg-supporter-normal",
  "supporter-saturate" : "bg-supporter-saturate",
  white : "bg-white ",
  black : "bg-black ",
  red : "bg-red-300 hover:bg-red-500",
  green : "bg-green-300 hover:bg-green-500",
  none : "bg-none "
}

const borderMap = {
  "radomtoon-dark" : "border-radomtoon-dark ",
  "radomtoon-bright" : "border-radomtoon-bright",
  "creator-normal" : "border-creator-normal",
  "creator-saturate" : "border-creator-saturate",
  "supporter-normal" : "border-supporter-normal",
  "supporter-saturate" : "border-supporter-saturate",
  white : "border-white ",
  black : "border-black ",
  red : "border-red-300 hover:border-red-500",
  green : "border-green-300 hover:border-green-500",
  none : "border-none "
}

const colorMap = {
  "creator-normal" : "bg-creator-normal",
  "creator-saturate" : "bg-creator-saturate",
  "supporter-normal" : "bg-supporter-normal",
  "supporter-saturate" : "bg-supporter-saturate",
  white : "text-white hover:text-supporter-saturate",
  black : "text-black "
}

const widthMap = {
  full : 'w-full',
  40: 'w-40',
  20: 'w-20'
}

const heightMap = {
  none: '',
  full : 'h-full',
  11: 'h-11',
  14: 'h-14',
  20: 'h-20'
}

export default function Button({ children, to, bg='supporter-saturate', border, color='black', height=11, width=40, disabled, onClick}) {
  const commonClasses = `flex justify-center items-center transition hover:brightness-110 active:brightness-75 duration-300 font-bold px-4  rounded-md 
                        h-10 md:${heightMap[height]} sm:w-20 md:${widthMap[width]} ${bgMap[bg]} ${borderMap[border]} ${colorMap[color]} ${border && 'border-4'}`

  if (to) {
    return (
      <Link
      className={commonClasses}
      to={to}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={commonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
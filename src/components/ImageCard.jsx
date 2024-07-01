import { heightMap, progressBar, widthMap } from "../constants";
import ReactPlayer from "react-player";
import { useState } from "react";
import { TimeIcon } from "../icons";

export default function ImgCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  avatarImage,
  content,
  vid,
  widthSize = "medium",
  heightSize = "large",
  progressSize = "medium",
  mainCard = false,
  onClick,
}) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      role="button"
      className={`relative items-center gap-4 ${mainCard && "h-96"}`}
      onClick={onClick}
    >
      <div
        className={`group ${widthMap[widthSize]} ${
          heightMap[heightSize]
        }  active:scale-100 transition duration-300 rounded-2xl ${
          mainCard
            ? "h-auto mt-4 w-[580px]"
            : "p-4 border border-transparent hover:h-auto hover:absolute z-20 overflow-hidden hover:bg-white hover:border-slate-300 hover:shadow-lg"
        }  `}
      >
        <div
          className={`${
            mainCard ? "h-80  rounded-t-md" : "h-40"
          } relative overflow-hidden`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!hover && (
            <img
              src={imageSrc}
              className={`absolute h-full w-full object-cover rounded-t-lg`}
              alt="product-card"
            />
          )}
          {hover && (
            <div className="relative w-full h-full">
              <ReactPlayer
                url={vid}
                playing
                muted
                width="100%"
                height="100%"
                className="absolute top-0 left-0 rounded-t-lg"
              />
              <div className="absolute w-full h-full cursor-pointer" onClick={onClick} />
            </div>
          )}
        </div>
        <div className="h-2 bg-neutral-300">
          <div className={`h-2 ${progressBar[progressSize]} bg-supporter-saturate`}></div>
        </div>

        <div className="flex ml-4 gap-4 py-2">
          <div className="py-1">
            {avatarImage ? (
              <img
                src={avatarImage}
                className={`${mainCard ? "w-28" : "w-56"} rounded-full shadow-lg`}
                alt="Avatar"
              />
            ) : (
              <div className="w-10 h-10 font-semibold text-lg text-white rounded-full bg-gray-500 flex justify-center items-center">
                {creatorName[0].toUpperCase()}
              </div>
            )}
          </div>
          <div className="overflow-hidden px-2 group">
            <p
              className={`font-medium truncate group-hover:underline ${
                mainCard && "text-xl"
              }`}
            >
              {productName}
            </p>
            <span className="text-gray-600 text-xs block">{creatorName}</span>

            <span className="mr-2 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1 py-1">
                <TimeIcon className={"w-4 h-4"} />
                {daysLeft} days left
              </div>
            </span>
            <div
              className={`${
                mainCard
                  ? "opacity-100 -translate-y-3"
                  : "opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0"
              }`}
            >
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

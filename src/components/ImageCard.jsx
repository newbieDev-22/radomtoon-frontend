import {
  heightMap,
  progressBar,
  widthMap,
} from "../constants";
import ReactPlayer from "react-player";
import { useState } from "react";
import { DotMenu, TimeIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import { STATUS_PRODUCT } from "../constants/";

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
  productId,
  creatorId,
  isEdit = false,
}) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const navigate = useNavigate();
  const mockStatus = STATUS_PRODUCT.IN_PROGRESS;

  const handleClickDotMenu = () => {
    navigate(`/product/${productId}/status`);
  };

  const isEditCardMap = {
    true: `group ${widthMap[widthSize]} ${
      heightMap[heightSize]
    }  active:scale-100 transition duration-300 rounded-xl ${
      mainCard
        ? "h-auto w-[580px]"
        : "border border-transparent overflow-hidden"
    }  `,
    false: `group ${widthMap[widthSize]} ${
      heightMap[heightSize]
    }  active:scale-100 transition duration-300 rounded-xl ${
      mainCard
        ? "h-auto w-[580px]"
        : "border border-transparent hover:h-auto hover:absolute z-20 overflow-hidden hover:bg-white hover:border-slate-300 hover:shadow-lg"
    }  `,
  };

  return (
    <div className={`relative h-full`}>
      <div className="flex gap-4">
        <div className="relative">
          <div className={isEditCardMap[isEdit]}>
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
                <div
                  role="button"
                  className="relative w-full h-full"
                  onClick={() => navigate(`/campaign/${productId}`)}
                >
                  <ReactPlayer
                    url={vid}
                    playing
                    muted
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 rounded-t-lg"
                  />
                  <div className="absolute w-full h-full cursor-pointer" />
                </div>
              )}
            </div>
            <div className="h-2 bg-neutral-300">
              <div
                className={`h-2 ${progressBar[progressSize]} bg-supporter-saturate`}
              ></div>
            </div>
            <div className="mt-1 flex justify-end">
              {isEdit && (
                <span
                  className={`flex w-fit h-5 p-1 rounded-lg items-center  text-xs text-semibold font-medium  px-2 ${mockStatus.bg}`}
                >
                  {mockStatus.text}
                </span>
              )}
            </div>

            <div className={`flex px-2 gap-2 ${mainCard ? "py-4" : "py-2"} `}>
              <div
                role="button"
                className="w-1/6 py-1"
                onClick={() => navigate(`/creator-panel/${creatorId}`)}
              >
                {avatarImage ? (
                  <img
                    src={avatarImage}
                    className={`w-full rounded-full`}
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-10 h-10 font-semibold text-lg text-white rounded-full bg-gray-500 flex justify-center items-center">
                    {creatorName[0].toUpperCase()}
                  </div>
                )}
              </div>

              <div className="overflow-hidden px-2 group w-5/6">
                <div
                  role="button"
                  className={`font-medium truncate group-hover:underline ${
                    mainCard && "text-xl"
                  }`}
                  onClick={() => navigate(`/campaign/${productId}`)}
                >
                  {productName}
                </div>
                <span className="text-gray-600 text-xs block">
                  {creatorName}
                </span>

                <span className="mr-2 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1 py-1">
                    <TimeIcon className={"w-4 h-4"} />
                    {daysLeft} days left
                  </div>
                </span>
                {!isEdit && (
                  <div
                    className={`${
                      mainCard
                        ? "opacity-100 -translate-y-3"
                        : "opacity-0 group-hover:opacity-100 duration-[1s] group-hover:-translate-y-4"
                    }`}
                  >
                    <p>{content}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEdit && (
        <div className="absolute bottom-2 right-0 hover:scale-125 active:scale-100 transition-all">
          <div className=" cursor-pointer" onClick={handleClickDotMenu}>
            <DotMenu />
          </div>
        </div>
      )}
    </div>
  );
}

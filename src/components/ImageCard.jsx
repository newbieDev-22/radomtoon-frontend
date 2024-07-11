import { heightMap, widthMap, STATUS_PRODUCT, STATUS_PRODUCT_THEME } from "../constants";
import ReactPlayer from "react-player";
import { useState } from "react";
import { TimeIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function ImageCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  goal,
  totalFund,
  avatarImage,
  content,
  vid,
  widthSize = "medium",
  heightSize = "large",
  mainCard = false,
  productId,
  creatorId,
  isEdit = false,
  progressHeight = "medium",
  projectStatus = STATUS_PRODUCT.DRAFTING,
  isCorrectCreator=false
}) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const navigate = useNavigate();

  const handleClickDotMenu = () => {
    navigate(`/product/${productId}/status`);
  };

  const isEditCardMap = {
    true: `group ${widthMap[widthSize]} ${
      heightMap[heightSize]
    }  active:scale-100 transition duration-300 rounded-xl ${
      mainCard
        ? "h-auto w-[580px]"
        : "border border-transparent overflow-hidden shadow-lg"
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
    <div className={`relative h-full  `}>
      <div className="flex gap-4 ">
        <div className="relative ">
          <div className={isEditCardMap[isEdit]}>
            <div
              className={`${
                mainCard ? "h-80  rounded-t-md" : "h-40"
              } relative overflow-hidden`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(`/campaign/${productId}`)}
            >
              {!hover || !vid ? (
                <img
                  src={imageSrc}
                  className={`absolute h-full w-full object-cover rounded-t-lg`}
                  alt="product-card"
                />
              ) : null}
              {hover && vid && (
                <div className="relative w-full h-full">
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
            <ProgressBar
              Numerator={totalFund}
              Denominator={goal}
              height={progressHeight}
            />

            <div className={`flex px-2 bg-white  gap-2 ${mainCard ? "py-4" : "py-2"} `}>
              <div
                role="button"
                className="w-1/6"
                onClick={() => navigate(`/creator-panel/${creatorId}`)}
              >
                {avatarImage ? (
                  <img
                    src={avatarImage}
                    className="aspect-square rounded-full"
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-full aspect-square font-semibold text-2xl text-white rounded-full bg-gray-500 flex justify-center items-center">
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
                <div className="flex flex-row justify-between">
                  <span className="text-gray-600 text-xs block">{creatorName}</span>
                </div>

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
          {/* button */}
          <div className="absolute bottom-2 right-0 hover:brightness-110 active:scale-100 transition-all mr-1">
            {isEdit && (
              <button
                className={`flex w-32 h-4 justify-center items-center rounded-md text-xs font-semibold px-2 py-3 ${STATUS_PRODUCT_THEME[projectStatus].bg}`}
                onClick={handleClickDotMenu}
                disabled={!isCorrectCreator}
              >
                {STATUS_PRODUCT_THEME[projectStatus].text}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

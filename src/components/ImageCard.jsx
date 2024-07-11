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
  productId,
  creatorId,
  isEdit = false,
  progressHeight = "medium",
  projectStatus = STATUS_PRODUCT.DRAFTING,
  isCorrectCreator = false,
}) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const navigate = useNavigate();

  const handleClickDotMenu = () => {
    navigate(`/product/${productId}/status`);
  };

  const isEditCardMap = {
    true: `group ${widthMap[widthSize]} ${heightMap[heightSize]}  active:scale-100 transition duration-300 rounded-xl border border-transparent overflow-hidden shadow-lg
    }  `,
    false: `group ${widthMap[widthSize]} ${heightMap[heightSize]}  active:scale-100 transition duration-300 rounded-xl border border-transparent hover:h-auto hover:absolute z-20 overflow-hidden hover:bg-white hover:border-slate-300 hover:shadow-lg`,
  };

  return (
    <div
      role="button"
      className="relative h-full transition-all duration-450 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-4">
        <div className="relative">
          <div className={isEditCardMap[isEdit]}>
            <div
              className="h-40 relative overflow-hidden bg-white/70 px-2 pt-2"
              onClick={() => navigate(`/campaign/${productId}`)}
            >
              {!hover || !vid ? (
                <img
                  src={imageSrc}
                  className={` h-full w-full object-cover rounded-t-lg`}
                  alt="product-card"
                />
              ) : null}
              {hover && vid && (
                <div className=" w-full h-full">
                  <ReactPlayer
                    url={vid}
                    playing
                    muted
                    width="100%"
                    height="100%"
                    className="rounded-t-lg"
                  />
                </div>
              )}
            </div>
            <div className="px-2 bg-white/70">
              <ProgressBar
                Numerator={totalFund}
                Denominator={goal}
                height={progressHeight}
              />
            </div>
            <div className=" px-2 pb-2 bg-white/70 rounded-b-xl">
              {!hover ? (
                <div className="flex bg-white px-2 gap-2 pt-2 pb-1 rounded-b-xl">
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
                      <div className="w-full aspect-square font-semibold text-xl text-white rounded-full bg-gray-400 flex justify-center items-center">
                        {creatorName[0].toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="overflow-hidden px-2 group w-5/6">
                    <div
                      role="button"
                      className="font-medium truncate group-hover:underline"
                      onClick={() => navigate(`/campaign/${productId}`)}
                    >
                      {productName}
                    </div>
                    <div className="flex flex-row justify-between pt-[2px]">
                      <span className="text-gray-600 text-xs">{creatorName}</span>
                    </div>

                    <span className="text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1 py-1">
                        <div>
                          <TimeIcon className={"w-4 h-4"} />
                        </div>
                        <span className="mt-[2px]">{daysLeft} days left</span>
                      </div>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex bg-white px-2 gap-2 pt-2 pb-1 rounded-b-xl">
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
                      <div className="w-full aspect-square font-semibold text-xl text-white rounded-full bg-gray-400 flex justify-center items-center">
                        {creatorName[0].toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="overflow-hidden px-2 group w-5/6">
                    <div
                      role="button"
                      className="font-medium truncate group-hover:underline"
                      onClick={() => navigate(`/campaign/${productId}`)}
                    >
                      {productName}
                    </div>
                    <div className="flex flex-row justify-between pt-[2px]">
                      <span className="text-gray-600 text-xs">{creatorName}</span>
                    </div>

                    <span className="text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1 py-1">
                        <div>
                          <TimeIcon className={"w-4 h-4"} />
                        </div>
                        <span className="mt-[2px]">{daysLeft} days left</span>
                      </div>
                    </span>

                    <div className="opacity-0 pt-2 pb-1 group-hover:opacity-100 duration-[1s] ">
                      <p>{content}</p>
                    </div>
                  </div>
                </div>
              )}
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

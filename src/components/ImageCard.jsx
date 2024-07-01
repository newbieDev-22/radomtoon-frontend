import { heightMap, imageMap, progressBar, widthMap } from "../constants";
import { TimeIcon } from "../icons";

export default function ImgCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  avatarImage,
  content,
  widthSize = "medium",
  heightSize = "large",
  progressSize = "medium",
  imageSize = "medium",
  mainCard = false,
  onClick,
}) {
  return (
    <div role="button" className="relative items-center gap-4" onClick={onClick}>
      <div
        className={`group ${widthMap[widthSize]} ${
          heightMap[heightSize]
        }  hover:scale-[102%] active:scale-100 transition-all shadow-lg rounded-md ${
          mainCard
            ? "h-auto "
            : "hover:h-auto hover:absolute z-20 overflow-hidden hover:bg-white"
        }  `}
      >
        <div
          className={`${
            mainCard ? "h-64 rounded-t-md" : "h-40"
          } relative overflow-hidden`}
        >
          <img
            src={imageSrc}
            className={`absolute object-cover h-full w-full top-0 left-0 ${imageMap[imageSize]} object-cover`}
            alt="product-card"
          />
        </div>
        <div className="h-2 bg-neutral-300">
          <div className={`h-2 ${progressBar[progressSize]} bg-supporter-saturate`}></div>
        </div>
        <div className="flex ml-4 gap-4 py-2 px-2">
          <div className="py-1">
            {avatarImage ? (
              <img
                src={avatarImage}
                className="w-48 rounded-full shadow-lg"
                alt="Avatar"
              />
            ) : (
              <div className="w-10 h-10 font-semibold text-lg text-white rounded-full bg-gray-500 flex justify-center items-center">
                {creatorName[0].toUpperCase()}
              </div>
            )}
          </div>
          <div className="overflow-hidden px-2">
            <p className="text-lg font-semibold truncate">{productName}</p>
            <span className="text-gray-600 text-xs block">{creatorName}</span>
            <span className="mr-2 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1 py-1">
                <TimeIcon className={"w-4 h-4"} />
                {daysLeft} days left
              </div>
            </span>
            <div
              className={`pb-4 pr-4  ${
                mainCard
                  ? "opacity-100 translate-y-0"
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

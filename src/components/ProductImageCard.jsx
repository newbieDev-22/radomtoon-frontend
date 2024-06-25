import { heightMap, imageMap, progressBar, widthMap } from "../constants";
import { TimeIcon } from "../icons";

export default function ProductImageCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  avatarImage,
  widthSize = "medium",
  heightSize = "large",
  progressSize = "medium",
  imageSize = "medium",
  mainCard = false,
}) {
  return (
    <div className="relative items-center gap-4">
      <div
        className={`group ${widthMap[widthSize]} ${
          heightMap[heightSize]
        } shadow-lg rounded-md ${
          mainCard ? "h-[542px]" : "z-20 overflow-hidden bg-white"
        }`}
      >
        <div className="h-40 relative overflow-hidden">
          <img
            src={imageSrc}
            className={`absolute rounded-md top-0 left-0 ${imageMap[imageSize]} object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-[1s]`}
          />
        </div>
        <div className="h-2 bg-neutral-300">
          <div className={`h-2 ${progressBar[progressSize]} bg-yellow-500`}></div>
        </div>
        <div className="flex ml-4 gap-4 py-2 px-2">
          <div className="py-1">
            <div name="avatar">
              <img
                src={avatarImage}
                className="w-24 rounded-full shadow-lg"
                alt="Avatar"
              />
            </div>
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
          </div>
        </div>
        <div className="absolute bottom-2 right-2">
          <a href="#">
            <p className="hover:text-gray-700 ">...</p>
          </a>
        </div>
      </div>
    </div>
  );
}

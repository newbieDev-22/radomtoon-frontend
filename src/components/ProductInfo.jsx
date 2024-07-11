import { useNavigate } from "react-router-dom";
import { TimeIcon } from "../icons";

export default function ProductInfo({
  productName,
  creatorName,
  daysLeft,
  productId,
  content,
  hover,
}) {
  const navigate = useNavigate();
  return (
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
            <TimeIcon className="w-4 h-4" />
          </div>
          <span className="mt-[2px]">{daysLeft} days left</span>
        </div>
      </span>
      {hover && (
        <div className="opacity-0 pt-2 pb-1 group-hover:opacity-100 duration-[1s] ">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

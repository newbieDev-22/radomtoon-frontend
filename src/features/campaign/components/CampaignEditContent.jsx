import dayjs from "dayjs";
import Input from "../../../components/Input";

export default function CampaignEditContent({ input, inputError, handleInputChange }) {
  return (
    <div className="flex justify-center gap-8 items-center">
      <div className="flex flex-col gap-4 w-[35vw] justify-evenly">
        <div className="grid grid-cols-6 gap-x-2 gap-y-4">
          <span className="text-gray-500 font-semibold content-center">Product Name</span>
          <div className="w-full text-gray-500 col-span-5">
            <Input
              placeholder="Product name"
              name="productName"
              value={input.productName}
              onChange={handleInputChange}
              error={inputError.productName}
            />
          </div>
          <span className="text-gray-500 font-semibold content-center">
            Summary Detail
          </span>
          <div className="w-full text-gray-500 col-span-5">
            <textarea
              placeholder="Please fill summary detail"
              name="summaryDetail"
              onChange={handleInputChange}
              value={input.summaryDetail}
              className={`placeholder-gray-500 indent-1 min-h-24 max-h-24 border ${
                inputError.summaryDetail ? "border-red-500" : "border-gray"
              }  text-gray-500 text-ls rounded-lg block p-2.5 w-full`}
            ></textarea>
            {inputError.summaryDetail && (
              <small className="text-red-500 font-semibold">
                {inputError.summaryDetail}
              </small>
            )}
          </div>
          <span className="text-gray-500 font-semibold content-center">Goal</span>
          <div className="w-full text-gray-500 col-span-5">
            <Input
              placeholder="Fill goal in THB"
              name="goal"
              type="number"
              value={input.goal}
              onChange={handleInputChange}
              error={inputError.goal}
            />
          </div>
          <span className="text-gray-500 font-semibold content-center">Deadline</span>
          <div className="col-span-5">
            <input
              type="date"
              value={dayjs(input.deadline).format("YYYY-MM-DD")}
              name="deadline"
              onChange={handleInputChange}
              className={`bg-gray-50 border  ${
                inputError.deadline ? "border-red-500" : "border-gray"
              } text-gray-900 rounded-lg block p-2.5 w-full`}
            />
            {inputError.deadline && (
              <small className="text-red-500 font-semibold">{inputError.deadline}</small>
            )}
          </div>
          <span className="text-gray-500 font-semibold content-center">Video Link</span>
          <div className="w-full text-gray-500 col-span-5">
            <Input
              placeholder="Fill video link"
              name="productVideo"
              value={input.productVideo}
              onChange={handleInputChange}
              error={inputError.productVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

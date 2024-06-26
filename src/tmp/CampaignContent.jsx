import { progressBar } from "../constants";
import Button from "../components/Button";

export default function CampaignContent({
  title,
  img,
  amountGet,
  amountGoal,
  supporters,
  remainingDay,
}) {
  return (
    <content className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold my-[5vh] w-[50vw] text-center">{title}</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 w-[666px] h-[452px] overflow-hidden rounded-xl">
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="h-2 bg-neutral-300">
            <div className={`h-2 ${progressBar["medium"]} bg-supporter-saturate`}></div>
          </div>
          <div>
            <div className="text-4xl font-bold text-supporter-saturate">
              THB {amountGet.toLocaleString("en-US")}
            </div>
            <div className="text-gray-500 font-semibold">
              supported of THB {amountGoal.toLocaleString("en-US")} goal
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">
              {supporters.toLocaleString("en-US")}
            </div>
            <div className="text-gray-500 font-semibold">supporters</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">{remainingDay}</div>
            <div className="text-gray-500 font-semibold">days to go</div>
          </div>
          <div>
            <Button width="full" onClick={""}>
              Support this project
            </Button>
          </div>
        </div>
      </div>
    </content>
  );
}

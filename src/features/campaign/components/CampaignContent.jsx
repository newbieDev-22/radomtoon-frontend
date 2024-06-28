import { progressBar } from "../../../constants";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const mockSelectTierPath = "/campaign/1/tier";

export default function CampaignContent({
  title,
  img,
  amountGet,
  amountGoal,
  supporters,
  remainingDay,
  isCreator = false,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-8">
      <div className="col-span-2 w-[666px] h-[452px] overflow-hidden rounded-xl">
        <img src={img} className="w-full h-full object-cover aspect-[16/9]" alt="" />
      </div>
      <div className="flex flex-col gap-4 w-[35vw] justify-center px-4">
        <h1 className="text-4xl font-semibold ">{title}</h1>
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
          {isCreator ? (
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex justify-between gap-8">
                <Button width="full">Save</Button>
                <Button width="full">Edit</Button>
                <Button width="full">Delete</Button>
              </div>
              <Button width="full">Send project to approve</Button>
            </div>
          ) : (
            <>
              <Button width="full" onClick={() => navigate(mockSelectTierPath)}>
                Support this project
              </Button>
              <Button bg="creator-normal" width="full">
                {true ? "Save" : "Edit"} Milestone
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

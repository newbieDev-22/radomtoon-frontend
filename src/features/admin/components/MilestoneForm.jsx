import { MILESTONE_STATUS } from "../../../constants";

export default function MilestoneForm({ milestoneRankId, milestoneDetail }) {

  
  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col justify-center items-center w-auto">
          <div className="flex w-full p-4 gap-4">
            <div className="flex flex-col gap-4">
              <h1 >Milestone : {MILESTONE_STATUS[milestoneRankId]}</h1>
              <p disabled className="bg-gray-100 p-4 w-full h-full rounded-lg">
                {milestoneDetail}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

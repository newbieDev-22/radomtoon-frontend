export default function MilestoneForm({ milestoneRankId, milestoneDetail }) {
  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <div className="flex flex-col justify-center items-center w-auto">
          <div className="flex w-full p-4 gap-4">
            <div className="flex flex-col gap-4">
              <h1>Milestone : {milestoneRankId}</h1>
              <p disabled className="p-2 w-full h-full">
                {milestoneDetail}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

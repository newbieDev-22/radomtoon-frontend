import Milestone from "../../../components/Milestone";
import AddMilestone from "./AddMilestone";

export default function MilestoneContainer() {
  return (
    <div>
      <Milestone />

      <div className="grid grid-cols-3  w-full">
        <AddMilestone name="Milestone 1" />
        <AddMilestone name="Milestone 2" />
        <AddMilestone name="Milestone 3" />
      </div>
    </div>
  );
}

import CreatorApproval from "./CreatorApproval";
import MilestoneApproval from "./MilestoneApproval";
import ProjectApproval from "./ProjectApproval";

export default function Approval() {
  return (
    <div className="flex flex-col">
      <CreatorApproval />
      <ProjectApproval />
      <MilestoneApproval />
    </div>
  );
}

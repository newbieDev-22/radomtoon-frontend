import { useNavigate } from "react-router-dom";
import ProjectApprovalCard from "./ProjectApprovalCard";

export default function ProjectApprovalAllCard({ currentItems }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-4 pb-4">
      {currentItems.map((item) => (
        <ProjectApprovalCard
          key={item.id}
          name={item.productName}
          onClick={() => navigate(`/campaign/${item.id}`)}
        />
      ))}
    </div>
  );
}

import { APPROVAL_STATUS_ID } from "../../../constants";

export default function Milestone({ approvalStatusObj }) {
  return (
  
      <div className="flex justify-center sticky top-20 pt-4 bg-white rounded-2xl">
        <ul className="steps w-[1200px] ">
          <li
            className={`step ${
              approvalStatusObj[1] === APPROVAL_STATUS_ID.SUCCESS ? "step-accent" : ""
            }`}
          >
            Planning
          </li>
          <li
            className={`step ${
              approvalStatusObj[2] === APPROVAL_STATUS_ID.SUCCESS ? "step-accent" : ""
            }`}
          >
            Prototype
          </li>
          <li
            className={`step ${
              approvalStatusObj[3] === APPROVAL_STATUS_ID.SUCCESS ? "step-accent" : ""
            }`}
          >
            Production
          </li>
        </ul>
      </div>

  );
}

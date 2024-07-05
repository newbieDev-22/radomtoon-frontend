import { useState } from "react";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";

export default function MilestoneEvidenceForm({ data,approve,reject }) {
  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <div className="flex flex-col justify-center items-center w-auto">
          <div className="flex w-full p-4 gap-4">
            <div className="w-1/2">
              <textarea disabled className="p-2 w-full h-full">
                {data?.evidenceTextDetail}
              </textarea>
            </div>

            <div className="bg-green-200 w-1/2">
              <img src={data?.evidenceImage} alt="" className=" aspect-16/9" />
            </div>
          </div>
          <div className="flex gap-4">
            <Button bg="red" width={20} onClick={reject}>
              Reject
            </Button>
            <Button bg="green" width={20} onClick={approve}>
              Approve
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

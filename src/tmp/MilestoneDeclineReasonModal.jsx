import React from "react";
import { useState } from "react";
import Button from "../components/Button";

export default function MilestoneDeclineReasonModal() {
  const [input, setInput] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} action="">
      <p className="mb-2">Decline reason</p>
      <textarea
        className="mb-4 w-[500px] h-[300px] rounded-lg p-2 border-[1.5px] border-gray-200 outline-none"
        name=""
        id=""
        placeholder="Please fill your decline reason..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-center gap-4 mt-4">
        <Button width={"small"} bg={"white"} border={"supporter-normal"}>
          Cancel
        </Button>
        <Button width={"large"} bg={"supporter-saturate"} color={"black"}>
          Accept
        </Button>
      </div>
    </form>
  );
}

import Button from "../../../components/Button";

export default function MilestoneEvidenceForm({
  evidenceTextDetail,
  evidenceImage,
  approve,
  reject,
}) {
  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col justify-center items-center w-auto">
          <div className="flex justify-between items-center w-[1000px] p-4 gap-4">
            <div className="w-1/2 w-[500px] h-[350px]">
              <p className="overflow-auto p-2 w-full h-full bg-gray-100 rounded-lg">{evidenceTextDetail}</p>
            </div>

            <div className=" w-1/2 ">
              <img src={evidenceImage} className="rounded-lg w-[500px] h-[350px] object-cover" />
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

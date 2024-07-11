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
          <div className="flex w-full p-4 gap-4">
            <div className="w-1/2">
              <p className="p-2 w-full h-full">{evidenceTextDetail}</p>
            </div>

            <div className="bg-green-200 w-1/2">
              <img src={evidenceImage} alt="" className=" aspect-16/9" />
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

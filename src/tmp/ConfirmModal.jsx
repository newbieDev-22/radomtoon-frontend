import Button from "../components/Button";

export default function ConfirmModal({ subTitle }) {
  return (
    <div className="flex flex-col">
      <div className="text-center mb-6 text-lg">{subTitle}</div>
      <div className="flex gap-6">
        <Button color="red">Cancel</Button>
        <Button color="green">Confirm</Button>
      </div>
    </div>
  );
}

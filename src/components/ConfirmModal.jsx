import Button from "./Button";

export default function ConfirmModal({ subTitle, onCancel, onConfirm }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center mb-6 text-lg">{subTitle}</div>
      <div className="grid grid-cols-2 gap-4">
        <Button bg="red" onClick={onCancel}>
          Cancel
        </Button>
        <Button bg="green" onClick={onConfirm}>
          Confirm
        </Button>

      </div>
    </div>
  );
}

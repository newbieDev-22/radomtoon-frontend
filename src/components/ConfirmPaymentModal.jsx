import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmPaymentModal() {
  return (
    <div>
      <Modal title="Confirm this payment">
        <div className="flex gap-6">
          <Button color="red">Cancel</Button>
          <Button color="green">Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}

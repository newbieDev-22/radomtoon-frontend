import Button from "../../../components/Button";

export default function CreatorDeliveryCard() {
  return (
    <div className="bg-gray-200 flex gap-4 justify-between items-center p-4 rounded-lg font-bold">
      <div>Support Name</div>
      <div>Tier Name</div>
      <div>
        <Button width={"full"} bg="green" onClick={() => {}}>
          Delivery
        </Button>
      </div>
    </div>
  );
}

import Button from "../../../components/Button";

export default function CreatorDeliveryCard() {
  return (
    <div className="border-b-2 flex justify-between items-center p-2 font-bold">
      <span>Support Name</span>
      <span>Tier Name</span>
      <div>
        <Button width={"full"} bg="green" onClick={() => {}}>
          Delivery
        </Button>
      </div>
    </div>
  );
}

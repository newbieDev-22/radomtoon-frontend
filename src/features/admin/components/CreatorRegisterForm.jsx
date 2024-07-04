import Button from "../../../components/Button";

export default function CreatorRegisterForm({
  data,
  handlePassApproval,
  handlePendingFailed,
}) {
  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-4 gap-4 content-center w-1/2">
        <h3 className="font-semibold text-xl ">First Name</h3>
        <p className="text-xl bg-gray-100 px-2 col-span-3">{data.firstName}</p>
        <h3 className="font-semibold text-xl">Last Name</h3>
        <p className="text-xl bg-gray-100 px-2 col-span-3">{data.lastName}</p>
        <h3 className="font-semibold text-xl">Email</h3>
        <p className="text-xl bg-gray-100 px-2 col-span-3">{data.email}</p>
        <h3 className="font-semibold text-xl">Phone</h3>
        <p className="text-xl bg-gray-100 px-2 col-span-3">{data.phone}</p>
        <h3 className="font-semibold text-xl">Address</h3>
        <p className="text-xl bg-gray-100 px-2 col-span-3">{data.address}</p>
        <h3 className="font-semibold text-xl">Province</h3>
        <p className="text-xl bg-gray-100 px-2 col-span-3">{data.provinceName}</p>
        <div className="col-span-2">
          <Button bg="red" width={"full"} onClick={() => handlePendingFailed(data.id)}>
            Reject
          </Button>
        </div>
        <div className="col-span-2">
          <Button bg="green" width={"full"} onClick={() => handlePassApproval(data.id)}>
            Approve
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-1/2">
        <h3 className="text-2xl text-center font-bold text-radomtoon-dark overflow-hidden">
          Identity Image Preview
        </h3>
        <img
          src={data.identityImage}
          alt="Selected"
          className=" object-cover scale-95 rounded-xl"
        />
      </div>
    </div>
  );
}

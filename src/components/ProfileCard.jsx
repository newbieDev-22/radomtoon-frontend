import { useStore } from "../store/useStore";

export default function ProfileCard({ creatorId }) {
  const selectedCreator = useStore((state) => state.selectCreator(creatorId));

  return (
    <div className="flex w-72 flex-col items-center bg-white rounded-lg drop-shadow-md py-5 gap-5 ">
      {selectedCreator.profileImage ? (
        <div className="w-14 h-14">
          <img
            src={selectedCreator.profileImage}
            className={`w-full aspect-square rounded-full`}
            alt="Avatar"
          />
        </div>
      ) : (
        <div className="w-14 h-14 font-semibold text-xl text-white rounded-full bg-gray-500 flex justify-center items-center">
          {selectedCreator.firstName[0].toUpperCase()}
        </div>
      )}
      <div>
        <h1 className="font-semibold text-center">
          {selectedCreator.firstName} {selectedCreator.lastName}
        </h1>
        <h2 className="text-sm text-gray-500 text-center">{`Joined ${selectedCreator.joinAt}`}</h2>
      </div>
      <div className=" w-full">
        <p className="px-10 text-sm h-56 overflow-hidden">{selectedCreator.biography}</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <span className="flex flex-col">
          <p className="text-xs text-gray-500">Supporter</p>
          <p className="font-medium">{selectedCreator.supporterCount}</p>
        </span>
        <span className="flex flex-col">
          <p className="text-xs text-gray-500">Project created</p>
          <p className="font-medium">{selectedCreator.productCount}</p>
        </span>
      </div>
    </div>
  );
}

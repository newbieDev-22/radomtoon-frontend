import TierCard from "./TierCard";

export default function TierContainer({ data, isApproved }) {
  return (
    <div className="w-full md:w-7/12  m-auto px-6 pb-6">
      <h2 id="header" className=" font-bold text-3xl">
        Select your reward
      </h2>
      <h3 id="subHeader" className=" text-xl mb-5">
        Select an option below
      </h3>
      <div
        className="flex flex-col gap-4
        "
      >
        {data
          ?.sort((tier1, tier2) => tier1.tierRankId - tier2.tierRankId)
          .map((el) => (
            <TierCard key={el.tierRankId} {...el} isApproved={isApproved} />
          ))}
      </div>
    </div>
  );
}

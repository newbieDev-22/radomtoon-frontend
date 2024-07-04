import ProgressBar from "../../../components/ProgressBar";

export default function CampaignShowContent({ input, remainingDay }) {
  return (
    <div className="flex flex-col gap-4 w-[35vw] justify-evenly">
      <div className="py-1">
        <ProgressBar
          Numerator={input.totalFund}
          Denominator={input.goal}
          height="large"
          rounded={true}
        />
      </div>
      <div>
        <div className="text-4xl font-bold text-supporter-saturate">
          THB {input.totalFund?.toLocaleString("en-US")}
        </div>

        <div className="text-gray-500 font-semibold">
          {`supported of THB ${input.goal.toLocaleString("en-US")} goal`}
        </div>
      </div>

      <div>
        <p className="text-3xl font-extrabold">
          {input.supportCount?.toLocaleString("en-US") || 0}
        </p>
        <p className="text-gray-500 font-semibold">supporters</p>
      </div>

      <div>
        <div className="text-3xl font-extrabold ">{remainingDay}</div>
        <p className="text-gray-500 font-semibold ml-1 mt-2">days to go</p>
      </div>
    </div>
  );
}

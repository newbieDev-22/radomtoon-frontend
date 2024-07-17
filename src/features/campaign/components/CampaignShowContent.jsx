import ProgressBar from "../../../components/ProgressBar";

export default function CampaignShowContent({ input, remainingDay }) {
  return (
    <>
    <div className="py-1">
        <ProgressBar
          Numerator={input.totalFund}
          Denominator={input.goal}
          height="large"
          rounded={true}
        />
      </div>
    <div className="flex md:flex-col gap-4 w-full md:w-[35vw] justify-evenly">
      <div>
        <div className="text-xl md:text-4xl font-bold text-supporter-saturate">
          THB {input.totalFund?.toLocaleString("en-US")}
        </div>

        <div className="text-xs md:text-base text-gray-500 font-semibold">
          {`supported of THB ${input.goal.toLocaleString("en-US")} goal`}
        </div>
      </div>

      <div>
        <p className="text-xl md:text-3xl font-extrabold">
          {input.supportCount?.toLocaleString("en-US") || 0}
        </p>
        <p className="text-xs md:text-base text-gray-500 font-semibold">supporters</p>
      </div>

      <div>
        <div className="text-xl md:text-3xl font-extrabold ">
          {remainingDay >= 0 ? remainingDay : 0}
        </div>
        <p className="text-xs md:text-base text-gray-500 font-semibold ">days to go</p>
      </div>
    </div>
    </>
  );
}

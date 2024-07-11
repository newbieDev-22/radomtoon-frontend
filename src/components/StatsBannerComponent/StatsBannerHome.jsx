import StatsItemHome from "./StatsItemHome";

export default function StatsBannerHome({ data }) {
  return (
    <div
      className={`h-[30vh] md:h-[40vh] w-screen flex items-center justify-center relative`}
    >
      <div
        className={
          "h-[17vh] md:h-[20vh] rounded-2xl w-[80vw] px-28 gap-56 text-center grid grid-cols-3 content-center bg-black/[45%] overflow-auto scroll-hidden shadow-md"
        }
      >
        {data.map((item) => (
          <StatsItemHome
            key={item.title}
            amount={item.amount}
            title={item.title}
            currency={item.currency}
          />
        ))}
      </div>
    </div>
  );
}

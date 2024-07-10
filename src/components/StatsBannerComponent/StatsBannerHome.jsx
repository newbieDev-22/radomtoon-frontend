import StatsItemHome from "./StatsItemHome";

export default function StatsBannerHome({ data }) {
  return (
    <div
      className={`h-[30vh] md:h-[40vh] w-screen flex items-center justify-center relative`}
    >
      <div
        className={
          "h-[20vh] rounded-2xl w-[80vw] px-3 grid grid-cols-3 content-center bg-white/[11%] overflow-auto scroll-hidden shadow-md"
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

export default function TextBlock({ title, value, previous, total }) {
  return (
    <div className="flex flex-col justify-between bg-white h-44 w-full rounded-2xl py-4 px-4">
      <p className="font-semibold text-center text-lg text-radomtoon-bright">{title}</p>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl text-center">{value.toLocaleString()}</h1>
        <h2
          className={`font-normal text-center ${
            total
              ? "text-radomtoon-bright text-lg"
              : value > previous
              ? "text-green-500 text-2xl"
              : "text-red-500 text-2xl"
          } `}
        >
          {total
            ? `achieved`
            : `${value > previous ? "+" : ""}${(
                ((value - previous) / previous) *
                100
              ).toFixed(1)}%`}
        </h2>
      </div>
      <p className="text-xs text-center font-medium text-gray-400">
        {total ? `from total of ${total}` : "vs previous 30 days"}
      </p>
    </div>
  );
}

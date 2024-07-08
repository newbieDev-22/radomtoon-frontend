export default function TextBlock({ title, value, prev, total }) {
  return (
    <div className="flex flex-col justify-between bg-white h-44 w-full rounded-2xl py-4 px-4">
      <p className="font-semibold text-center text-lg text-radomtoon-bright">{title}</p>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl text-center">
          {Number(value.toFixed(0)).toLocaleString()}
        </h1>
        <h2
          className={`font-normal text-center ${
            total
              ? 
                "text-radomtoon-bright text-lg"
              : 
                value > prev
                ? 
                  "text-green-500 text-2xl"
                : 
                  "text-red-500 text-2xl"
          } `}
        >
          {prev
            ?
            total
              ? 
                `achieved`
              : 
                `${value > prev ? "+" : ""}${( ((value - prev) / prev) * 100 ).toFixed(1)}%`
            :
            ''
          }
        </h2>
      </div>
      <p className="text-xs text-center font-medium text-gray-400">
        {total ? `from total of ${total}` : ( prev>=0 ) ? "vs previous 30 days" : 'THB per Supporter'}
      </p>
    </div>
  );
}

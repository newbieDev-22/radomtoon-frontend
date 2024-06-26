export default function StatsItem({ amount, title, isLast, currency }) {
  
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:w-auto md:text-3xl text-radomtoon-bright whitespace-nowrap">{currency} {amount.toLocaleString()}</h1>
        <p className="text-sm md:text-xl text-gray-400 whitespace-nowrap">{title}</p>
      </div>
      {!isLast && <hr className="h-[80%] mx-3 border"/>}
    </>
  )
}

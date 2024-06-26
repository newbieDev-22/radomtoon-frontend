import StatsItem from './StatsItem'

export default function StatsBar({ data, bg }) {

  return (
    <div className={`h-[30vh] md:h-[50vh] w-screen flex items-center justify-center bg-creator-normal bg-cover bg-center bg-[url('${bg}')]`}>
      <div className="h-[10vh] md:h-[15vh] w-[80vw] px-3 flex items-center text-center justify-around bg-white overflow-auto scroll-hidden shadow-md">
        {data.map((item, index, arr) => (
          <StatsItem key={item.id} amount={item.amount} title={item.title} currency={item.currency} isLast={index === arr.length - 1} />)
        )}
      </div>
    </div>
  )
}

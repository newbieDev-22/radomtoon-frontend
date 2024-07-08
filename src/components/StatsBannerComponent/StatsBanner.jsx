import StatsItem from './StatsItem'

export default function StatsBanner({ data, bg }) {

  return (
    <div className={`h-[30vh] md:h-[40vh] w-screen flex items-center justify-center relative`}>
      <div className="h-[10vh] md:h-[15vh] w-[80vw] px-3 flex items-center text-center justify-evenly bg-white overflow-auto scroll-hidden shadow-md">
        {data.map((item, index, arr) => (
          <StatsItem key={item.title} amount={item.amount} title={item.title} currency={item.currency} isLast={index === arr.length - 1} />)
        )}
      </div>
      <img src={bg} className='absolute w-full h-full -z-10 object-cover bg-creator-normal' alt="" />
    </div>
  )
}

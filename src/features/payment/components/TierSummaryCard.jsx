export default function TierSummaryCard({ title = "Test tier project 1", price = "20", date = "Mon, July 22 2024 10:59 AM UTC +07:00" }) {
    return (
        <div className="card bg-base-100 w-96  border-4 p-5 border-slate-900 rounded-lg ">
            <figure className="p-2 border-2 h-80 border-none pb-4">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="h-full object-cover rounded-lg" />
            </figure>
            <div className="card-body items-center text-center px-2">
                <div className="flex justify-between mb-3">
                    <p className="font-semibold text-xl max-w-64 text-left">{`Tier: ${title}`}</p>
                    <p className="font-semibold text-xl">{`${price} ฿`}</p>
                </div>
                <p className="text-base font-semibold text-left">Estimated delivery</p>
                <p className="text-left">{date}</p>
            </div>
        </div>

    )
}
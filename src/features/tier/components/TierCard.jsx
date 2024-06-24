export default function TierCard({ tierNumber = "1", productName = "", detail = "", dateEstimated = "Dec 2024", amountSupporters = "456" }) {
    return (
        <div className="shadow-lg  p-8 mb-10 ">
            <div className="flex justify-between ">
                <div className="flex flex-col gap-5 max-w-3xl">
                    <h2 className="font-bold text-3xl">{`Tier ${tierNumber}`}</h2>
                    <h3 className="text-2xl font-semibold  overflow-hidden">{`Product name: ${productName}`}</h3>
                    <p className="font-semibold">{`Detail: ${detail}`}</p>
                    <div className="max-w-3xl">
                        <p className="font-semibold">ESTIMATED DELIVERY</p>
                        <h3 className="text-xl font-semibold">{dateEstimated}</h3>
                    </div>

                    <div className="bg-gray-300 rounded-lg p-1 text-center font-semibold max-w-44">{`${amountSupporters} Supporters`}</div>
                    <button className="btn btn-primary max-w-44">Pledge 20B</button>

                </div>
                <div className="flex items-center justify-center">
                    <img

                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="product's picture"

                    />
                </div>
            </div>
        </div>
    )
}


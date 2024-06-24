import { lazy } from "react"

const TierCard = lazy(() => import("./TierCard"))

export default function TierContainer() {
    return (
        <>
            <div
                className=" w-7/12 m-auto mt-10 p-6 ">
                <h2
                    id="header"
                    className=" font-bold text-3xl"
                >
                    Select your reward
                </h2>
                <h3
                    id="subHeader"
                    className=" text-xl mb-5"
                >Select an option below
                </h3>
                <TierCard />
                <TierCard />
                <TierCard />
                <TierCard />
                <TierCard />
            </div>
        </>
    )
}
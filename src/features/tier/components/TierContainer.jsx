import TierCard from "./TierCard";

export default function TierContainer() {
    return (
        <>
            <div
                className=" w-[60vw] m-auto mt-10 p-6 ">
                <h2
                    className=" font-bold text-3xl"
                >
                    Select your reward
                </h2>
                <h3
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

import { lazy } from "react";

const ProductCommentCard = lazy(() => import("./ProductCommentCard"))


export default function ProductCommentContainer() {
    return (
        <>
            <div className="w-[70rem] bg-slate-200 m-auto p-10 mt-10">
                <div className="flex gap-5 justify-between mb-10">
                    <textarea className="w-full p-2"></textarea>
                    <button className="btn bg-lime-400 text-white hover:bg-lime-500">Send</button>
                </div>
                <ProductCommentCard />
                <ProductCommentCard />
                <ProductCommentCard />
                <ProductCommentCard />
                <ProductCommentCard />
            </div>

        </>

    )
}
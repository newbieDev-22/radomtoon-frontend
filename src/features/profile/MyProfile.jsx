import { useState } from "react";

export default function MyProfile({ firstName, size = 14, text = "text-2xl" }) {
    const [image, setImage] = useState();
    const initial = firstName ? firstName.charAt(0) : "?";

    return (
        <>
            {image ? (<div
                role="button"
                className="avatar w-14 ">
                <div className="w-24 rounded-full">
                    <img src={image} />
                </div>
            </div>)

                :

                (<div
                    role="button"
                    className={`w-${size} h-${size}  bg-creator-normal hover:bg-creator-saturate 
                    active:scale-95  rounded-full flex justify-center items-center`}
                >
                    <p className={`${text} text-white`}>{initial}</p>
                </div>)


            }
        </>


    )
}
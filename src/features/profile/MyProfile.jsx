
export default function MyProfile({ firstName, image }) {

    const initial = firstName ? firstName.charAt(0) : "?";

    return (
        <>
            {image ? (<div
                role="button"
                className="avatar w-14 ">
                <div className="rounded-full" role="button">
                    <img src={image} />
                </div>
            </div>)

                :

                (<div
                    role="button"
                    className={`w-14 h-14  bg-creator-normal hover:bg-creator-saturate 
                    active:scale-95  rounded-full flex justify-center items-center`}
                >
                    <p className={`text-2xl text-white`}>{initial}</p>
                </div>)


            }
        </>


    )
}

export default function EditProfilePictrue({ fileEl, image, handelChangeImage, firstName }) {
    const initial = firstName.charAt(0) || "?";

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            const newPicture = URL.createObjectURL(e.target.files[0]);
            handelChangeImage(newPicture);
        }
    };

    return (
        <>
            <input
                type="file"
                ref={fileEl}
                className="hidden"
                onChange={handleFileChange}
            />

            <div className="text-center">

                {image ? (<div
                    role="button"
                    onClick={() => fileEl.current.click()}
                    className="avatar w-80 "
                >
                    <div className="w-80 rounded-full" role="button">
                        <img src={image} />
                    </div>
                </div>)

                    :

                    (<div
                        role="button"
                        onClick={() => fileEl.current.click()}
                        className={`w-80 h-80 h-text-[10rem]  bg-creator-normal hover:bg-creator-saturate 
                     rounded-full flex justify-center items-center`}
                    >
                        <p className={`text-[10rem] text-white`}>{initial}</p>
                    </div>)}


                <h1
                    role="button"
                    onClick={() => fileEl.current.click()}
                    className="font-semibold text-lg mt-5 hover:underline"
                >Click for update profile picture</h1>
            </div>

        </>
    )
}

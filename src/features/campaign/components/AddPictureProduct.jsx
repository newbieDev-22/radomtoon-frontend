import ReactPlayer from "react-player";
import { PictureIcon } from "../../../icons";

export default function AddPictureProduct({ handleChangeImg, fileEl, newUrl, newImg, isEdit }) {

    const border = isEdit ? "border-2 rounded-2xl p-10" : ""

    return (
        <div className={`w-[35rem] ${border}`}>
            <input
                type="file"
                ref={fileEl}
                className="hidden"
                onChange={(e) => handleChangeImg(e)}
            />
            {newUrl ? (
                <div className="w-full h-full object-cover aspect-[16/9] ">
                    <ReactPlayer
                        url={newUrl}
                        playing={true}
                        width="100%"
                        height="100%"
                        loop={true}
                    />
                </div>
            ) : newImg ? (
                <img
                    role="button"
                    src={newImg}
                    onClick={() => fileEl.current.click()}
                    className="w-full h-full object-cover aspect-[16/9]  rounded-lg"
                    alt=""
                />
            ) : (
                <>
                    <div
                        role="button"
                        className="object-cover max-w-80 m-auto aspect-[16/9]"
                        onClick={() => fileEl.current.click()}
                    >
                        <div
                            className={` w-full rounded-lg  max-w-96 aspect-[16/9]`}
                        >
                            <PictureIcon />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

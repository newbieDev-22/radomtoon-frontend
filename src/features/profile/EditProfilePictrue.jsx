import { useRef } from "react"
import MyProfile from "./MyProfile"
import { useState } from "react"
import { useEffect } from "react"


export default function EditProfilePictrue() {

    const fileEl = useRef()

    const [newPicture, setNewPicture] = useState(null)

    useEffect(() => {
        console.log(newPicture)
    }, [newPicture])

    return (
        <>
            <input
                type="file"
                ref={fileEl}
                className="hidden"
                onChange={e => {
                    if (e.target.files[0]) {
                        const newPicture = URL.createObjectURL(e.target.files[0])
                        setNewPicture(newPicture)
                    }
                }}
            />
            <div className="text-center">
                <div
                    className="bg-black rounded-full"
                    onClick={() => fileEl.current.click()}
                >
                    <MyProfile firstName="Radomtoon" size={80} text="text-[10rem]" propImg={newPicture} />

                </div>
                <h1
                    role="button"
                    onClick={() => fileEl.current.click()}
                    className="font-semibold text-lg mt-5 hover:underline"
                >Click for update profile picture</h1>
            </div>

        </>
    )
}

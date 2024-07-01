import { useState } from "react";
import MyProfile from "./MyProfile";
import { useEffect } from "react";
import Modal from "../../components/Modal";
import EditProfilePictrue from "./EditProfilePictrue";

export default function DropdownProfile({ fileEl, image, handelChangeImage, firstName }) {

    const [openDropdown, setOpenDropdown] = useState(true)
    const [isOpenModal, setIsOpenModal] = useState(false)


    const handleClickLogout = () => {
        setOpenDropdown(false)
        setTimeout(() => {
            alert("Click LOG OUT")
        }, 0);

    }
    const handleClickEditProfile = () => {
        setIsOpenModal(true)
        setOpenDropdown(false)
    }

    useEffect(() => {
        setOpenDropdown(true)
    }, [openDropdown])

    const classLi = "hover:bg-creator-normal p-2 active:bg-creator-saturate focus:bg-creator-saturate rounded-md font-semibold "

    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" ><MyProfile firstName={firstName} image={image} /></div>
                {openDropdown &&
                    <ul tabIndex={0} className="dropdown-content  rounded-box z-[1] w-52 p-2 shadow mt-2 bg-white">
                        <li
                            role="button"
                            className={classLi}
                            onClick={handleClickEditProfile}
                            tabIndex={0}
                        ><a>EDIT PROFILE</a></li>
                        <li
                            role="button"
                            className={classLi}
                            onClick={handleClickLogout}
                            tabIndex={0}
                        ><a>LOG OUT</a></li>
                    </ul>
                }
            </div>

            <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)} >
                <EditProfilePictrue
                    fileEl={fileEl}
                    image={image}
                    handelChangeImage={handelChangeImage}
                    firstName={firstName} />
            </Modal>

        </>
    )
}


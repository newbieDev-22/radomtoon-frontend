import dayjs from 'dayjs'
import ReactPlayer from 'react-player/youtube'
import { useState } from "react"
import { progressBar } from "../constants"
import Button from "../components/Button"
import { useRef } from 'react'

export default function CampaignSetup({
    isCreator = true,
}) {

    const fileEl = useRef()

    const [isEdit, setIsEdit] = useState(true)
    const [date, setDate] = useState(new Date())
    const [newImg, setNewImg] = useState("")
    const [newUrl, setNewUrl] = useState("")
    const [newgoal, setNewGoal] = useState(0)
    const [title, setTitle] = useState("Your product title")

    const handleClickSave = () => {
        setIsEdit(false)
    }

    const handleClickEdit = () => {
        setIsEdit(true)
    }

    const handleClickDelete = () => {
        alert("Click delete")
    }

    const handleClickSendToApproval = () => {
        alert("Click Send To Approval")
    }

    return (
        <div className="flex justify-between gap-8 items-center mt-10 w-[80rem] m-auto relative ">
            <div className="w-[35rem] ">
                <input
                    type="file"
                    ref={fileEl}
                    className="hidden"
                    onChange={e => {
                        if (e.target.files[0]) {
                            const newPicture = URL.createObjectURL(e.target.files[0])
                            setNewImg(newPicture)
                        }
                    }}
                />
                {newUrl ? <div className='w-full h-full object-cover aspect-[16/9] '>
                    <ReactPlayer
                        url={newUrl}
                        playing={true}
                        width='100%'
                        height='100%'
                        loop={true}
                    // controls={true}
                    />
                </div>
                    : newImg ? <img
                        role='button'
                        src={newImg}
                        onClick={() => fileEl.current.click()}
                        className="w-full h-full object-cover aspect-[16/9] hover:rotate-6 hover:duration-500 active:scale-95 hover:opacity-30 rounded-lg"
                        alt="" />
                        : <>
                            <div
                                role='button'
                                className="object-cover max-w-80 m-auto"
                                onClick={() => fileEl.current.click()}
                            >
                                <div className={`aspect-auto w-full rounded-lg  max-w-96 hover:rotate-6 hover:duration-500 active:scale-95 hover:opacity-30`}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#33363F" stroke-width="2"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9997 13.5854L18.9794 13.5651C18.5898 13.1754 18.2537 12.8393 17.9536 12.5864C17.6367 12.3193 17.2917 12.0845 16.8665 11.9562C16.3014 11.7857 15.6986 11.7857 15.1335 11.9562C14.7083 12.0845 14.3633 12.3193 14.0464 12.5864C13.7463 12.8393 13.4102 13.1754 13.0206 13.5651L12.9921 13.5936C12.6852 13.9004 12.5046 14.0795 12.3645 14.1954L12.3443 14.2118L12.3317 14.1891C12.2447 14.0295 12.1435 13.7961 11.9726 13.3972L11.9191 13.2726L11.8971 13.2211L11.897 13.221C11.5411 12.3904 11.2422 11.693 10.9464 11.1673C10.6416 10.6257 10.2618 10.1178 9.66982 9.82106C9.17604 9.57352 8.6235 9.46711 8.07311 9.51356C7.41323 9.56924 6.87197 9.89977 6.38783 10.2894C5.98249 10.6157 5.52754 11.0598 5 11.5859V12.9999C5 13.5166 5.0003 13.9848 5.00308 14.411L6.117 13.2971C6.80615 12.6079 7.26639 12.1497 7.64186 11.8475C8.01276 11.5489 8.17233 11.5123 8.24128 11.5065C8.42475 11.491 8.60893 11.5265 8.77352 11.609C8.83539 11.64 8.96994 11.7333 9.20344 12.1482C9.43981 12.5682 9.69693 13.1646 10.0809 14.0605L10.1343 14.1851L10.1506 14.2232C10.2995 14.5707 10.4378 14.8936 10.5759 15.1468C10.7206 15.412 10.9308 15.7299 11.2847 15.9489C11.702 16.2072 12.1997 16.3031 12.6831 16.2182C13.093 16.1463 13.4062 15.9292 13.6391 15.7367C13.8613 15.5529 14.1096 15.3045 14.3769 15.0371L14.377 15.0371L14.4063 15.0078C14.8325 14.5816 15.1083 14.307 15.3353 14.1157C15.5526 13.9325 15.6552 13.8878 15.7112 13.8709C15.8995 13.8141 16.1005 13.8141 16.2888 13.8709C16.3448 13.8878 16.4474 13.9325 16.6647 14.1157C16.8917 14.307 17.1675 14.5816 17.5937 15.0078L18.9441 16.3582C18.9902 15.6404 18.9983 14.7479 18.9997 13.5854Z" fill="#33363F"></path> <circle cx="16.5" cy="7.5" r="1.5" fill="#33363F"></circle> </g></svg>
                                </div>
                            </div>
                        </>
                }

                {isCreator && isEdit ? (
                    <>
                        <div className="my-5">
                            <label
                                role="button"
                                htmlFor="inputImg"
                                className="font-semibold text-xl"
                            >Input products picture link</label>
                            <input
                                id="inputImg"
                                className="border-2 w-full font-semibold px-2 text-gray-500 rounded-lg p-1"
                                value={newImg}
                                onChange={(e) => setNewImg(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <label
                                role="button"
                                htmlFor="inputUrl"
                                className="font-semibold text-xl"

                            >Input products video link</label>
                            <input
                                id="inputUrl"
                                className="border-2 w-full font-semibold px-2 text-gray-500 rounded-lg p-1"
                                value={newUrl}
                                onChange={(e) => setNewUrl(e.target.value)}
                            />
                        </div>
                    </>) : null}

            </div>
            <div className="flex flex-col gap-4 w-[35vw] justify-center border-2 p-10 rounded-2xl">
                {!isEdit ? <h1 className="text-4xl font-semibold ">{title}</h1> :
                    <div className='flex items-center w-full gap-2'>
                        <label
                            role="button"
                            htmlFor="title"
                            className="font-semibold text-xl text-gray-500"
                        >Input products title : </label>
                        <input
                            id="title"
                            className="border-2  font-semibold px-2 text-gray-500 rounded-lg p-1"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                }

                <div className="text-gray-500 font-semibold ">
                    supported of THB{isEdit ? <input
                        type='number'
                        className="border-2  font-semibold text-xl px-2 text-gray-500 mx-2 max-w-56 rounded-lg"
                        value={newgoal}
                        onChange={(e) => setNewGoal(+e.target.value)}
                    /> : <p className="pl-1 inline-block font-semibold text-black">{newgoal.toLocaleString("en-US")}</p>}  goal
                </div>

                <div>
                    <p className="text-gray-500 font-semibold ml-1 ">Last day for fundraising</p>
                    {isEdit ? <>
                        <input
                            type="date"
                            value={dayjs(date).format('YYYY-MM-DD')}
                            onChange={(e) => setDate(dayjs(e.target.value).toISOString())}
                            className="bg-gray-50 border w-56 border-gray-300 text-gray-900 text-ls rounded-lg block  p-2.5 "
                        />
                    </> : <h1 className=" font-semibold">{dayjs(date).format("dddd,MMMM D,YYYY")}</h1>}
                </div>

                {isCreator ? <div className="flex gap-4">
                    <Button bg="green" onClick={handleClickSave}>Save</Button>
                    <Button bg="yellow" onClick={handleClickEdit} >Edit</Button>
                    <Button bg="red" onClick={handleClickDelete}>Delete</Button>
                    <div className=" text-sm" >
                        <Button bg="creator-saturate" onClick={handleClickSendToApproval} >Send to Approval</Button>
                    </div>
                </div> : <Button width="full" onClick={() => navigate(mockSelectTierPath)}>
                    Support this project
                </Button>
                }

            </div>
        </div >
    );
}
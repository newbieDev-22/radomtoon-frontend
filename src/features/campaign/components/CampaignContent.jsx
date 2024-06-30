import { progressBar } from "../../../constants";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import { useState } from "react";
import DatePicker from "react-datepicker"

const mockSelectTierPath = "/campaign/1/tier";

export default function CampaignContent({
  title,
  img,
  url = "",
  amountGet,
  amountGoal,
  supporters,
  remainingDay,
  isCreator = true,
}) {

  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(true)
  const [startDate, setStartDate] = useState(new Date());

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
    <div className="flex justify-center gap-8 items-center">
      <div className="w-[40rem] ">
        {url ? <ReactPlayer
          className="w-full h-full object-cover aspect-[16/9]"
          url={url}
          playing={true}
        // controls={true}
        /> : <img src={img} className="w-full h-full object-cover aspect-[16/9]" alt="" />}

        {isEdit && isCreator ? (
          <>
            <div className="my-5">
              <label
                role="button"
                htmlFor="inputImg"
                className="font-semibold text-xl "
              >Input products picture</label>
              <input
                id="inputImg"
                className="border-2 w-full font-semibold text-xl px-2 text-gray-500"
                value={img}
              />
            </div>
            <div className="my-5">
              <label
                role="button"
                htmlFor="inputImg"
                className="font-semibold text-xl "
              >Input products video link</label>
              <input
                id="inputImg"
                className="border-2 w-full font-semibold text-xl px-2 text-gray-500"
                value={url}
              />
            </div>
          </>) : null}

      </div>
      <div className="flex flex-col gap-4 w-[35vw] justify-center px-4">
        <h1 className="text-4xl font-semibold ">{title}</h1>
        <div className="h-2 bg-neutral-300">
          <div className={`h-2 ${progressBar["medium"]} bg-supporter-saturate`}></div>
        </div>
        <div>
          <div className="text-4xl font-bold text-supporter-saturate">
            THB {amountGet.toLocaleString("en-US")}
          </div>

          <div className="text-gray-500 font-semibold ">
            supported of THB{isEdit ? <input
              className="border-2  font-semibold text-xl px-2 text-gray-500 mx-2 max-w-56"
              value={amountGoal.toLocaleString("en-US")}
            /> : <p className="pl-1 inline-block">{amountGoal.toLocaleString("en-US")}</p>}  goal
          </div>








        </div>
        <div>
          <div className="text-3xl font-extrabold">
            {supporters.toLocaleString("en-US")}
          </div>
          <div className="text-gray-500 font-semibold">supporters</div>
        </div>
        <div>
          {isEdit ? <>
            <input

              type="date"
              className="bg-gray-50 border w-56 border-gray-300 text-gray-900 text-ls rounded-lg block  p-2.5 "
            />
          </> : <div className="text-3xl font-extrabold ">{remainingDay}</div>}

          <div className="text-gray-500 font-semibold ml-1 mt-2">days to go</div>
        </div>
        <div>


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
      </div>
    </div >
  );
}

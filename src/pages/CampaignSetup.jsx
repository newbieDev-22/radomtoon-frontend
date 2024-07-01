import dayjs from "dayjs";
import ReactPlayer from "react-player/youtube";
import { useState, useRef } from "react";
import Button from "../components/Button";
import { PictureIcon } from "../icons";

export default function CampaignSetup({ isCreator = true }) {
  const fileEl = useRef();
  const [isEdit, setIsEdit] = useState(true);
  const [date, setDate] = useState(new Date());
  const [newImg, setNewImg] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newGoal, setNewGoal] = useState(0);
  const [title, setTitle] = useState("Your product title");

  const handleClickSave = () => {
    setIsEdit(false);
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleClickDelete = () => {
    alert("Click delete");
  };

  const handleClickSendToApproval = () => {
    alert("Click Send To Approval");
  };

  return (
    <div className="flex justify-between gap-8 items-center mt-10 w-[80rem] m-auto relative ">
      <div className="w-[35rem] ">
        <input
          type="file"
          ref={fileEl}
          className="hidden"
          onChange={(e) => {
            if (e.target.files[0]) {
              const newPicture = URL.createObjectURL(e.target.files[0]);
              setNewImg(newPicture);
            }
          }}
        />
        {newUrl ? (
          <div className="w-full h-full object-cover aspect-[16/9] ">
            <ReactPlayer
              url={newUrl}
              playing={true}
              width="100%"
              height="100%"
              loop={true}
              // controls={true}
            />
          </div>
        ) : newImg ? (
          <img
            role="button"
            src={newImg}
            onClick={() => fileEl.current.click()}
            className="w-full h-full object-cover aspect-[16/9] hover:rotate-6 hover:duration-500 active:scale-95 hover:opacity-30 rounded-lg"
            alt=""
          />
        ) : (
          <>
            <div
              role="button"
              className="object-cover max-w-80 m-auto"
              onClick={() => fileEl.current.click()}
            >
              <div
                className={`aspect-auto w-full rounded-lg  max-w-96 hover:rotate-6 hover:duration-500 active:scale-95 hover:opacity-30`}
              >
                <PictureIcon />
              </div>
            </div>
          </>
        )}

        {isCreator && isEdit ? (
          <>
            <div className="my-5">
              <label role="button" htmlFor="inputImg" className="font-semibold text-xl">
                Input products picture link
              </label>
              <input
                id="inputImg"
                className="border-2 w-full font-semibold px-2 text-gray-500 rounded-lg p-1"
                value={newImg}
                onChange={(e) => setNewImg(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label role="button" htmlFor="inputUrl" className="font-semibold text-xl">
                Input products video link
              </label>
              <input
                id="inputUrl"
                className="border-2 w-full font-semibold px-2 text-gray-500 rounded-lg p-1"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 w-[35vw] justify-center border-2 p-10 rounded-2xl">
        {!isEdit ? (
          <h1 className="text-4xl font-semibold ">{title}</h1>
        ) : (
          <div className="flex items-center w-full gap-2">
            <label
              role="button"
              htmlFor="title"
              className="font-semibold text-xl text-gray-500"
            >
              Input products title :{" "}
            </label>
            <input
              id="title"
              className="border-2  font-semibold px-2 text-gray-500 rounded-lg p-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        )}
        <div className="text-gray-500 font-semibold ">
          supported of THB
          {isEdit ? (
            <input
              type="number"
              className="border-2  font-semibold text-xl px-2 text-gray-500 mx-2 max-w-56 rounded-lg"
              value={newGoal}
              onChange={(e) => setNewGoal(+e.target.value)}
            />
          ) : (
            <p className="pl-1 inline-block font-semibold text-black">
              {newGoal.toLocaleString("en-US")}
            </p>
          )}{" "}
          goal
        </div>
        <div>
          <p className="text-gray-500 font-semibold ml-1 ">Last day for fundraising</p>
          {isEdit ? (
            <>
              <input
                type="date"
                value={dayjs(date).format("YYYY-MM-DD")}
                onChange={(e) => setDate(dayjs(e.target.value).toISOString())}
                className="bg-gray-50 border w-56 border-gray-300 text-gray-900 text-ls rounded-lg block  p-2.5 "
              />
            </>
          ) : (
            <h1 className=" font-semibold">{dayjs(date).format("dddd,MMMM D,YYYY")}</h1>
          )}
        </div>
        <div className="flex gap-4">
          <Button bg="green" onClick={handleClickSave}>
            Save
          </Button>
          <Button bg="yellow" onClick={handleClickEdit}>
            Edit
          </Button>
          <Button bg="red" onClick={handleClickDelete}>
            Delete
          </Button>
          <div className=" text-sm">
            <Button bg="creator-saturate" onClick={handleClickSendToApproval}>
              Send to Approval
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

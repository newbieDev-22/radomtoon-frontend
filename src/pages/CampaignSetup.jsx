import { useState, useRef } from "react";
import Button from "../components/Button";
import AddProductVdoLink from "../features/campaign/components/AddProductVdoLink";
import AddPictureProduct from "../features/campaign/components/AddPictureProduct";
import AddProductName from "../features/campaign/components/AddProductName";
import AddGoalProject from "../features/campaign/components/AddGoalProject";
import AddDeadlineAndSummary from "../features/campaign/components/AddDeadlineAndSummary";

export default function CampaignSetup({ isCreator = true }) {

  const [isEdit, setIsEdit] = useState(true);
  const [date, setDate] = useState(new Date());
  const [newImg, setNewImg] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newGoal, setNewGoal] = useState(0);
  const [title, setTitle] = useState("Your product title");
  const [summary, setSummary] = useState("")

  const fileEl = useRef();

  const handleClickSave = () => {
    setIsEdit(false);
  };

  const handleOnChangeSummary = (e) => {
    setSummary(e.target.value)
  }

  const handleOnChangeVdoLink = (e) => {
    setNewUrl(e)
  }

  const handleChangeImg = (e) => {
    if (e.target.files[0]) {
      const newPicture = URL.createObjectURL(e.target.files[0]);
      setNewImg(newPicture);
    }
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeGoal = (e) => {
    setNewGoal(+e.target.value)
  }

  const handleChangeDate = (e) => {
    setDate(dayjs(e.target.value).toISOString())
  }

  return (
    <div
      className="flex justify-between gap-8 items-center 
   w-[80rem] m-auto relative text-gray-500 pt-24"
    >

      <AddPictureProduct
        isEdit={isEdit}
        fileEl={fileEl}
        newUrl={newUrl}
        newImg={newImg}
        handleChangeImg={handleChangeImg}
      />

      <div className="flex flex-col gap-4 w-[35vw] justify-center border-2 p-10 rounded-2xl">

        <AddProductName
          title={title}
          isEdit={isEdit}
          handleChangeTitle={handleChangeTitle}
        />

        <AddGoalProject
          isEdit={isEdit}
          newGoal={newGoal}
          handleChangeGoal={handleChangeGoal}
        />

        <AddDeadlineAndSummary
          handleOnChangeSummary={handleOnChangeSummary}
          summary={summary}
          isEdit={isEdit}
          date={date}
          handleChangeDate={handleChangeDate}
        />

        <AddProductVdoLink
          handleOnChangeVdoLink={handleOnChangeVdoLink}
          isCreator={isCreator}
          isEdit={isEdit}
          newUrl={newUrl}
        />

        <Button bg="green" width="full" onClick={handleClickSave}>
          Save
        </Button>
      </div>
    </div>
  );
}



import { useState } from "react";
import Button from "../../../components/Button";
import { USER_ROLE } from "../../../constants";

export default function ProductCommentCard({ el, isUserComment = true, handleClickDelete, handleClickSaveEdit }) {

  const [isEdit, setIsEdit] = useState(false)
  const [content, setContent] = useState(el.content)

  const handleClickSave = () => {
    handleClickSaveEdit(el.id, content)
    setIsEdit(false)
  }

  const role = el.role
  const margin = role === USER_ROLE.CREATOR ? "mr-56" : "ml-56"
  console.log(role)

  return (
    <div className={`bg-white p-5 rounded-xl mb-5 ${margin}`}>
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src={el.avatarImage} className="w-12 h-12 rounded-full" alt="avatar" />
          <h3 className="font-semibold text-xl">{el.userName}</h3>
          {role === USER_ROLE.CREATOR && <h3
            className="active:brightness-75 p-2
            font-bold px-4 rounded-md bg-yellow-300"
          >
            CREATOR
          </h3>}
        </div>

        {isUserComment && (
          <div className="flex gap-2 justify-end  w-[5rem]  ">
            {isEdit ? <Button bg="green" onClick={handleClickSave}>Save</Button> :
              <Button bg="yellow" onClick={() => setIsEdit(true)}>Edit</Button>
            }
            <Button bg="red" onClick={() => handleClickDelete(el)}>Delete</Button>
          </div>
        )}
      </div>
      {isEdit ? <textarea
        className="pt-6 pb-4 px-8 indent-8 text-justify w-full border-2 m-2 min-h-52"
        defaultValue={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea> :
        <p className="pt-6 pb-4 px-8 indent-8 text-justify">{content}</p>
      }


    </div>
  );
}

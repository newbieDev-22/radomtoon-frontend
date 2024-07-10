import { useState } from "react";
import Button from "../../../components/Button";
import { USER_ROLE } from "../../../constants";
import { useStore } from "../../../store/useStore";
import validateComment from "../../../validators/validate-create-comment";
import { toast } from "react-toastify";

export default function ProductCommentCard({ el, handleClickDeleteFunction }) {
  const updateComment = useStore((store) => store.updateComment);
  const deleteComment = useStore((state) => state.deleteComment);

  const user = useStore((state) => state.authUser.user);
  const userRole = useStore((state) => state.authUser.role);

  const isCorrectUser = (el) => {
    if (el.userId) {
      return el.userId === user.id;
    } else if (userRole === USER_ROLE.CREATOR) {
      return el.creatorId === user.id;
    }
  };



  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({ comment: el.comment });
  const [inputError, setInputError] = useState({ comment: "" });

  const handleClickSave = async () => {
    try {
      const dummyInput = { comment: input.comment };
      const error = validateComment(dummyInput);
      if (error) {
        return setInputError(error);
      }
      updateComment(el.id, input);
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDelete = async (id) => {
    try {
      await deleteComment(id);
      handleClickDeleteFunction(id);
      toast.success("Delete comment successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const role = el.userId ? USER_ROLE.SUPPORTER : USER_ROLE.CREATOR;
  const margin = role === USER_ROLE.CREATOR ? "mr-56" : "ml-56";

  return (
    <div className={`bg-white p-5 rounded-xl mb-5 ${margin} `}>
      <div className="flex gap-2 items-center justify-between ">
        <div className="flex gap-4 items-center ">
          {(el.supporterProfileImage && el.creatorProfileImage) ? (
            <img
              src={
                role === USER_ROLE.CREATOR
                  ? el.creatorProfileImage
                  : el.supporterProfileImage
              }
              className="w-12 h-12 rounded-full"
              alt="avatar"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center text-white">
              {role === USER_ROLE.CREATOR
                ? el.creatorFirstName[0]
                : el.supporterFirstName[0]}
            </div>
          )}
          
          <h3 className="font-semibold text-xl">
            {el.userId
              ? `${el.supporterFirstName} ${el.supporterLastName}`
              : ""}
          </h3>
          {role === USER_ROLE.CREATOR && (
            <>
              <h3 className="font-semibold text-xl">{el.creatorFirstName} {el.creatorLastName}</h3>
              <h3
                className="active:brightness-75 p-2
            font-bold px-4 rounded-md bg-yellow-300"
              >
                CREATOR
              </h3>
            </>
          )}
        </div>

        {isCorrectUser(el) && (
          <div className="flex gap-2 justify-end  w-[5rem]  ">
            {isEdit ? (
              <Button bg="green" onClick={() => handleClickSave()}>
                Save
              </Button>
            ) : (
              <Button bg="yellow" onClick={() => setIsEdit(true)}>
                Edit
              </Button>
            )}
            <Button bg="red" onClick={() => handleClickDelete(el.id)}>
              Delete
            </Button>
          </div>
        )}
      </div>
      {isEdit ? (
        <div>
          <textarea
            className={`pt-6 pb-4 px-8 indent-8 text-justify w-full border-2 m-2 min-h-52 
            ${inputError.comment ? " border-red-500" : "border-gray-300"}`}
            value={input.comment}
            onChange={(e) => setInput({ comment: e.target.value })}
          ></textarea>
          {inputError.comment && (
            <small className="text-red-500 font-semibold">
              {inputError.comment}
            </small>
          )}
        </div>
      ) : (
        <p className="pt-6 pb-4 px-8 indent-8 text-justify">{input.comment}</p>
      )}
    </div>
  );
}

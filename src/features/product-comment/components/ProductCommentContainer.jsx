import { useState } from "react";
import Button from "../../../components/Button";
import ProductCommentCard from "./ProductCommentCard";
import { USER_ROLE } from "../../../constants";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import validateComment from "../../../validators/validate-create-comment";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";


const commentInit = {
  userName: "Grant Mielke",
  content: ``,
  avatarImage:
    "https://i.kickstarter.com/assets/045/301/004/1692456516cb00cd981f84c4928bb134_original.png?anim=false&fit=cover&height=200&origin=ugc&q=92&width=200&sig=YdERXxAvZQBmRhkcK41DUs9O1jtYF%2BfPo0ibe4ZB0JI%3D",
  id: "",
};

export default function ProductCommentContainer() {

  const { productId } = useParams()

  const createComment = useStore((state) => state.createComment)
  const commentLoading = useStore((state) => state.commentLoading)



  const filterCommentByProductId = useStore((state) => state.commentFilterByProductId)

  const filterComment = filterCommentByProductId(+productId)

  const [allComment, setAllComment] = useState(filterComment);
  const [input, setInput] = useState({ comment: "" });
  const [inputError, setInputError] = useState({ comment: "" });
  const [isUserComment, setIsUserComment] = useState(true);

  const handleClickDeleteFunction = (id) => {
    const newAllComment = allComment.filter((el) => el.id !== id);
    setAllComment(newAllComment);
  };

  const handleClickSaveEdit = (id, data) => {
    const newAllComment = allComment;
    const commentIndex = allComment.findIndex((el) => el.id === id);
    newAllComment[commentIndex] = {
      ...newAllComment[commentIndex],
      content: data,
    };
    setAllComment(newAllComment);
  };

  const commentContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const showComment = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleCreateComment = async (e) => {
    try {
      e.preventDefault()
      const dummyInput = { comment: input.comment }
      const error = validateComment(dummyInput);
      if (error) {
        return setInputError(error);
      }
      setInputError({ comment: "" });
      const result = await createComment(productId, dummyInput)
      setAllComment(prev => [result, ...prev])
      toast.success("Comment created successfully")
      setInput(prev => ({ ...prev, comment: "" }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {commentLoading && <Spinner transparent />}
      <div className=" bg-gray-200 m-auto px-20 py-10">
        <form
          className="flex gap-5 justify-between mb-10 items-center"
          onSubmit={handleCreateComment}
        >

          <div className="w-full">
            <textarea
              className={`w-full px-8 py-4 min-h-16 max-h-32 outline-none rounded-xl text-lg
            ${inputError.comment ? " border-red-500" : "border-gray-300"
                }`}
              value={input.comment}
              placeholder="Write your comment here..."
              onChange={(e) => setInput({ comment: e.target.value })}


            ></textarea>
            {inputError.comment && (
              <small className="text-red-500 font-semibold">
                {inputError.comment}
              </small>)}
          </div>

          <Button bg="green" height={11} width={40}>
            Send
          </Button>
        </form>

        <motion.div variants={commentContainer} initial="hidden" animate="show">
          {allComment.map((el) => (
            <motion.div key={el.id} variants={showComment}>
              <ProductCommentCard
                el={el}
                isUserComment={isUserComment}
                handleClickDeleteFunction={handleClickDeleteFunction}
                handleClickSaveEdit={handleClickSaveEdit}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

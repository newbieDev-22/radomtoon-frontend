import { useState } from "react";
import Button from "../../../components/Button";
import ProductCommentCard from "./ProductCommentCard";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import validateComment from "../../../validators/validate-create-comment";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";
import { APPROVAL_STATUS_ID, USER_ROLE } from "../../../constants";

export default function ProductCommentContainer() {
  const { productId } = useParams();
  const createComment = useStore((state) => state.createComment);
  const commentLoading = useStore((state) => state.commentLoading);
  const filterCommentByProductId = useStore((state) => state.commentFilterByProductId);
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const { user, role } = useStore((state) => state.authUser);

  const filterComment = filterCommentByProductId(+productId);
  const [allComment, setAllComment] = useState(filterComment);
  const [input, setInput] = useState({ comment: "" });
  const [inputError, setInputError] = useState({ comment: "" });
  const filterData = filterProductByProductId(+productId);
  const isCreator = role === USER_ROLE.CREATOR && user?.id === filterData?.creatorId;

  const handleClickDeleteFunction = (id) => {
    const newAllComment = allComment.filter((el) => el.id !== id);
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
      e.preventDefault();

      if (role === USER_ROLE.GUEST ) {
        toast.error("Please login before comment");
        return;
      }
      if (filterData.approvalStatusId !== APPROVAL_STATUS_ID.SUCCESS ) {
        toast.error("Comments cannot be provided until the project receives approval");
        return;
      }
      if (!isCreator && role !== USER_ROLE.SUPPORTER ) {
        toast.error("Only the project owner is permitted to comment");
        return;
      }
      const dummyInput = { comment: input.comment };
      const error = validateComment(dummyInput);
      if (error) {
        return setInputError(error);
      }
      setInputError({ comment: "" });
      const result = await createComment(productId, dummyInput);
      setAllComment((prev) => [result, ...prev]);
      toast.success("Comment created successfully");
      setInput((prev) => ({ ...prev, comment: "" }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {commentLoading && <Spinner transparent />}
      <div className=" bg-gray-200 m-auto px-3 md:px-20 py-3 md:py-10 rounded-3xl">
        <form
          className="flex gap-5 justify-between mb-10 items-center"
          onSubmit={handleCreateComment}
        >
          <div className="w-full">
            <textarea
              className={`w-full px-3 md:px-8 py-2 md:py-4 min-h-16 max-h-32 outline-none rounded-xl text-lg
            ${inputError.comment ? " border-red-500" : "border-gray-300"}`}
              value={input.comment}
              placeholder="Write your comment here..."
              onChange={(e) => setInput({ comment: e.target.value })}
            ></textarea>
            {inputError.comment && (
              <small className="text-red-500 font-semibold">{inputError.comment}</small>
            )}
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
                handleClickDeleteFunction={handleClickDeleteFunction}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

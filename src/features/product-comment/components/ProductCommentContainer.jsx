import { useState } from "react";
import Button from "../../../components/Button";
import ProductCommentCard from "./ProductCommentCard";
import { USER_ROLE } from "../../../constants";
import { motion } from "framer-motion";

const data = [
  {
    userName: "Grant Mielke",
    content: `Hey there everyone! Thank you so much for checking out Bria's Mythical Menagerie! Few things!

-We'd love to invite you to join our Discord! https://discord.gg/MythCraft

we have a wonderful Discord community, and a dedicated Bria's channel where you can chat, ask questions, hang out, and even earn XP for helping us spread the word, which unlocks a Sparkly Astral Kitty pin included in your pledge!

-Please check out the FAQs! I will do my best to keep those updated. If you feel something is missing don't hesitate to ask here!

-Help us spread the word and hit those stretch goals! Share, Comment, tell your friends... you know the drill!

Happy creature collecting!`,
    avatarImage:
      "https://i.kickstarter.com/assets/045/301/004/1692456516cb00cd981f84c4928bb134_original.png?anim=false&fit=cover&height=200&origin=ugc&q=92&width=200&sig=YdERXxAvZQBmRhkcK41DUs9O1jtYF%2BfPo0ibe4ZB0JI%3D",
    id: 59249,
    role: USER_ROLE.CREATOR
  },
  {
    userName: "Grant Mielke",
    content: `Hey there everyone! Thank you so much for checking out Bria's Mythical Menagerie! Few things!

-We'd love to invite you to join our Discord! https://discord.gg/MythCraft

we have a wonderful Discord community, and a dedicated Bria's channel where you can chat, ask questions, hang out, and even earn XP for helping us spread the word, which unlocks a Sparkly Astral Kitty pin included in your pledge!

-Please check out the FAQs! I will do my best to keep those updated. If you feel something is missing don't hesitate to ask here!

-Help us spread the word and hit those stretch goals! Share, Comment, tell your friends... you know the drill!

Happy creature collecting!`,
    avatarImage:
      "https://i.kickstarter.com/assets/045/301/004/1692456516cb00cd981f84c4928bb134_original.png?anim=false&fit=cover&height=200&origin=ugc&q=92&width=200&sig=YdERXxAvZQBmRhkcK41DUs9O1jtYF%2BfPo0ibe4ZB0JI%3D",
    id: 59859,
    role: USER_ROLE.GUEST
  },
];

const commentInit = {
  userName: "Grant Mielke",
  content: ``,
  avatarImage:
    "https://i.kickstarter.com/assets/045/301/004/1692456516cb00cd981f84c4928bb134_original.png?anim=false&fit=cover&height=200&origin=ugc&q=92&width=200&sig=YdERXxAvZQBmRhkcK41DUs9O1jtYF%2BfPo0ibe4ZB0JI%3D",
  id: "",
};

export default function ProductCommentContainer() {
  const [allComment, setAllComment] = useState(data);
  const [comment, setComment] = useState(commentInit);
  const [isUserComment, setIsUserComment] = useState(true);

  const handleClickSend = (e) => {
    e.preventDefault();
    setAllComment([...allComment, comment]);
    setComment(commentInit);
  };

  const handleClickDelete = (e) => {
    const newAllComment = allComment.filter((el) => el.id !== e.id);
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

  return (
    <>

      <div className=" bg-gray-200 m-auto px-20 py-10">
        <form
          className="flex gap-5 justify-between mb-10 items-center"
          onSubmit={handleClickSend}
        >
          <textarea
            className="w-full px-8 py-4 min-h-16 max-h-32 outline-none rounded-xl text-lg"
            value={comment.content}
            onChange={(e) =>
              setComment({
                ...comment,
                content: e.target.value,
                id: Math.floor(Math.random() * 88888888888888),
              })
            }
            placeholder="Write your comment here..."
          ></textarea>
          <Button bg="green" height={11} width={40}>
            Send
          </Button>
        </form>

        <motion.div variants={commentContainer} initial="hidden" animate="show">
          {allComment.toReversed().map((el) => (
            <motion.div key={el.id} variants={showComment}>
              <ProductCommentCard
                el={el}
                isUserComment={isUserComment}
                handleClickDelete={handleClickDelete}
                handleClickSaveEdit={handleClickSaveEdit}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

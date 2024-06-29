import { useState } from "react";
import Button from "../../../components/Button";
import ProductCommentCard from "./ProductCommentCard";

const data = [
  {
    userName: "Grant Mielke",
    content: `Hey there everyone! Thank you so much for checking out Bria's Mythical Menagerie! Few things!

-We'd love to invite you to join our Discord! https://discord.gg/MythCraft

we have a wonderful Discord community, and a dedicated Bria's channel where you can chat, ask questions, hang out, and even earn XP for helping us spread the word, which unlocks a Sparkly Astral Kitty pin included in your pledge!

-Please check out the FAQs! I will do my best to keep those updated. If you feel something is missing don't hesitate to ask here!

-Help us spread the word and hit those stretch goals! Share, Comment, tell your friends... you know the drill!

Happy creature collecting!`,
    avatarImage: "https://i.kickstarter.com/assets/045/301/004/1692456516cb00cd981f84c4928bb134_original.png?anim=false&fit=cover&height=200&origin=ugc&q=92&width=200&sig=YdERXxAvZQBmRhkcK41DUs9O1jtYF%2BfPo0ibe4ZB0JI%3D",
    isCreator: true,
  },
  {
    userName: "Grant Mielke",
    content: `Hey there everyone! Thank you so much for checking out Bria's Mythical Menagerie! Few things!

-We'd love to invite you to join our Discord! https://discord.gg/MythCraft

we have a wonderful Discord community, and a dedicated Bria's channel where you can chat, ask questions, hang out, and even earn XP for helping us spread the word, which unlocks a Sparkly Astral Kitty pin included in your pledge!

-Please check out the FAQs! I will do my best to keep those updated. If you feel something is missing don't hesitate to ask here!

-Help us spread the word and hit those stretch goals! Share, Comment, tell your friends... you know the drill!

Happy creature collecting!`,
    avatarImage: "https://i.kickstarter.com/assets/045/301/004/1692456516cb00cd981f84c4928bb134_original.png?anim=false&fit=cover&height=200&origin=ugc&q=92&width=200&sig=YdERXxAvZQBmRhkcK41DUs9O1jtYF%2BfPo0ibe4ZB0JI%3D",
    isCreator: true,
  }
]



export default function ProductCommentContainer() {

  const [comment, setComment] = useState("");
  const [isUserComment, setIsUserComment] = useState(true)

  const handleClickSend = (e) => {
    e.preventDefault()
  }

  return (
    <div className=" bg-slate-200 m-auto px-20 py-10">

      <form
        className="flex gap-5 justify-between mb-10 items-center"
        onSubmit={handleClickSend}
      >
        <textarea
          className="w-full px-8 py-4 min-h-16 max-h-32 outline-none rounded-xl text-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
        ></textarea>
        <Button bg="green" height={11} width={40}>
          Send
        </Button>
      </form>

      {data.map(el => <ProductCommentCard el={el} isUserComment={isUserComment} />)}
      {/* <ProductCommentCard
        userName={mockUserName}
        content={mockComment}
        avatarImage={mockAvatarImage}
      /> */}
    </div>
  );
}

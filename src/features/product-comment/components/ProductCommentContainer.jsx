import { useState } from "react";
import Button from "../../../components/Button";
import ProductCommentCard from "./ProductCommentCard";
const mockUserName = "Brian Clark";
const mockComment =
  "“Lorem ipsum dolor sit amet consectetur eget maecenas sapLorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onareLorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onareLorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onareien fusce egestas risus purus suspendisse turpis volutpat onare”";

const mockAvatarImage =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

export default function ProductCommentContainer() {
  const [comment, setComment] = useState("");

  return (
    <div className="w-4/5 bg-slate-200 m-auto p-10">
      <div className="flex gap-5 justify-between mb-10 items-center">
        <textarea
          className="w-full px-8 py-4 min-h-16 max-h-32 outline-none rounded-xl text-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
        ></textarea>
        <Button bg="green" height={11} width={40}>
          Send
        </Button>
      </div>
      <ProductCommentCard
        userName={mockUserName}
        content={mockComment}
        avatarImage={mockAvatarImage}
        isUserComment={true}
      />
      <ProductCommentCard
        userName={mockUserName}
        content={mockComment}
        avatarImage={mockAvatarImage}
      />
      <ProductCommentCard
        userName={mockUserName}
        content={mockComment}
        avatarImage={mockAvatarImage}
      />
      <ProductCommentCard
        userName={mockUserName}
        content={mockComment}
        avatarImage={mockAvatarImage}
      />
      <ProductCommentCard
        userName={mockUserName}
        content={mockComment}
        avatarImage={mockAvatarImage}
      />
    </div>
  );
}

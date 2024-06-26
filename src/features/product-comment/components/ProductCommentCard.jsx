import Button from "../../../components/Button";

export default function ProductCommentCard({
  userName,
  avatarImage,
  isUserComment = false,
  content,
}) {
  return (
    <div className="bg-white p-5 rounded-xl mb-5">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={avatarImage} className="w-12 h-12 rounded-full" alt="avatar" />
          <h3 className="font-semibold text-xl">{userName}</h3>
        </div>

        {isUserComment && (
          <div className="flex gap-2 justify-end  w-[5rem]  ">
            <Button bg="yellow">Edit</Button>
            <Button bg="red">Delete</Button>
          </div>
        )}
      </div>
      <p className="mt-5">{content}</p>
    </div>
  );
}

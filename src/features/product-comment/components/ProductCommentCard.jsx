import Button from "../../../components/Button";

export default function ProductCommentCard({ el, isUserComment = true }) {

  return (
    <div className="bg-white p-5 rounded-xl mb-5">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src={el.avatarImage} className="w-12 h-12 rounded-full" alt="avatar" />
          <h3 className="font-semibold text-xl">{el.userName}</h3>

        </div>

        {isUserComment && (
          <div className="flex gap-2 justify-end  w-[5rem]  ">
            <Button bg="yellow">Edit</Button>
            <Button bg="red">Delete</Button>
          </div>
        )}
      </div>
      <p className="pt-6 pb-4 px-8 indent-8 text-justify">{el.content}</p>
    </div>
  );
}

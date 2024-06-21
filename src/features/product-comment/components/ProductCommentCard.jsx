export default function ProductCommentCard({ userName = "Brian Clark", item, authUser, content = "“Lorem ipsum dolor sit amet consectetur eget maecenas sapLorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onareLorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onareLorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onareien fusce egestas risus purus suspendisse turpis volutpat onare”" }) {

    item = {
        user_id: 1
    }
    authUser = {
        id: 1
    }

    return (
        <div className="bg-white p-5 rounded-xl mb-5">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="avatar  ">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-xl">{userName}</h3>
                </div>

                {authUser.id === item.user_id &&
                    <div className="flex gap-2 justify-end  w-[5rem]  ">
                        <button className="btn bg-lime-400 text-white hover:bg-lime-500 w-full">Edit</button>
                        <button className="btn bg-red-400 text-white hover:bg-red-500  w-full">Delete</button>
                    </div>
                }

            </div>
            <p className="mt-5">{content}</p>
        </div>
    )
}
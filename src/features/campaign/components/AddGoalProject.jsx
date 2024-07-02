

export default function AddGoalProject({ isEdit, newGoal, handleChangeGoal }) {
    return (
        <div className="text-gray-500 font-semibold text-ls">
            Goal
            {isEdit ? (
                <input
                    type="number"
                    className="border-2  font-semibold text-ls p-1 text-gray-500 mx-2 max-w-56 rounded-lg"
                    value={newGoal}
                    onChange={(e) => handleChangeGoal(e)}
                />
            ) : (
                <p className="pl-1 inline-block font-semibold text-black text-ls">
                    {newGoal.toLocaleString("en-US")}
                </p>
            )}{" "}
            THB
        </div>
    )
}

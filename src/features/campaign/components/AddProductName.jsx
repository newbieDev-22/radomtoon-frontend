
export default function AddProductName({ isEdit, handleChangeTitle, title }) {
    return (
        <>
            {!isEdit ? (
                <h1 className="text-4xl font-semibold text-black">{title}</h1>
            ) : (
                <div className="flex items-center w-full gap-2">
                    <label
                        role="button"
                        htmlFor="title"
                        className="font-semibold text-ls text-gray-500"
                    >
                        Produc name :{" "}
                    </label>
                    <input
                        id="title"
                        className="border-2 text-ls font-semibold px-2 text-gray-500 rounded-lg p-1"
                        value={title}
                        onChange={(e) => handleChangeTitle(e)}
                    />
                </div>
            )}
        </>
    )
}

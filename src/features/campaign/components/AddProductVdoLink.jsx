
export default function AddProductVdoLink({ handleOnChangeVdoLink, isCreator, isEdit, newUrl }) {
    return (
        <>
            {isCreator && isEdit ? (
                <div>
                    <label role="button" htmlFor="inputUrl" className="font-semibold text-ls">
                        Input products video link
                    </label>
                    <input
                        id="inputUrl"
                        className="border-2 w-full font-semibold px-2 text-gray-500 rounded-lg p-1 text-ls"
                        value={newUrl}
                        onChange={(e) => handleOnChangeVdoLink(e.target.value)}
                    />
                </div>
            ) : null}
        </>
    )
}



export default function AddSummary({ handleOnChangeSummary, summary }) {
    return (
        <div className="flex flex-col border-gray-300 text-gray-500 text-ls font-semibold mt-3">
            <label>Add summary</label>
            <textarea
                id="summary"
                value={summary}
                onChange={(e) => handleOnChangeSummary(e)}
                className="border  min-w-80 min-h-28 max-h-32 p-2" />

        </div>
    )
}

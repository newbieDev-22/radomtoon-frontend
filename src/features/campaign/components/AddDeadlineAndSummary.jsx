
import dayjs from 'dayjs'
import AddSummary from './AddSummary'

export default function AddDeadlineAndSummary({ handleOnChangeSummary, summary, isEdit, date, handleChangeDate }) {
    return (
        <div>
            {isEdit ? (
                <>
                    <p className="text-gray-500 font-semibold text-ls">Deadline</p>
                    <input
                        type="date"
                        value={dayjs(date).format("YYYY-MM-DD")}
                        onChange={(e) => handleChangeDate(e)}
                        className="bg-gray-50 border w-56 border-gray-300 text-gray-900 text-ls rounded-lg block  p-2.5 "
                    />

                    <AddSummary handleOnChangeSummary={handleOnChangeSummary} summary={summary} />

                </>
            ) : (
                <div >
                    <p className="text-gray-500 font-semibold text-ls">Deadline</p>
                    <h1 className=" font-semibold text-ls text-black">{dayjs(date).format("dddd,MMMM D,YYYY")}</h1>
                    <p className="text-gray-500 font-semibold mt-2 text-ls">Summary</p>
                    <h1 className=" font-semibold text-ls text-black">{summary}</h1>
                </div>
            )}
        </div>
    )
}

const dataGridColsMapping = {
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export default function GridTable({ data, index, isHeader = false }) {
  const tableColor = {
    isEven: `grid ${
      dataGridColsMapping[data.length]
    } gap-4 bg-white border-b-2 border-gray-100 text-center p-2`,
    isOdd: `grid ${
      dataGridColsMapping[data.length]
    } gap-4 bg-gray-200 border-b-2 border-gray-100 text-center p-2`,
    isHeader: `grid ${
      dataGridColsMapping[data.length]
    } gap-4 bg-creator-normal text-lg font-semibold border-b-2 border-gray-100 text-center p-2 rounded-t-md`,
  };

  return (
    <div
      key={index}
      className={
        isHeader
          ? tableColor.isHeader
          : index % 2 === 0
          ? tableColor.isEven
          : tableColor.isOdd
      }
    >
      {data.map((el, subIndex) => (
        <div
          key={subIndex}
          className="flex justify-center items-center border-black h-full"
        >
          {el}
        </div>
      ))}
    </div>
  );
}

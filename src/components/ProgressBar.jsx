export default function ProgressBar({ Numerator, Denominator }) {
  return (
    <div className="w-full h-2.5 bg-neutral-300 rounded-full">
      <div
        className="bg-supporter-saturate h-2.5 rounded-full"
        style={{
          width: `${
            (Numerator / Denominator) * 100 <= 100 ? (Numerator / Denominator) * 100 : 100
          }%`,
        }}
      ></div>
    </div>
  );
}

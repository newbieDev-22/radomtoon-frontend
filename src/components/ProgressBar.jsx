const heightProgressBarMap = {
  small: "h-1.5",
  medium: "h-2",
  large: "h-2.5",
  full: "h-full",
};

export default function ProgressBar({
  Numerator,
  Denominator,
  height = "medium",
  rounded = false,
}) {
  return (
    <div
      className={`w-full ${heightProgressBarMap[height]} bg-neutral-300 ${
        rounded ? "rounded-full" : ""
      } `}
    >
      <div
        className={`bg-supporter-saturate ${heightProgressBarMap[height]} ${
          rounded ? "rounded-full" : ""
        }`}
        style={{
          width: `${
            (Numerator / Denominator) * 100 <= 100 ? (Numerator / Denominator) * 100 : 100
          }%`,
        }}
      ></div>
    </div>
  );
}

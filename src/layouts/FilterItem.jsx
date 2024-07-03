// export default function FilterItem({ page, onClick }) {
//   return (
//     <button
//       className="font-medium hover:scale-[110%] active:scale-100"
//       onClick={onClick}
//     >
//       {page}
//     </button>
//   );
// }

import { useRef } from "react";

export default function FilterItem({ children, setPosition }) {
  const ref = useRef(null)
  return (
    <>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect()
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft
          })
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase
    text-black mix-blend-darken md:px-5 md:py-3 md:text-base active:scale-95">
        {children}
      </li>

    </>
  );
}

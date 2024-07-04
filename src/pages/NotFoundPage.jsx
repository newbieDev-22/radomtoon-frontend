import { Error } from "../icons";
export default function NotFoundPage() {
  return (

      <div className="flex items-center justify-center h-screen flex-col gap-2">
        <span className="text-8xl text-red-500">404 ERROR !!</span>
        <span className="text-3xl text-red-500">
          Sorry, that page can't be found.
        </span>
        <Error />
        <a href="/" className="mt-2 text-creator-saturate font-semibold">
          Back to home page
        </a>
      </div>

  );
}

{
  /* <motion.div
initial={{ scale: 0 }}
animate={{ scale: [0.8, 1, 0.8] }}
transition={{
    duration: 2,
    repeat: Infinity,  // ทำให้เป็นลูปไม่สิ้นสุด
    repeatType: "loop" 
}}
className="flex justify-center flex-col items-center"
>
</motion.div> */
}

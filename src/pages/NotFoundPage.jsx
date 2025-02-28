import { useNavigate } from "react-router-dom";
import notFoundPage from "../assets/images/404error.jpg"
import Button from "../components/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-row h-[100vh] ">
      <div className="w-[50vw] px-20 flex flex-col justify-center gap-24 h-full">
        <div className="flex flex-col gap-10">
          <span className="text-9xl font-bold text-creator-saturate">Oops . .</span>
          <span className="text-xl font-medium text-radomtoon-bright">
            {`It seems the page you're looking for doesn't exist. Please check the URL, or
            head back to our homepage to find what you need.`}
          </span>
        </div>
        <div className="ml-10">
          <Button
            width="60"
            color="white"
            bg="creator-saturate"
            onClick={() => navigate("/")}
          >
            Back to home page
          </Button>
        </div>
      </div>
      <div className="h-full w-[50vw] flex justify-center overflow-hidden">
        <img
          src={notFoundPage}
          alt="404notfound"
          className="object-cover"
        />
      </div>
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

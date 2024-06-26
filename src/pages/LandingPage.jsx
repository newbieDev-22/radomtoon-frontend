import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const ExCarousel = {
  img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/rdvnkdwgeg1xihqm941e",
  title: "EASYPLAY1s - Portable Music Keyboard with MIDI",
};

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="relative flex flex-col justify-center items-center h-[100vh] z-10 overflow-hidden">
      <img src={ExCarousel.img} className="absolute w-full h-full object-cover" alt="" />
      <h1 className="md:w-[65vw] text-center text-white text-5xl md:text-6xl font-extrabold drop-shadow-2xl">
        {ExCarousel.title}
      </h1>
      <div className="absolute bottom-[15vh] flex flex-row gap-8 ">
        <Button onClick={() => navigate("/")} bg="supporter-saturate">
          SEE PROJECT
        </Button>
        <Button
          onClick={() => navigate("/")}
          bg="none"
          border="supporter-saturate"
          color="white"
        >
          GET STARTED
        </Button>
      </div>
    </main>
  );
}

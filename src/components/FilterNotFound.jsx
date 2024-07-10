import { useNavigate, useSearchParams } from "react-router-dom";
import notFoundPage from "../assets/images/404error.jpg";
import Button from "../components/Button";
import { useEffect } from "react";

export default function FilterNotFound() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.delete("categoryId");
    searchParams.delete("word");
    setSearchParams(searchParams);
  }, []);

  return (
    <div className="flex justify-center items-center flex-row h-[100vh] ">
      <div className="w-[50vw] px-20 flex flex-col justify-center gap-24 h-full">
        <div className="flex flex-col gap-10">
          <span className="text-5xl font-bold text-creator-saturate">
            Filter not found
          </span>
          <span className="text-xl font-medium text-radomtoon-bright">
            {`The filter you're looking for could not be found. Please review your filter criteria, or return to our homepage to continue.`}
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
        <img src={notFoundPage} alt="404notfound" className="object-cover" />
      </div>
    </div>
  );
}

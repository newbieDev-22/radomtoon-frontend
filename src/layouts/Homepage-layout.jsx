import ImgCard from "../components/Image-card";
import MainImageCard from "../components/Main-Image-Card";

export default function HomePageLayOut(){
    return(
        <div className="flex justify-center mt-20">
            <div>
                <MainImageCard size="large" />
            </div>
            <div className="grid grid-cols-2 gap-4 ml-4">
                <ImgCard size="medium" />
                <ImgCard size="medium" />
                <ImgCard size="medium" />
                <ImgCard size="medium" />
            </div>
        </div>
    )
}
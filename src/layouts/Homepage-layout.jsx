import FilterBar from "../components/Filter-Bar";
import ImgCard from "../components/Image-card";
import MainImageCard from "../components/Main-Image-card";

export default function HomePageLayOut(){
    return(
        <div>
            <div className='w-full h-20 bg-pink-400'>Navbar</div>
            <div>
                <FilterBar />
            </div>

        
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
        </div>
    )
}
import HomeGetStart from "../features/home/components/HomeGetStart";
import Carousal from "../components/Carousal";
import HomeStat from "../features/home/components/HomeStat";
import HomeProduct from "../features/home/components/HomeProduct";

export default function LandingPage() {
  const carouselList = [
    <HomeGetStart key={1} />,
    <HomeStat key={2} />,
    <HomeProduct key={3} />,
  ];
  return <Carousal>{carouselList}</Carousal>;
}

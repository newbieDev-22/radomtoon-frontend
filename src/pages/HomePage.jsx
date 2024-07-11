import HomeGetStart from "../features/home/components/HomeGetStart";
import HomeStat from "../features/home/components/HomeStat";
import HomeProduct from "../features/home/components/HomeProduct";
import Carousal from "../components/Carousal";

export default function HomePage() {
  const carouselList = [
    <HomeGetStart key={1} />,
    <HomeStat key={2} />,
    <HomeProduct key={3} />,
  ];
  return <Carousal>{carouselList}</Carousal>;
}

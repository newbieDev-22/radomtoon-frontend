import HomeGetStart from "../features/home/components/HomeGetStart";
import HomeStat from "../features/home/components/HomeStat";
import HomeProduct from "../features/home/components/HomeProduct";
import Carousal from "../components/Carousal";
import { useStore } from "../store/useStore";
import { USER_ROLE } from "../constants";

export default function HomePage() {
  const role = useStore(state => state.authUser.role)
  let carouselList = []
  if(role === USER_ROLE.SUPPORTER){
    carouselList = [
      <HomeProduct key={3} />,
      <HomeGetStart key={1} />,
      <HomeStat key={2} />,
    ];
  }else {
     carouselList = [
      <HomeGetStart key={1} />,
      <HomeStat key={2} />,
      <HomeProduct key={3} />,
    ];
  }
  
  return <Carousal>{carouselList}</Carousal>;
}

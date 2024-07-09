import { useStore } from "../store/useStore";
import StatsBanner from "../components/StatsBannerComponent/StatsBanner";
import HomeByFilterProduct from "../layouts/HomeByFilterProduct";

export default function HomeDummy() {
  const { projectSupport, towardIdea, contribution } = useStore(
    (state) => state.stats.data
  );
  const searchProduct = useStore((state) => state.searchProduct);
  const word = useStore((state) => state.word)

  const dataStatsBar = [
    { id: 1, amount: projectSupport, title: "projects supported" },
    { id: 2, amount: towardIdea, title: "towards ideas", currency: "THB" },
    { id: 3, amount: contribution, title: "contributions" },
  ];

  const HeroSection = {
    img : "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/rdvnkdwgeg1xihqm941e"
  }

  if (searchProduct.length || word) {
    return <HomeByFilterProduct />;
  } else {
    return (

        <StatsBanner data={dataStatsBar} bg={HeroSection.img} />

    );
  }
}

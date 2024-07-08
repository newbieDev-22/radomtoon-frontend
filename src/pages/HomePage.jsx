import { useStore } from "../store/useStore";
import StatsBanner from "../components/StatsBannerComponent/StatsBanner";
import InitialHome from "../layouts/InitialHome";
import HomeByFilterProduct from "../layouts/HomeByFilterProduct";

export default function HomePage() {

  const { projectSupport, towardIdea, contribution } = useStore((state) => state.stats.data)
  const searchProduct = useStore((state) => state.searchProduct)
  const dataStatsBar = [
    { id: 1, amount: projectSupport, title: "projects supported" },
    { id: 2, amount: towardIdea, title: "towards ideas", currency: "THB" },
    { id: 3, amount: contribution, title: "contributions" },
  ];

  if (searchProduct.length) {
    return <HomeByFilterProduct />
  } else {
    return <>
      <StatsBanner data={dataStatsBar} />
      <InitialHome />
    </>
  }
}

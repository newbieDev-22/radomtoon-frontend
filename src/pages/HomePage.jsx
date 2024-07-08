import { useStore } from "../store/useStore";
import StatsBanner from "../components/StatsBannerComponent/StatsBanner";
import InitialHome from "../layouts/InitialHome";
import HomeByFilterProduct from "../layouts/HomeByFilterProduct";
import CategoryContainer from "../features/home-filter/components/CategoryContainer";


export default function HomePage() {

  const { projectSupport, towardIdea, contribution } = useStore((state) => state.stats.data)
  const productByCategory = useStore((state) => state.productByCategory.data)
  const dataStatsBar = [
    { id: 1, amount: projectSupport, title: "projects supported" },
    { id: 2, amount: towardIdea, title: "towards ideas", currency: "THB" },
    { id: 3, amount: contribution, title: "contributions" },
  ];

  const word = useStore((state) => state.word)

  if (productByCategory.length) {
    return <CategoryContainer />
  } else {
    return <>
      <StatsBanner data={dataStatsBar} />
      <InitialHome />
    </>

  }

  // return (
  //   <>
  //     <StatsBanner data={dataStatsBar} />
  //     {
  //       console.log("productByCategory[0] = ", productByCategory[0] ? true : false)
  //     }
  //     {

  //       !word ? <InitialHome /> : productByCategory[0] ? <CategoryContainer /> : <HomeByFilterProduct />

  //     }
  //   </>
  // );
}

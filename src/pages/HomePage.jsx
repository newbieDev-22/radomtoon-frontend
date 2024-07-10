import { useStore } from "../store/useStore";
import StatsBanner from "../components/StatsBannerComponent/StatsBanner";
import InitialHome from "../layouts/InitialHome";

export default function HomePage() {
  const { projectSupport, towardIdea, contribution } = useStore(
    (state) => state.stats.data
  );

  const dataStatsBar = [
    { id: 1, amount: projectSupport, title: "active projects" },
    { id: 2, amount: towardIdea, title: "towards ideas", currency: "THB" },
    { id: 3, amount: contribution, title: "contributions" },
  ];

  return (
    <>
      <StatsBanner data={dataStatsBar} />
      <InitialHome />
    </>
  );
}

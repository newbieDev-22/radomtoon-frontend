import { subPageMap } from "../../../constants";
import CampaignSectionItem from "./CampaignSectionItem";

const sections = [
  { id: 1, tab: "Story" },
  { id: 2, tab: "Milestone" },
  { id: 3, tab: "Reward" },
  { id: 4, tab: "Forum" },
];

export default function CampaignSection({ handleSubPageChange }) {
  const handleTabClick = (tab) => {
    handleSubPageChange(subPageMap[tab.toUpperCase()]);

    let multiplier = 0.9; 
    if (window.matchMedia("(min-width: 1800px)").matches) { multiplier = 0.75; }
    else { multiplier = 0.9;  }

    const scrollPosition = window.innerHeight * multiplier;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <section className="h-[10vh] mt-10 flex items-center gap-20 text-white pl-[10vw] bg-radomtoon-dark sticky top-0 z-10">
      {sections.map((sec) => (
        <CampaignSectionItem
          onClick={() => handleTabClick(sec.tab) }
          key={sec.id}
          name={sec.name}
          tab={sec.tab}
        />
      ))}
    </section>
  );
}

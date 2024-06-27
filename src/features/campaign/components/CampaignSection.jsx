import { subPageMap } from "../../../constants";
import CampaignSectionItem from "./CampaignSectionItem";

const sections = [
  { id: 1, tab: "Story" },
  { id: 2, tab: "Milestone" },
  { id: 3, tab: "Reward" },
  { id: 4, tab: "Forum" },
];

export default function CampaignSection({ handleSubPageChange }) {
  return (
    <section className="h-[10vh] flex items-center gap-20 text-white pl-[10vw] bg-radomtoon-dark sticky top-0 z-10">
      {sections.map((sec) => (
        <CampaignSectionItem
          onClick={() => {
            handleSubPageChange(subPageMap[sec.tab.toUpperCase()]);
          }}
          key={sec.id}
          name={sec.name}
          tab={sec.tab}
        />
      ))}
    </section>
  );
}

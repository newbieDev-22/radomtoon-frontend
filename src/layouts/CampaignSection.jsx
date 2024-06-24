import CampaignSectionItem from "./CampaignSectionItem";

const sections = [
  { id: 1, tab: "Story" },
  { id: 2, tab: "Reward" },
  { id: 3, tab: "Forum" },
];

export default function CampaignSection() {
  return (
    <section className="h-[10vh] my-[10vh] flex items-center gap-20 text-white pl-[10vw] bg-radomtoon-dark">
      {sections.map((sec) => (
        <CampaignSectionItem key={sec.id} name={sec.name} tab={sec.tab} />
      ))}
    </section>
  );
}

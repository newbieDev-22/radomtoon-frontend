export default function CampaignSectionItem({ tab, onClick }) {
  return (
    <span onClick={onClick} className="font-medium hover:text-supporter-saturate cursor-pointer">
      {tab}
    </span>
  );
}

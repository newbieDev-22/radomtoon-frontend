export default function CampaignSectionItem({ tab, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="font-medium hover:text-supporter-saturate hover:scale-110 active:scale-100"
      >
        {tab}
      </button>
    </>
  );
}

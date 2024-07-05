import commentApi from "../apis/comment";
import CreatorDashboard from "../features/dashboard/components/CreatorDashboard";

export default function HommyDummy() {
  const dataComment = async () => {
    try {
      const data = await commentApi.getComment()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  dataComment()
  return (
    // <CategoryContainer />
    // <AdminDashboard />
    <CreatorDashboard title="Launching Soon! : Crystal Coffee Machine by Sara Shakeel" />

  );
}

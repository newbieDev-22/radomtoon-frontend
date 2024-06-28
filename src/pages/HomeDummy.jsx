import Modal from "../components/Modal";
import CategoryContainer from "../features/home-filter/components/CategoryContainer";
import SupporterRegisterForm from "../tmp/SupporterRegisterForm";

export default function HomeDummy() {
  // return <CategoryContainer />;
  return (
    <Modal title="CREATOR REGISTER FORM" width={45} open={true}>
      <SupporterRegisterForm />
    </Modal>
  );
}

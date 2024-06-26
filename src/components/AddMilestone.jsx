import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function AddMilestone() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 w-1/4 mt-10">
      <div className="h-40 shadow-md rounded-md">
        <Button
          bg="creator-saturate"
          color="white"
          width="full"
          height="full"
          onClick={handleButtonClick}
        >
          Milestone 1
        </Button>
      </div>
      <div className="h-40 shadow-md rounded-md">
        <Button
          bg="creator-saturate"
          color="white"
          width="full"
          height="full"
          onClick={handleButtonClick}
        >
          Milestone 2
        </Button>
      </div>
      <div className="h-40 shadow-lg rounded-md">
        <Button
          bg="creator-saturate"
          color="white"
          width="full"
          height="full"
          onClick={handleButtonClick}
        >
          Milestone 3
        </Button>
      </div>
      {isModalOpen && (
        <Modal title="Milestone Details" onClose={handleCloseModal}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Modal>
      )}
    </div>
  );
}

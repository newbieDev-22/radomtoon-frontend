import ImgCard from '../components/ImageCard'
import { mockImage , mockCreatorName ,mockProjectName, daysLeft , mockAvatar ,mockContent,mockVid } from '../constants';



export default function HommyDummy() {

  return (
    <>
        <ImgCard
              size="medium"
              imageSrc={mockImage}
              productName={mockProjectName}
              creatorName={mockCreatorName}
              daysLeft={daysLeft}
              content={mockContent}
              vid={mockVid}
              avatarImage={mockAvatar}
              isEdit={true}
              />
              </>

  )
}

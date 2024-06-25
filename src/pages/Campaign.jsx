import CampaignContent from '../components/CampaignContent'
import CampaignSection from '../layouts/CampaignSection'

const mockContent = {
  id:1,
  title: 'OneXPlayer X1 Series: 3-in-1 Console w. AMD 8840U',
  img: 'https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/ueoj4edrcifg9vhhlsmp',
  amountGet: 50000, 
  amountGoal: 10000,
  supporters: 4826, 
  remainingDay: 7,
}

export default function Campaign() {
  return (
    <div>
      <CampaignContent 
        title={mockContent.title} 
        img={mockContent.img} 
        amountGet={mockContent.amountGet} 
        amountGoal={mockContent.amountGoal} 
        supporters={mockContent.supporters} 
        remainingDay={mockContent.remainingDay}
      />
      <CampaignSection />
    </div>
  )
}

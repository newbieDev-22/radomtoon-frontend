import ProductCommentContainer from '../features/product-comment/components/ProductCommentContainer'
import CampaignSection from '../layouts/CampaignSection'
import Editor from '../components/EditorComponent/Editor'
import CampaignContent from '../components/CampaignContent'

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
      <content className='flex flex-col items-center'>
        <h1 className='text-3xl font-semibold my-[5vh] w-[50vw] text-center'>
          {project.title}
        </h1>
        <div className='grid grid-cols-2'>
          <div className='w-[564px] h-[452px] overflow-hidden  rounded-xl'>
            <img src={project.img} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='flex flex-col ml-16'>
            <div className=''>line</div>
            <div className='mb-6'>
              <div className='text-4xl font-bold text-supporter-saturate'>THB {50000}</div>
              <div className='text-gray-500 font-semibold'>supported of THB {"10,000"} goal</div>
            </div>
            <div className='mb-6'>
              <div className='text-3xl font-extrabold'>{5000}</div>
              <div className='text-gray-500 font-semibold'>supporters</div>
            </div>
            <div>
              <div className='text-3xl font-extrabold'>{7}</div>
              <div className='text-gray-500 font-semibold'>days to go</div>
            </div>
          </div>
        </div>
      </content>
      <CampaignSection />
                      <CampaignContent 
        title={mockContent.title} 
        img={mockContent.img} 
        amountGet={mockContent.amountGet} 
        amountGoal={mockContent.amountGoal} 
        supporters={mockContent.supporters} 
        remainingDay={mockContent.remainingDay}
      />
      <CampaignSection />
      <ProductCommentContainer />
      <div className='flex justify-center'>
        <div className='w-3/4'>
          <Editor />
        </div>
      </div>
      
     
    </div>
  )
}

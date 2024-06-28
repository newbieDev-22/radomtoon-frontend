import StatsBar from "../components/StatsBannerComponent/StatsBanner"

const mockImgStatsBar = 'https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/bmt7dsxiwpfjlnxpcazs'
const mockDataStatsBar = [
  { id: 1, amount: 194504, title: 'projects supported' },
  { id: 2, amount: 1062035636, title: 'towards ideas', currency: 'THB' },
  { id: 3, amount: 84372090, title: 'contributions' },
  { id: 4, amount: 2035636, title: "RADOMTOON's profits", currency: 'THB' },
]

export default function AdminPanel() {
  return (

    <StatsBar data={mockDataStatsBar} bg={mockImgStatsBar} />


  )
}
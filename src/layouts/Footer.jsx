import { useLocation } from 'react-router-dom'
import { RadomtoonIcon } from '../icons'

export default function Footer() {
  const location = useLocation()
  const hideFoooter = ['/landing','/login'].includes(location.pathname)

  return (
    <>
    {hideFoooter || (
      <div className='h-44 md:h-96 bg-radomtoon-dark flex flex-col items-center justify-center text-white'>
      <div className='text-supporter-normal w-2/3'>
        <RadomtoonIcon />
      </div>
      <div>
        © 2024 Radomtoon corporation. All Rights Reserved. 
      </div>
      </div>
    )}
    </>
  )
}

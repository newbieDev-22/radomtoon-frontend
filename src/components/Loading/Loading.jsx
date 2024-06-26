import { RadomtoonIcon } from '../../icons';
import './Loading.css';

export default function Loading () {

  return(
    <div className="loading-container">
    <div className="logo-mask text-supporter-saturate">
      <RadomtoonIcon />
      <div className="logo-mask-overlay"></div>
    </div>
  </div>
  )
}
import React, { useState } from "react";
import { useLocation} from "react-router-dom";

const ProfileImage = ({ firstName , lastName }) => {
  const location = useLocation();
  const [image, setImage] = useState(null);
  const creatorName = firstName ? firstName.charAt(0) : "?";
const inCreatorPanel = location.pathname == '/creator-panel'

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <>
      { inCreatorPanel ?
      (<>
          <div className="relative w-44 h-44">
      <input
        type="file"
        accept="image"
        onChange={handleImageUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="border border-black w-44 h-44 rounded-full flex justify-center items-center bg-white text-6xl text-black overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          creatorName
        )}
        
      </div>
    </div>
     <span className="text-3xl font-semibold my-2">{firstName} {lastName}</span>
      </>)
      :
      ( <div className="border border-black w-10 h-10 rounded-full flex justify-center items-center bg-white text-2xl text-black font-medium overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          initial
        )}
      </div>)}
</>
  );
};

export default  ProfileImage

/*

*/

import React, { useState } from "react";

const ProfileImage = ({ firstName , lastName }) => {
  const [image, setImage] = useState(null);
  const initial = firstName ? firstName.charAt(0) : "?";

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
    <div className="bg-gray-100 flex flex-col items-center h-[300px] justify-end shadow-md ">
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
          initial
        )}
        
      </div>
      {/* show firstname & lastname */}
    </div>
     <span className="text-3xl font-semibold my-2">{firstName} {lastName}</span>
    </div>
  );
};

export default ProfileImage;

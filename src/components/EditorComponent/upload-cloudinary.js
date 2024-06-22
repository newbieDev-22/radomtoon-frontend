export default async function uploadToCloudinary(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.log(err);
  }
}

import ImgCard from "../components/Image-card";

export default function CategoriesProduct() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-x-8 gap-y-4  ">
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
        <ImgCard size="small" />
      </div>
    </div>
  );
}

const widthMap = {
  small: "w-[300px]",
  medium: "w-80",
  large: "w-96",
};

const imageMap = {
  small: "h-32",
  medium: "h-48",
  large: "h-60",
};

const heightMap = {
  small: "h-48",
  medium: "h-60",
  large: "h-62",
};

const colorMap = {
  primary: "hover:bg-blue-500",
  secondary: "hover:bg-green-500",
  danger: "hover:bg-red-500",
};

const progressBar = {
  small: "w-32",
  medium: "w-48",
  large: "w-32",
};

const textMap = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-lg",
};

export default function ImgCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  size = "",
  buttonColor = "",
}) {
  return (
    <div className="relative items-center gap-5 ">
      <div
        className={`group bg-beige-400 ${widthMap[size]} ${heightMap[size]} hover:h-auto hover:scale-[102%] transition-all shadow-md rounded-md hover:absolute hover:bg-white z-20 overflow-hidden`}
      >
        <div className="h-40 relative overflow-hidden">
          <img
            src="https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKEfQbPGELW2YjCcDQUpDilBzR4jVwhRbzfUfbngdYegm1bTfTXjc.webp"
            className={`absolute top-0 left-0 ${imageMap[size]} object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-[1s]`}
          />
        </div>
        {/* progress bar */}
        <div className="h-1 bg-neutral-300">
          <div className={`h-1 ${progressBar[size]} bg-yellow-500`}></div>
        </div>
        {/* product detail */}
        <div className="flex flex-row ml-4 gap-2 overflow-visible ">
          <div name="avatar">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              className="w-48 rounded-full shadow-lg mt-2"
              alt="Avatar"
            />
          </div>
          <div className="m-1">
            <p className="text-lg tex">Product name{productName}</p>
            <p className="text-gray-600 text-xs">Creator: {creatorName}</p>
            <span className="mr-2 text-xs text-gray-500 font-medium">
              {daysLeft} days left
            </span>
            <div className="mt-2 opacity-0 pb-4 pr-4 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

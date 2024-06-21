const widthMap = {
  small: 'w-72',
  medium: 'w-80',
  large: 'w-[450px]',
};

const imageMap ={
  small:'h-32' ,
  medium: 'h-48',
  large: 'h-60'
}

const heightMap = {
  small: 'h-48',
  medium: 'h-72',
  large: 'h-80',
};

const colorMap = {
  primary: 'hover:bg-blue-500',
  secondary: 'hover:bg-green-500',
  danger: 'hover:bg-red-500',
};

const progressBar = {
  small: 'w-32',
  medium: 'w-48',
  large: 'w-32'
}

const textMap = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg'
}

export default function ImgCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  size = '',
  buttonColor = '',
}) {
  return (
    <div
      name="imageCardContainer"
      className={`block rounded-xl overflow-hidden shadow-md ${widthMap[size]} ${heightMap[size]}`}
    >
      <div>
        <img
          src={imageSrc}
          alt={productName}
          className={`w-full ${imageMap[size]} object-cover bg-slate-200`}
        />
        <div className="h-1 bg-neutral-300">
          <div className={`h-1 ${progressBar[size]} bg-yellow-500`}></div>
        </div>
      </div>

      <div className="flex flex-row justify-start mt-2">

          <div className="ml-3  p-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              className="w-6 rounded-full shadow-lg"
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col ml-2 ">
            <div className={` ${textMap[size]} font-bold`}>
              Product Name:
              {productName}
            </div>
            <p className="text-gray-600 text-xs">Creator: {creatorName}</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="mr-2 text-xs text-gray-500 font-medium">
                {daysLeft} days left
              </span>
            </div>
          </div>
        

        <div>
          <button className={`mt-5 ml-36 ${colorMap[buttonColor]}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

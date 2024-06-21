
export default function ImgCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
}) {
  return (
    <div className="block rounded-xl overflow-hidden shadow-md w-72  h-2/4">
      <div>
        <img
          src={imageSrc}
          alt={productName}
          className="w-full h-48 object-cover bg-slate-200"
        />
        <div className=" h-1 w-2/4 bg-neutral-600">
          <div className="h-1 bg-yellow-500"></div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex gap-3 p-4 ">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="w-6 rounded-full shadow-lg"
              alt="Avatar"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">
              <p>Product Name: </p>
              {productName}
            </h3>
            <p className="text-gray-600">creator name{creatorName}</p>
            <div className="flex items-center mt-2 gap-2 text-">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span className="mr-2 text-xs text-gray-500 font-medium">
                7 days left {daysLeft}
              </span>
            </div>
          </div>
        </div>

        <div>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 mt-5`}
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

/* Property 1=Default */

// position: absolute;
// width: 288px;
// height: 226px;
// left: 20px;
// top: 20px;

// background: #FFFFFF;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 10px;

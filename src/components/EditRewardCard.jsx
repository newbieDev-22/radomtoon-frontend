import { useState } from "react";
import Button from "./Button";
import { useEffect } from "react";
import { useRef } from "react";

export default function EditRewardCard({
  tierNumber,
  productName,
  detail,
  dateEstimated,
  amountSupporters,
  productImage,
  tierPrice
}) {
  tierPrice = 20

  const fileEl = useRef()
  // { name, product_name, estimated_date, price }
  // const [note, setNote] = useState("");
  const [detailState, setDetailState] = useState(detail)
  const [price, setPrice] = useState(tierPrice)
  const [updateProductName, setUpdateProductName] = useState(productName)
  // const [isEditing, setIsEditing] = useState(false);
  // const [error, setError] = useState("");
  useEffect(() => {
    console.log(detailState)
  }, [detailState])

  // const handleBlur = () => {
  //   setIsEditing(false);
  // };

  // const handleFocus = () => {
  //   setIsEditing(true);
  // };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   if (value.length <= 200) {
  //     setNote(value);
  //     setError("");
  //   } else {
  //     setError("Detail cannot exceed 200 characters.");
  //   }
  // };

  return (<>
    <div
      role="button"
      className="shadow-lg border-gray-300 border py-8 px-12 hover:border-gray-500 
    transition-all  rounded-xl "
    >
      <div className="grid grid-cols-7">
        <div className="flex flex-col gap-5 max-w-3xl col-span-4 justify-center">
          <h2 className="font-bold text-3xl">{`Tier ${tierNumber}`}</h2>
          {/* <h3 className="text-2xl font-semibold  overflow-hidden">{updateProductName}</h3> */}
          <textarea
            className="rounded-lg border-2 text-2xl font-semibold"
          >
            {updateProductName}
          </textarea>
          <div className="flex flex-col gap-2">
            {/* <h3 className="text-xl font-semibold">Detail</h3> */}
            <textarea
              className=" min-h-32 p-2 rounded-lg border-2"
              onChange={(e) => setDetailState(e.target.value)}
            >
              {detailState}
            </textarea>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl font-semibold">Estimated Delivery</p>
            <h3 className="">{dateEstimated}</h3>
          </div>

          <div className="bg-gray-300 w-40 rounded py-2 text-center font-semibold">{`${amountSupporters} Supporters`}</div>
          {/* <Button isNotActive={true}>Pledge 20 &#x0E3F;</Button> */}
          <div className="flex gap-2 pl-2 justify-start items-center">
            <p className="text-lg font-bold">Pledge</p>
            <input
              className="text-lg font-bold border-2 max-w-28 text-center rounded-lg"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p>&#x0E3F;</p>
          </div>

        </div>
        <input
          type="file"
          ref={fileEl}
          className="hidden"
          onChange={e => {
            if (e.target.files[0]) {
              setFile(e.target.files[0])
            }
          }}
        />
        <div className="flex items-center justify-center col-span-3 p-4">
          <img
            src={productImage}
            alt="product's picture"
            className="aspect-auto w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </>

  );
}

// return (
//   <form className="flex justify-center mt-20">
//     <div className="flex justify-center items-center gap-20 mb-20 border w-2/4 h-auto shadow-md border-gray-200 rounded-md py-5">
//       <div className="flex flex-col w-72">
//         <span className="text-2xl font-bold">{name}</span>
//         <span className="text-xl font-bold text-creator-saturate mt-2">
//           Product name : <span className="text-gray-500">{product_name}</span>
//         </span>
//         <div className="mt-2 text-creator-saturate ">
//           <span className="font-bold">Product detail :</span>
//           {isEditing ? (
//             <textarea
//               rows="6"
//               placeholder="Click to edit your tier detail"
//               name="content"
//               value={note}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               autoFocus
//               className="w-full h-20 text-xs border border-solid-2 rounded-md p-1 overflow-y-auto  text-gray-400 font-bold"
//               style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
//             />
//           ) : (
//             <div
//               className="w-full h-auto p-1 overflow-y-auto "
//               onClick={handleFocus}
//               style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
//             >
//               <p className="text-[11px]  text-gray-500 font-bold">
//                 {note || "Click to edit your tier detail"}
//               </p>
//             </div>
//           )}
//           {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//           <div className="mt-2 mb-5">
//             <span className="font-bold text-creator-saturate">Estimated Delivery</span>
//             <p className="text-[10px] text-gray-500 font-bold">{estimated_date}</p>
//           </div>
//           <Button Link bg="creator-saturate" width="full" height="11" color="white">
//             Pledge {price} BATH
//           </Button>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-48 h-56 border border-gray-400 rounded-md">
//         <h1>image tier</h1>
//       </div>
//     </div>
//   </form>
// );

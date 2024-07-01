import { useState } from "react";
import Button from "../../../components/Button";
import { useRef } from "react";
import { USER_ROLE } from "../../../constants";


export default function TierCard({ el, isEdit, currentUser, onClick }) {
  const fileEl = useRef()
  const initUpdateProductValue = {
    newProductName: el.mockProductName,
    newDetail: el.mockDetail,
    newPrice: el.mockPrice,
    newProductImage: el.mockImageProduct,
  }

  const [updateProductValue, setUpdateProductValue] = useState(initUpdateProductValue)

  const functionChangePicture = isEdit ? () => fileEl.current.click() : null

  const hoverAndActive = isEdit && currentUser === USER_ROLE.CREATOR ? "" : "hover:scale-[101%] active:scale-100"
  const imgHoverAndActive = !isEdit ? "" : "hover:rotate-6 hover:duration-500 active:scale-95 hover:opacity-30"

  return (
    <div
      role="button"
      onClick={onClick}
      className={`shadow-lg border-gray-300 border py-8 px-12 hover:border-gray-500 
    transition-all ${hoverAndActive} rounded-xl`}
    >

      <div className="grid grid-cols-7">
        <div className="flex flex-col gap-5 max-w-3xl col-span-4 justify-center">
          <h2 className="font-bold text-3xl">{`Tier ${el.mockTierNumber}`}</h2>

          {
            isEdit && currentUser === USER_ROLE.CREATOR ? <textarea
              className="rounded-lg border-2 text-2xl font-semibold"
              defaultValue={el.mockProductName}
              onChange={(e) => setUpdateProductValue({ ...updateProductValue, newProductName: e.target.value })}
            /> : (<h3 className="text-2xl font-semibold  overflow-hidden">{el.mockProductName}</h3>)
          }

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Detail</h3>
            {isEdit && currentUser === USER_ROLE.CREATOR ? <textarea
              className=" min-h-32 p-2 rounded-lg border-2"
              defaultValue={el.mockDetail}
              onChange={(e) => setUpdateProductValue({ ...updateProductValue, newDetail: e.target.value })}
            /> : (<p className="">{el.mockDetail}`</p>)}
          </div>


          {isEdit && currentUser === USER_ROLE.CREATOR ? null : <>  <div className="max-w-2xl">
            <p className="text-xl font-semibold">Estimated Delivery</p>
            <h3 className="">{el.mockDateEstimated}</h3>
          </div>
            <div className="bg-gray-300 w-40 rounded py-2 text-center font-semibold">{`${el.mockAmountSupporters} Supporters`}</div>
          </>
          }


          {isEdit && currentUser === USER_ROLE.CREATOR ? <>
            <div className="flex gap-2 pl-2 justify-start items-center">
              <p className="text-lg font-bold">Pledge</p>
              <input
                className="text-lg font-bold border-2 max-w-28 text-center rounded-lg"
                type="number"
                value={updateProductValue.newPrice}
                onChange={(e) => setUpdateProductValue({ ...updateProductValue, newPrice: +e.target.value })}
              />
              <p>&#x0E3F;</p>
            </div>
          </> : <Button isNotActive={true}>Pledge 20 &#x0E3F;</Button>}


        </div>
        <input
          type="file"
          ref={fileEl}
          className="hidden"
          onChange={e => {
            if (e.target.files[0]) {
              const newPicture = URL.createObjectURL(e.target.files[0])
              setUpdateProductValue({ ...updateProductValue, newProductImage: newPicture })
            }
          }}
        />

        <div
          className="flex items-center justify-center col-span-3 p-4 relative"
          onClick={functionChangePicture}

        >
          <img
            src={updateProductValue?.newProductImage}
            alt="product's picture"
            className={`aspect-auto w-full rounded-lg absolute max-w-96 max-h-80 object-contain ${imgHoverAndActive}`}
          />
          <p className="font-bold text-2xl">Click for Change Picture</p>


        </div>
      </div>
    </div >
  );
}

import { useNavigate } from "react-router-dom";
import Carousal from "../../../components/Carousal";
import { useStore } from "../../../store/useStore";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";

const bgImage =
  "https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function HomeProduct() {
  const navigate = useNavigate();

  const fiveProduct = useStore((state) => state.fiveProduct);

  return (
    <div className="min-w-full">
      <main className="flex flex-col justify-center items-center h-[100vh] z-10 overflow-hidden bg-black">
        <img src={bgImage} className="absolute w-full h-full object-cover" alt="" />
        <div className="h-full w-full px-16 flex justify-center items-center relative">
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <h1 className="text-white text-6xl font-bold py-4">
              Discover Your Perfect Item
            </h1>
            <div className="flex justify-center items-center w-full">
              <Carousal
                autoSlide={true}
                autoSlideInterval={6000}
                isShowBottom={false}
                isShowArrow={false}
              >
                {fiveProduct?.map((item) => {
                  return (
                    <div key={item.id} className="min-w-full relative h-full">
                      <div className="flex h-full">
                        <div className="w-1/2 bg-black/50 opacity-90 flex flex-col justify-center px-16 gap-4 rounded-tl-3xl">
                          <div className="flex flex-col gap-6 text-white py-4">
                            <div className="flex gap-4">
                              <div className="bg-supporter-normal text-black rounded-lg text-center p-2 font-bold text-lg flex items-center w-fit">
                                {item.category}
                              </div>
                              <div className="font-bold flex flex-col justify-center gap-1">
                                <div>Goal : {item.goal.toLocaleString("en-US")} THB</div>
                                <div>
                                  Now : {item.totalFund.toLocaleString("en-US")} THB
                                </div>
                              </div>
                            </div>
                            <h1 className="text-2xl font-bold">{item.productName}</h1>

                            <p className="text-justify">{item.summaryDetail}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <div className="w-16">
                                {item.profileImage ? (
                                  <img
                                    src={item.profileImage}
                                    className="aspect-square rounded-full"
                                    alt="Avatar"
                                  />
                                ) : (
                                  <div className="w-full aspect-square font-semibold text-2xl text-white rounded-full bg-gray-500 flex justify-center items-center">
                                    {item.creatorName[0].toUpperCase()}
                                  </div>
                                )}
                              </div>

                              <span className="flex font-bold text-white text-lg">
                                {item.creatorName}
                              </span>
                            </div>
                            <div>
                              <Button
                                width={"full"}
                                onClick={() => {
                                  navigate(`/campaign/${item.id}`);
                                }}
                              >
                                GO TO PROJECT
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="relative w-1/2 h-full opacity-90">
                          <div className="h-full bg-gradient-to-r from-black/50 from-0% via-[#030303]/50 via-10% to-transparent w-3/5 absolute z-30"></div>
                          <img
                            src={item.productImage}
                            alt="landing"
                            className="object-cover aspect-[16/9] rounded-tr-3xl"
                          />
                        </div>
                      </div>
                      <div className="w-full h-2.5">
                        <ProgressBar
                          Numerator={item.totalFund}
                          Denominator={item.goal}
                          height="full"
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

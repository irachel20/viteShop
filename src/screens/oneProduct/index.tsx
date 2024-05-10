import { store } from "@/context";
import { useContext } from "react";
import "./index.css";
import { Title } from "@/components/headingTitle";
import { Button, Card } from "@/components";
import fakeData from "./../../fakeData/cards.json";
import {
  DeliveryInSingleProSvg,
  PricesSvg,
  RecycleSvg,
  TrueArtSvg,
} from "@/assets/svgs";
import { useCart } from "react-use-cart";
import { toast } from "react-hot-toast";


const OneProduct = () => {
  const { productDetail }: any = useContext(store);
  console.log();

  const { addItem } = useCart();

  // function minusBtnHandeler() {
  //   const productNumber: any = document.getElementById(
  //     "productNumber"
  //   ) as HTMLInputElement;

  //   if (+productNumber.value === 1) {
  //     +productNumber.value === 1;
  //   } else {
  //     +productNumber.value--;
  //   }
  // }

  // function plusBtnHandeler() {
  //   const productNumber: any = document.getElementById(
  //     "productNumber"
  //   ) as HTMLInputElement;
  //   if (+productNumber.value === 1 || +productNumber.value < 5) {
  //     +productNumber.value++;
  //   }
  // }


  return (
    <div className=" w-full  flex-col justify-center ">
      <div className=" w-full main-div flex justify-center bg-gray-100">
        <div className="w-1/4 main-img p-12 flex justify-end items-center bg-pic ">
          <img src={productDetail.src} alt="" className="w-80 ms-auto img" />
        </div>
        <div className="w-2/5 main-desc p-12 flex-col items-start gap-6 ">
          <h1 className="font-thin text-3xl mb-5">
            Name: {productDetail.name}
          </h1>
          <h3 className="font-thin text-md mb-10">
            Price: {productDetail.price}$
          </h3>
          <div className="w-full flex-col mb-20">
            <p className="font-thin text-md">Description:</p>
            <p className="font-thin text-md">{productDetail.desc}</p>
          </div>
          <div className="flex buttons justify-between items-center">
            {/* <div className="flex mt-auto bg-gray-50 items-center  gap-2 px-3 rounded-md h-12">
              <p className="font-thin text-md">Amount:</p>
              <button
                onClick={() => minusBtnHandeler()}
                className=" flex justify-center items-center text-black rounded-full w-6 text-md"
              >
                -
              </button>
              <input
                id="productNumber"
                type="text"
                className="w-3 ms-1 flex justify-center bg-gray-50"
                defaultValue={1}
              />
              <button
                onClick={() => plusBtnHandeler()}
                className="flex justify-center items-center text-black rounded-full w-6 text-md"
              >
                +
              </button>
            </div> */}
            <Button
              onClick={() => {
                addItem(productDetail);
                toast.success(`${productDetail.name} added to your cart succussfully`)
              }}
              className="!bg-blue-500 ms-auto add !text-white hover: hover:!text-blue-300"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      <Title
        main="YOU MIGHT ALSO LIKE"
        bottom="here you can check wether you need anything else or not"
        top="need more ?"
      />
      <div className="flex flex-wrap justify-center gap-3 px-12 ">
        {fakeData.slice(1, 7).map((cardDetails) => (
          <Card {...cardDetails} key={cardDetails.name} />
        ))}
      </div>

      <Title
        main="What makes our brand different"
        bottom="here you can check wether you need anything else or not"
        top="know more"
      />
      <div className="goal-section justify-center flex flex-wrap px-12 mb-24">
        <div className="w-1/4 goals flex flex-col items-center">
          <DeliveryInSingleProSvg className="font-extrabold text-xl me-auto ms-10 mb-2" />
          <p className="w-3/4 text-start">
            Next day as standard Order before 3pm and get your order the next
            day as standard
          </p>
        </div>
        <div className="w-1/4 goals flex flex-col items-center">
          <TrueArtSvg className="font-extrabold text-xl me-auto ms-10 mb-2" />
          <p className="w-3/4 text-start">
            Made by true artisans Handmade crafted goods made with real passion
            and craftmanship
          </p>
        </div>
        <div className="w-1/4 goals flex flex-col items-center">
          <PricesSvg className="font-extrabold text-xl me-auto ms-10 mb-2" />
          <p className="w-3/4 text-start">
            Unbeatable prices For our materials and quality you won't find
            better prices anywhere
          </p>
        </div>
        <div className="w-1/4 goals flex flex-col items-center">
          <RecycleSvg className="font-extrabold text-xl me-auto ms-10 mb-2" />
          <p className="w-3/4 text-start">
            Recycled packaging We use 100% recycled packaging to ensure our
            footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;

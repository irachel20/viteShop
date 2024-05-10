import { Button, Card, Slider } from "@/components";
import "./index.css";
import {
  DesignIconSvg,
  GraphicIconSvg,
  SalvaIconSvg,
  StudioIconSvg,
  TravelIconSvg,
} from "@/assets/svgs";
import { Title } from "@/components/headingTitle";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import fakeData from "./../../fakeData/cards.json";

const instaPicDetails = [
  { src: "/insta1.png" },
  { src: "/insta2.png" },
  { src: "/insta3.png" },
  { src: "/insta4.png" },
  { src: "/insta5.png" },
  { src: "/insta6.png" },
];

export function HomeScreen() {
  return (
    <>
      <Slider></Slider>
      <div className="brand-bandage bg-gray-50 py-5 flex justify-center flex-wrap gap-16  px-5">
        <TravelIconSvg className="w-32" />
        <DesignIconSvg className="w-32" />
        <GraphicIconSvg className="w-32" />
        <SalvaIconSvg className="w-32" />
        <StudioIconSvg className="w-32" />
      </div>
      <Title
        top="Featured Products"
        main="BESTSELLER PRODUCTS"
        bottom="Problems trying to resolve the conflict between"
      ></Title>
      <div className="flex flex-col items-center gap-10 cards-container">
        <div className="flex flex-wrap justify-center gap-3 px-12">
          {fakeData.slice(0, 12).map((cardDetails) => (
            <Card {...cardDetails} id={cardDetails.id} key={cardDetails.name} />
          ))}
        </div>
        <Link to={ROUTES.discovery}>
          <Button>Load More Products</Button>
        </Link>
      </div>
      <div className="flex justify-center gap-24 items-center mt-32  about-what-we-do">
        <img
          src="/welovewhatwedo.png"
          alt=""
          className="w-1/3 img-about-what-we-do"
        />
        <div className="flex flex-col gap-5 w-1/3 text-about-what-we-do">
          <p className="text-blue-500">Featured Products</p>
          <h1 className="font-semibold text-black text-2xl">
            We love what we do
          </h1>
          <p className="text-sm text-gray-400">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics. We know how large objects
            will act, but things on a small scale.
          </p>
          <p className="text-sm text-gray-400">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics We know how large objects
            will act, but things on a small scale.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-28 gap-6 bg-gray-50 py-16">
        <h1 className="text-black text-xl text-center font-medium">
          FOLLOW PRODUCTS AND DISCOUNTS ON INSTAGRAM
        </h1>
        <p className="text-gray-600 w-1/2 text-center mb-4 insta-desc px-3">
          From a studio in London to a global brand with over 400 outlets When
          we started Avion, the idea was simple. Make high quality furniture
          affordable and available for the mass market.
        </p>
        <div className="flex gap-5 flex-wrap justify-center insta-imgs">
        {instaPicDetails.slice(0, 12).map((instaPicDetails) => (
            <img {...instaPicDetails}  className="w-36" key={instaPicDetails.src} />
          ))}
        </div>
        <Link to={'/instagram.com'}>
          <Button>Follow For More</Button>
        </Link>
      </div>
      <Title
        top="Featured Products"
        main="SOME OF OUR CATEGORIES"
        bottom="Problems trying to resolve the conflict between"
      ></Title>
      <div className="flex gap-5 justify-center mb-24 category-part flex-wrap">
        <div className="category-1 flex justify-end items-end ">
          <div className="cursor-pointer hover:text-blue-500 bg-gray-50 opacity-80 w-24 h-12 flex justify-center items-center font-medium">
            MEN
          </div>
        </div>
        <div className="category-5 justify-end items-end flex">
          <div className="cursor-pointer hover:text-blue-500 bg-gray-50 opacity-80 w-full h-12 justify-center items-center flex font-medium">
            AVANT GRADE
          </div>
        </div>
        <div className="category-2 justify-end items-end flex">
          <div className="cursor-pointer hover:text-blue-500 bg-gray-50 opacity-80 w-full h-12 justify-center items-center flex font-medium">
            WOMEN
          </div>
        </div>
        <div className="flex flex-col gap-5 new-old-section">
          <div className="category-3 justify-end items-end flex">
            <div className="cursor-pointer hover:text-blue-500 bg-gray-50 opacity-80 w-1/2 h-12 justify-center items-center flex font-medium">
              NEW
            </div>
          </div>
          <div className="category-4 justify-end items-end flex">
            <div className="cursor-pointer hover:text-blue-500 bg-gray-50 opacity-80 w-1/2 h-12 justify-center items-center flex font-medium">
              OLD
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

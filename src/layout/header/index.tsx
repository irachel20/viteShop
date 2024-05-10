import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import "./index.css";
import {
  AccountIconSvg,
  CartIconSvg,
  FacebookIconSvg,
  InstagramIconSvg,
  MailIconSvg,
  MenubarIconSvg,
  PhoneIconSvg,
  TwitterIconSvg,
  YoutubeIconSvg,
} from "@/assets/svgs";
import changeColorFooter from "../footer";
import { useCart } from "react-use-cart";

export function Header() {
  const {
    isEmpty,
    totalItems,
  } = useCart();
  return (
    <>
      <div className="bg-gray-900 top-header text-white h-max text-xs flex items-center gap-8 p-1 px-12 ">
        <p className="flex items-center ms-2 gap-1 hover:text-blue-500 cursor-pointer">
          <PhoneIconSvg /> 09022770970
        </p>
        <p className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
          <MailIconSvg /> FRfashionhouse@gmail.com
        </p>
        <p className="mx-auto ">Follow Us and get a chance to win 80% off</p>
        <p className="flex items-center">
          Follow Us:{" "}
          <InstagramIconSvg className="ms-1 fill-white cursor-pointer hover:fill-blue-500" />
          <YoutubeIconSvg className="fill-white cursor-pointer hover:fill-blue-500" />
          <FacebookIconSvg className="fill-white cursor-pointer hover:fill-blue-500" />
          <TwitterIconSvg className="fill-white cursor-pointer hover:fill-blue-500" />
        </p>
      </div>
      <header className=" header h-16 bg-gray-50 w-screen shadow-md items-center px-12 justify-center p-2 flex ">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" width={40} alt="logo" />
          <h6 className="text-sm font-bold">Fashion House</h6>
        </div>
        <ul className="text-dark items-center ms-9 flex gap-5 text-sm  options">
          <Link to={ROUTES.home} className="hover:text-blue-500">
            Home
          </Link>
          <Link to={ROUTES.discovery} className="hover:text-blue-500">
            Discovery
          </Link>
          <Link to={ROUTES.about} className="hover:text-blue-500">
            About
          </Link>
          <button onClick={()=>{scroll(0, 3200);changeColorFooter();}} className="hover:text-blue-500 cursor-pointer">Contact</button>
        </ul>
        <ul className="text-dark items-center ms-auto flex gap-5 options">
          <Link to={ROUTES.cart}>
            <CartIconSvg className="hover:fill-blue-500"></CartIconSvg>
           {isEmpty ? '' :  <p className="bg-red-500 translate-x-4 -translate-y-8 absolute rounded-full flex justify-center text-white text-xs p-0.5 px-1.5 ">{totalItems}</p>}
          </Link>
          <Link to={ROUTES.signin}>
            <AccountIconSvg className="stroke-black hover:fill-blue-500 hover:stroke-blue-500"></AccountIconSvg>
          </Link>
        </ul>
        <nav className="hidden menu-bar">
          <MenubarIconSvg width={20} />
        </nav>
      </header>
    </>
  );
}


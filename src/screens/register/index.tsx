import { Outlet } from "react-router-dom";
import "./index.css";

export function Register() {
  return (
    <div className="back-img w-screen opacity-80 flex justify-center items-center">
      <div className="back-color p-5 rounded-xl w-3/4 h-3/4 flex gap-8">
      <div className="w-1/2 sign-in-form h-full p-5 flex flex-col justify-center">
      <Outlet/>
      </div>
        <div className="w-1/2 h-full rounded-md thanks-img"></div>
      </div>
    </div>
  );
}

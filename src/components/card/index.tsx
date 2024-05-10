import { store } from "@/context";
import { ROUTES } from "@/routes";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name?: string;
  price?: number;
  category?: string;
  desc?:string;
  id?:string;
}

export function Card({ name, price, category, src ,desc , id}: CardProps) {
  
const {setProductDetail}:any = useContext(store);

  return (
    <Link to={ROUTES.productdetail} id={id} onClick={()=>{setProductDetail({name, price, category, src ,desc , id })}}   className={` flex flex-col items-center cursor-pointer w-48`}>
      <img src={src} className="w-44 h-max" />
      <div className="flex items-center gap-1 py-2 px-4 flex-col mt-2">
        <h1 className="text-black text-sm hover:text-blue-500">{name}</h1>
        <span className="text-xs text-gray-300">{category}</span>
        <span className="text-blue-500 text-xs">
          {price ? price + "$" : ""}
        </span>
      </div>
    </Link>
  );
}

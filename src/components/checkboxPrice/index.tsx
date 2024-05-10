import React from "react";
// import mokData from "./../../fakeData/cards.json";
// import { Card } from "../card";

interface ICheck extends React.HTMLAttributes<HTMLInputElement> {
  price?: string;
  value?: string;
}

export function CheckboxPrice({ value, price }: ICheck) {
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (price) {
      case "0-100":
        console.log("0-100");
        break;
      case "101-250":
        console.log("101-250");
        break;
      case "+250":
        console.log("+250");
        break;
      case "most expensive":
        console.log("most expensive");
        break;
      case "cheapest":
        console.log("cheapest");
        break;
      case "all":
        console.log("all");
        break;
      default:
        console.log("error");
        break;
    }
  };

  return (
    <div className="flex gap-1 items-center">
      <input
        className="h-3 w-3 py-2 cursor-pointer"
        name="react-radio-btn"
        type="radio"
        onChange={handleRadioClick}
      />
      <label className="pb-1 cursor-pointer text-md"> {price} </label>
    </div>
  );
}

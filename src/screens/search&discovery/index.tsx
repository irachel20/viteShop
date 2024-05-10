import { Card, Checkbox, CheckboxPrice, Textfield } from "@/components";
import "./index.css";
import { CloseIconSvg, SearchIconSvg } from "@/assets/svgs";
import mokData from "./../../fakeData/cards.json";
import { useState } from "react";

const priceDetails = [
  {
    value: "radio1",
    price: "0-100",
  },
  {
    value: "radio2",
    price: "101-250",
  },
  {
    value: "radio3",
    price: "+250",
  },
  {
    value: "radio4",
    price: "most expensive",
  },
  {
    value: "radio5",
    price: "cheapest",
  },
  {
    value: "radio6",
    price: "all",
  },
];
const categoryDetails = [
  { name: "women" },
  { name: "men" },
  { name: "old" },
  { name: "new" },
  { name: "avant grade" },
  { name: "all" },
];

export function Discovery() {
 const [searchTerm, setSearchTerm] = useState("");

  function searchHandeler(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
  }

  function clearHandeler() {
    const search = document.getElementById("search") as HTMLInputElement;
    search.value = "";
    setSearchTerm(search.value);
  }
  function focusOnSearchInput() {
    const search = document.getElementById("search") as HTMLInputElement;
    search.focus();
  }

  return (
    <>
      <div className="bg-back flex justify-start items-end p-5 "></div>
      <div className="whole flex w-screen p-12 flex-wrap">
        <div className="left-filter flex flex-col w-1/4 p-2">
          <h1 className="fonts-normal text-2xl mb-3">All Products</h1>
          <div className="flex searching justify-start gap-2 items-center">
            <Textfield
              varient="outlined"
              placeholder="Search & discovery"
              className="w-full"
              id="search"
              onChange={searchHandeler}
            />
            <div className="searcher flex items-center justify-center fill-white w-8 cursor-pointer hover:bg-blue-400 rounded-md h-8 p-1 mb-4 bg-blue-500">
              {searchTerm ? (
                <CloseIconSvg
                  onClick={clearHandeler}
                  className="w-4 h-4 mx-1"
                />
              ) : (
                <SearchIconSvg
                  onClick={focusOnSearchInput}
                  className="w-7 h-7"
                />
              )}
            </div>
          </div>
          <div className="flex gap-8 category-and-price">
            <div className="flex flex-col">
              <h3 className="my-2">Category</h3>
              {categoryDetails.map((categoryDetails) => (
                <Checkbox {...categoryDetails} key={categoryDetails.name} />
              ))}
            </div>
            <div className="flex flex-col">
              <h3 className="my-2">Price</h3>
              {priceDetails.map((priceDetails) => (
                <CheckboxPrice {...priceDetails} key={priceDetails.value} />
              ))}
            </div>
          </div>
        </div>
        <div className="all-products flex flex-wrap w-3/4 pt-4 gap-3 gap-y-5 justify-end">
          {mokData
            .filter((cardDetails) => {
              if (searchTerm == "") {
                return cardDetails;
              } else if (
                cardDetails.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return cardDetails;
              }
            })
            .slice(0, 15)
            .map((cardDetails) => (
              <Card {...cardDetails} id={cardDetails.id} key={cardDetails.name} />
            ))}
        </div>
      </div>
    </>
  );
}

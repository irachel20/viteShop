import React from "react";

interface ICheck extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
}

// function handeler(e: any){
// console.log(e.currentTarget)
// }

export function Checkbox({ name }: ICheck) {
  return (
    <div className="flex gap-1 items-center">
      <input
        className="h-3 w-3 py-2 cursor-pointer"
        type="checkbox"
        // onClick={handeler}
      />
      <label className="pb-1 cursor-pointer text-md"> {name} </label>
    </div>
  );
}

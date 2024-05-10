import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: IButton) {
  return (
    <button
      {...props}
      className={`${props.className} bg-transparent border hover:bg-blue-300 border-blue-500 rounded-md py-3 px-8 mt-3 text-blue-500`}
    ></button>
  );
}

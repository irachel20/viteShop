import React from "react";
interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  main: string;
  top?: string;
  bottom?: string;
}
export function Title(props: TitleProps) {
  return (
    <div {...props} className={`mt-20 items-center mb-16 gap-1 flex flex-col  ${props.className}`}>
      <p className="text-sm text-gray-400">{props.top}</p>
      <h1 className="font-bold text-black">{props.main}</h1>
      <p className="text-xs text-gray-400">{props.bottom}</p>
    </div>
  );
}

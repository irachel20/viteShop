import "./index.css";

interface TextfieldType extends React.InputHTMLAttributes<HTMLInputElement> {
  varient: "standard" | "outlined" | "smallerStandard" | "small";
  label?: string;
  forgotten?: string;
}

export function Textfield(props: TextfieldType) {
  function textfieldClassname() {
    switch (props.varient) {
      case "smallerStandard":
        return `w-full my-1 px-2 py-2 rounded-sm 
         font-thin outline-none bg-white border
          border-gray-200 focus:border focus:border-blue-600`;
      case "outlined":
        return ` w-full rounded-md outline-none border border-gray-200 my-1 px-2 py-2 `;
      case "small":
        return `w-full my-1 px-2 py-2.5 rounded-md 
         font-thin outline-none bg-white border
          border-gray-200 focus:border focus:border-blue-600`;
      default:
        return `w-full px-3 py-4 mb-1 rounded-lg 
        font-thin outline-none bg-white border
         border-gray-200 focus:border focus:border-blue-500`;
    }
  }
  return (
    <label
      className={`${props.className} text-sm mb-5 flex flex-col`}
      htmlFor={props.id}
    >
      <span className="ms-3 mb-1">{props.label}</span>
      <input {...props} type="text" className={textfieldClassname()} />
      <span className="text-xs text-blue-500 ms-auto cursor-pointer">
        {props.forgotten}
      </span>
    </label>
  );
}

import { Button } from "@/components";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./index.css";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { isEmpty, items, totalItems, cartTotal, updateItemQuantity , removeItem} =
    useCart();

  if (isEmpty)
    return (
      <h1 className="text-center  w-screen  justify-center pt-48 pb-80 font-light text-6xl">
        Your Cart is Empty !
      </h1>
    );
  return (
    <div className=" h-max flex w-full flex-wrap p-20 justify-center">
      <h5 className="border-b-2 w-full flex justify-end pb-2">Cart Total Items : ( {totalItems} )</h5>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b-2 p-3   justify-between items-center flex w-full"
        >
          <img className="w-28 h-36" src={item.src} />
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-center justify-between gap-2">
              <p className="ms-12">{item.name}</p>
              <p >${item.price}</p>
              <div className="me-12 flex  mt-auto bg-gray-50 items-center  gap-2 px-3 rounded-md h-12"> 
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity -1 )  }
                className=" flex justify-center items-center text-black rounded-full w-6 text-md"
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity +1 )}
                className="flex justify-center items-center text-black rounded-full w-6 text-md"
              >
                +
              </button>
              </div>
            </div>
            <div className="w-4/5 ms-auto text-right">
              Description : {item.desc}
            </div>
          </div>
          <p onClick={()=>{removeItem(item.id) ; toast.error(`${item.name} Removed from Your Cart`)}} className="text-red-500 text-xs cursor-pointer hover: hover:text-red-600  -translate-y-16 mb-4  flex justify-center items-center">REMOVE</p>

        </div>
      ))}

      <div className=" pt-20 pb-10 justify-between items-center flex flex-col w-full">
        <p className="pb-2">Total Price : {cartTotal} $</p>
        <Link to={ROUTES.shipping}>
      <Button className="!px-36">Go to Shipping</Button>
      </Link>
      </div>
      
    </div>
  );
};

export default Cart;

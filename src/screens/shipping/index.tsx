import { Button, Textfield } from "@/components";
import "./index.css";
import { CreditCardIconSvg, LockIconSvg, PaypalIconSvg } from "@/assets/svgs";
import { useCart } from "react-use-cart";

export function Shipping() {
  const { cartTotal } =
  useCart();
  return (
    <div className="flex-col flex w-screen  bg-gray-200">
      <div className="flex whole px-16 py-12 w-screen gap-3 justify-center">
        <div className="w-1/2 bg-white billing-address opacity-90 h-max rounded-xl py-3 px-6 ">
          <h1 className="font-bold text-black mb-5 ms-1">Billing Address</h1>
          <div className="w-full justify-center flex flex-col gap-3 pb-10">
            <div className="flex first-last-name-input gap-5">
              <Textfield
                label="first name"
                className="w-full !mb-0"
                placeholder="enter your first name"
                varient="small"
              />
              <Textfield
                label="last name"
                className="w-full !mb-0"
                placeholder="enter your last name"
                varient="small"
              />
            </div>
            <Textfield
              label="email address"
              className="!mb-0"
              placeholder="enter your email address"
              varient="small"
            />
            <Textfield
              label="street address"
              className="!mb-0"
              placeholder="enter your street address"
              varient="small"
            />
            <div className="flex state-more-input gap-5">
              <Textfield
                label="state/province"
                className="w-full !mb-0"
                placeholder="enter your state"
                varient="small"
              />
              <Textfield
                label="city"
                className="w-full !mb-0"
                placeholder="enter your city"
                varient="small"
              />
            </div>
            <div className="flex state-more-input gap-5">
              <Textfield
                label="zip/postal code"
                className="w-full !mb-0"
                placeholder="enter your postal code"
                varient="small"
              />
              <Textfield
                label="phone"
                className="w-full !mb-0"
                placeholder="enter your phone number"
                varient="small"
              />
            </div>
 
          </div>

          <hr />

          <h1 className="font-bold text-black mb-5 ms-1 mt-10">
            Payment Method
          </h1>
          <div className="w-full justify-center flex flex-col gap-3">
            <div className="paypal rounded-md flex justify-between border items-center p-5 border-gray-100">
              <div className="flex items-center gap-2 mb-auto">
                <input type="radio" className="cursor-pointer" />
                <p>PayPal</p>
              </div>
              <p className="text-gray-300 paypal-desc w-3/5 mx-auto font-light text-start">
                You will be redirected to the PayPal website after submitting
                your order
              </p>
              <PaypalIconSvg className="mb-auto" />
            </div>
            <div className="credit-card rounded-md p-5 border flex flex-col border-gray-100">
              <div className="flex credit-and-icon mb-3 justify-between">
                <div className="flex items-center gap-2">
                  <input type="radio" className="cursor-pointer" />
                  <p>Pay with Credit Card</p>
                </div>
                <CreditCardIconSvg />
              </div>

              <div className="flex fields-for-credit-card mt-5 gap-5">
                <Textfield
                  varient="small"
                  className="w-full !mb-0"
                  placeholder="1234 5678 9101 1121"
                  label="Card number"
                />
                <Textfield
                  varient="small"
                  className="w-full mb-0"
                  label="Expiration Date"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex fields-for-credit-card gap-5">
                <Textfield
                  varient="small"
                  className="w-full !mb-0"
                  label="Card Security Code"
                  placeholder="****"
                />
                <p className="text-xs font-thin text-blue-500 w-full mb-3 mt-auto">
                  What is this?
                </p>
              </div>
            </div>
            <div className="flex gap-3  items-center justify-center">
                <LockIconSvg className="w-5 h-5"/>
                <p className="text-gray-500  font-thin text-sm">
                  We protect your payment information using encryption to
                  provide bank-level security.
                </p>
              </div>
          </div>
        </div>
        <div className="w-1/4 bg-white billing-summary opacity-90 h-max rounded-xl py-3 px-6">
          <h1 className="font-bold flex flex-col text-black mb-5 ms-1 ">
            Billing Summary
          </h1>
          <ul className="flex flex-col gap-3 mb-5">
            <li className="flex w-full justify-between">
              <p className="font-thin text-sm">subtotal</p>
              <p className="text-sm">{cartTotal} $</p>
            </li>
       
            <li className="flex w-full justify-between">
              <p className="font-thin text-sm">Shipping</p>
              <p className="text-sm">$0.00</p>
            </li>
      
            <hr className="mt-5" />
            <li className="flex w-full justify-between mt-3">
              <p>Grand Total</p>
              <p>{cartTotal} $</p>
            </li>
          </ul>
          <textarea
            name="order comment"
            id=""
            placeholder="order comment..."
            className="w-full rounded-md p-2 border border-xs text-xs h-14"
          ></textarea>
          <div className="flex gap-3 items-center mt-3 mb-1">
            <input type="checkbox" className="h-2 w-2 cursor-pointer" checked />
            <p className="text-xs">
              Please check to acknowledge our{" "}
              <span className="text-blue-500 cursor-pointer">
                {" "}
                Privacy & Terms Policy
              </span>{" "}
            </p>
          </div>
          <Button className="!bg-blue-500 w-full !py-2 text-white hover:text-blue-300">
            Pay { cartTotal } $
          </Button>
        </div>
      </div>
    </div>
  );
}

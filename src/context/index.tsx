import { ReactElement, createContext, useState } from "react";
import { string, number } from "yup";

export const store = createContext({
  productDetail: {
    src: typeof string,
    name: typeof string,
    price: typeof number,
    category: typeof string,
    desc: typeof string,
    id: typeof string,
    quantity: typeof number,
  },
  setProductDetail: () => {},
});

export const StoreProvider = ({ children }: { children: ReactElement }) => {
  const [productDetail, setProductDetail] = useState({});
  const storeValues = {
    productDetail: productDetail,
    setProductDetail: setProductDetail,
  };
  return <store.Provider value={storeValues}>{children}</store.Provider>;
};

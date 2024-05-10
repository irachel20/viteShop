import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./screens/home";
import { Layout } from "./layout";
import { ROUTES } from "./routes";
import { About } from "./screens/about";
import { SignIn } from "./screens/register/signIn";
import { Discovery } from "./screens/search&discovery";
import { SignUp } from "./screens/register/signUp";
import { Shipping } from "./screens/shipping";
import { Register } from "./screens/register";
import { Toaster } from "react-hot-toast";
import OneProduct from "./screens/oneProduct";
import { StoreProvider } from "./context";
import Cart from "./screens/cart";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <HomeScreen />,
        path: ROUTES.home,
      },
      {
        element: <About />,
        path: ROUTES.about,
      },
      {
        element: <Cart/>,
        path: ROUTES.cart,
      },
      {
        element: <Discovery />,
        path: ROUTES.discovery,
      },
      {
        element: <Register />,
        path: "/register",
        children: [
          {
            element: <SignIn />,
            path: ROUTES.signin,
          },
          {
            element: <SignUp />,
            path: ROUTES.signup,
          },
        ],
      },
      {
        element: <OneProduct />,
        path: ROUTES.productdetail,
      },
      {
        element: <Shipping />,
        path: ROUTES.shipping,
      },
    ],
  },
]);

root.render(
  <>
    <Toaster />
    <StoreProvider>
      <CartProvider>
      <RouterProvider router={routes} />
      </CartProvider>
    </StoreProvider>
  </>
);

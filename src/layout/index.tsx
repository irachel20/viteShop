import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <>
        <Header></Header>
        <div>
        <Outlet />
        </div>
        <Footer></Footer>
        </>
    </>
  );
}

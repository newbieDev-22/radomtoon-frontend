import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainContainer() {
  return (
    <div>
      <Header />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

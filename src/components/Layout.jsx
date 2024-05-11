import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="p-4">
    <Header />
    <Outlet />
  </div>
);

export default Layout;

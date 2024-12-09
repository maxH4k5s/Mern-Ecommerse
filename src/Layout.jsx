import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;

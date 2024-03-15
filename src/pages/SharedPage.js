import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Outlet } from "react-router-dom";

const SharedPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default SharedPage;

import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";
import ThemeSettings from "./ThemeSettings";



export default function MainLayout() {
  return (
    <>
      <div className="wrapper">
        <TopBar />
        <LeftSidebar />
        <div className="content-page">
          <div className="content">
            <Outlet /> {/* Aquí se renderiza la página activa */}
          </div>
          <Footer />
        </div>
      </div>
      <ThemeSettings/>
    </>
  );
}

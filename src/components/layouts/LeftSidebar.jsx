import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <div className="leftside-menu">
      {/* Brand Logo Light */}
      <a href="index.html" className="logo logo-light">
        <span className="logo-lg">
          <img src="../assets/images/logo.png" alt="logo" />
        </span>
        <span className="logo-sm">
          <img src="../assets/images/logo-sm.png" alt="small logo" />
        </span>
      </a>
      {/* Brand Logo Dark */}
      <a href="index.html" className="logo logo-dark">
        <span className="logo-lg">
          <img src="../assets/images/logo-dark.png" alt="dark logo" />
        </span>
        <span className="logo-sm">
          <img src="../assets/images/logo-dark-sm.png" alt="small logo" />
        </span>
      </a>
      {/* Sidebar Hover Menu Toggle Button */}
      <div
        className="button-sm-hover"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Show Full Sidebar"
      >
        <i className="ri-checkbox-blank-circle-line align-middle" />
      </div>
      {/* Full Sidebar Menu Close Button */}
      <div className="button-close-fullsidebar">
        <i className="ri-close-fill align-middle" />
      </div>
      {/* Sidebar */}
      <div className="h-100" id="leftside-menu-container" data-simplebar="">
        <ul className="side-nav">
          <li className="side-nav-title">Apps</li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarEcommerce"
              aria-expanded="false"
              aria-controls="sidebarEcommerce"
              className="side-nav-link"
            >
              <i className="uil-store" />
              <span> Ecommerce </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarEcommerce">
              <ul className="side-nav-second-level">
                <li>
                  <a href="/mantenimiento/productos">Products</a>
                </li>
                <li>
                  <a href="/mantenimiento/usuarios">
                    Usuarios
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/*- End Sidemenu */}
        <div className="clearfix" />
      </div>
    </div>

  );
}

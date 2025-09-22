import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function TopBar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="navbar-custom">
            <div className="topbar container-fluid">
                <div className="d-flex align-items-center gap-lg-2 gap-1">
                    {/* Topbar Brand Logo */}
                    <div className="logo-topbar">
                        {/* Logo light */}
                        <a href="index.html" className="logo-light">
                            <span className="logo-lg">
                                <img src="../assets/images/logo.png" alt="logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="../assets/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>
                        {/* Logo Dark */}
                        <a href="index.html" className="logo-dark">
                            <span className="logo-lg">
                                <img src="../assets/images/logo-dark.png" alt="dark logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="../assets/images/logo-dark-sm.png" alt="small logo" />
                            </span>
                        </a>
                    </div>
                    {/* Sidebar Menu Toggle Button */}
                    <button className="button-toggle-menu">
                        <i className="mdi mdi-menu" />
                    </button>
                    {/* Horizontal Menu Toggle Button */}
                    <button
                        className="navbar-toggle"
                        data-bs-toggle="collapse"
                        data-bs-target="#topnav-menu-content"
                    >
                        <div className="lines">
                            <span />
                            <span />
                            <span />
                        </div>
                    </button>
                    {/* Topbar Search Form */}
                    <div className="app-search dropdown d-none d-lg-block">
                        <form>
                            <div className="input-group">
                                <input type="search" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                                <span className="mdi mdi-magnify search-icon" />
                                <button className="input-group-text btn btn-primary" type="submit">
                                    Search
                                </button>
                            </div>
                        </form>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h5 className="text-overflow mb-2">
                                    Found <span className="text-danger">17</span> results
                                </h5>
                            </div>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="uil-notes font-16 me-1" />
                                <span>Analytics Report</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="uil-life-ring font-16 me-1" />
                                <span>How can I help you?</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="uil-cog font-16 me-1" />
                                <span>User profile settings</span>
                            </a>
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                            </div>
                            <div className="notification-list">
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex">
                                        <img
                                            className="d-flex me-2 rounded-circle"
                                            src="../assets/images/users/avatar-2.jpg"
                                            alt="Generic placeholder image"
                                            height={32}
                                        />
                                        <div className="w-100">
                                            <h5 className="m-0 font-14">Erwin Brown</h5>
                                            <span className="font-12 mb-0">UI Designer</span>
                                        </div>
                                    </div>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex">
                                        <img
                                            className="d-flex me-2 rounded-circle"
                                            src="../assets/images/users/avatar-5.jpg"
                                            alt="Generic placeholder image"
                                            height={32}
                                        />
                                        <div className="w-100">
                                            <h5 className="m-0 font-14">Jacob Deo</h5>
                                            <span className="font-12 mb-0">Developer</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="topbar-menu d-flex align-items-center gap-3">
                    <li className="dropdown d-lg-none">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" >
                            <i className="ri-search-line font-22" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                            <form className="p-3">
                                <input type="search" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                            </form>
                        </div>
                    </li>
                    
                    <li className="d-none d-sm-inline-block">
                        <div
                            className="nav-link"
                            id="light-dark-mode"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Theme Mode"
                        >
                            <i className="ri-moon-line font-22" />
                        </div>
                    </li>
                    <li className="d-none d-md-inline-block">
                        <a className="nav-link" href="#" data-toggle="fullscreen">
                            <i className="ri-fullscreen-line font-22" />
                        </a>
                    </li>
                    <li className="dropdown">
                        <a
                            className="nav-link dropdown-toggle arrow-none nav-user px-2"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <span className="account-user-avatar">
                                <img
                                    src="../assets/images/users/avatar-1.jpg"
                                    alt="user-image"
                                    width={32}
                                    className="rounded-circle"
                                />
                            </span>
                            <span className="d-lg-flex flex-column gap-1 d-none">
                                <h5 className="my-0">{user ? user.alias : "Invitado"}</h5>
                                <h6 className="my-0 fw-normal">{user ? user.rol_nombre : ""}</h6>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                            {/* item*/}
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="mdi mdi-account-circle me-1" />
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="mdi mdi-account-edit me-1" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="mdi mdi-lifebuoy me-1" />
                                <span>Support</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="mdi mdi-lock-outline me-1" />
                                <span>Lock Screen</span>
                            </a>
                            {/* item*/}
                            <a onClick={handleLogout} className="dropdown-item">
                                <i className="mdi mdi-logout me-1" />
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

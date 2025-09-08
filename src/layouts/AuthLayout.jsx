import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
// import "../assets/css/auth.css"; // estilos base para auth

export default function AuthLayout() {
    return (
        <div className="authentication-bg position-relative">
            <div className="position-absolute start-0 end-0 start-0 bottom-0 w-100 h-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 800 800"
                >
                    <g fillOpacity="0.22">
                        <circle
                            style={{ fill: "rgba(var(--ct-primary-rgb), 0.1)" }}
                            cx={400}
                            cy={400}
                            r={600}
                        />
                        <circle
                            style={{ fill: "rgba(var(--ct-primary-rgb), 0.2)" }}
                            cx={400}
                            cy={400}
                            r={500}
                        />
                        <circle
                            style={{ fill: "rgba(var(--ct-primary-rgb), 0.3)" }}
                            cx={400}
                            cy={400}
                            r={300}
                        />
                        <circle
                            style={{ fill: "rgba(var(--ct-primary-rgb), 0.4)" }}
                            cx={400}
                            cy={400}
                            r={200}
                        />
                        <circle
                            style={{ fill: "rgba(var(--ct-primary-rgb), 0.5)" }}
                            cx={400}
                            cy={400}
                            r={100}
                        />
                    </g>
                </svg>

            </div>

            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
                <Outlet /> {/* Aquí se renderiza la página de login */}
            </div>

            <Footer />

        </div>
    );
}

import { useEffect, useRef } from "react";


export default function Dashboard() {



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                    <a href="javascript: void(0);">Hyper</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript: void(0);">Pages</a>
                                </li>
                                <li className="breadcrumb-item active">Starter</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Starter</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <h5>Bienvenido</h5>
            </div>
        </div>
    );
}

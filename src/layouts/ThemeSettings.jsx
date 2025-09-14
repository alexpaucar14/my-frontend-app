export default function ThemeSettings() {
    return (
        <div className="offcanvas offcanvas-end" id="theme-settings-offcanvas" tabIndex="-1">
            <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
                <h5 className="text-white m-0">Theme Settings</h5>
                <button
                    aria-label="Close"
                    className="btn-close btn-close-white ms-auto"
                    data-bs-dismiss="offcanvas"
                    type="button"
                />
            </div>
            <div className="offcanvas-body p-0">
                <div className="h-100" data-simplebar="">
                    <div className="card mb-0 p-3">
                        <h5 className="mt-0 font-16 fw-bold mb-3">Choose Layout</h5>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input
                                        className="form-check-input"
                                        defaultValue="vertical"
                                        id="customizer-layout01"
                                        name="data-layout"
                                        type="radio"
                                    />
                                    <label
                                        className="form-check-label p-0 avatar-md w-100"
                                        htmlFor="customizer-layout01">
                                        <span className="d-flex h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1" />
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="font-14 text-center text-muted mt-2">Vertical</h5>
                            </div>
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input
                                        className="form-check-input"
                                        defaultValue="horizontal"
                                        id="customizer-layout02"
                                        name="data-layout"
                                        type="radio"
                                    />
                                    <label
                                        className="form-check-label p-0 avatar-md w-100"
                                        htmlFor="customizer-layout02">
                                        <span className="d-flex h-100 flex-column">
                                            <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                            </span>
                                            <span className="bg-light d-block p-1" />
                                        </span>
                                    </label>
                                </div>
                                <h5 className="font-14 text-center text-muted mt-2">
                                    Horizontal
                                </h5>
                            </div>
                        </div>
                        <h5 className="my-3 font-16 fw-bold">Color Scheme</h5>
                        <div className="colorscheme-cardradio">
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-check card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="light"
                                            id="layout-color-light"
                                            name="data-bs-theme"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="layout-color-light">
                                            <div id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column bg-white rounded-2">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="bg-white rounded-2 h-100" id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    </span>
                                                    <span className="d-flex h-100 flex-column bg-white rounded-2">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Light</h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="dark"
                                            id="layout-color-dark"
                                            name="data-bs-theme"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100 bg-black"
                                            htmlFor="layout-color-dark">
                                            <div id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                            <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1" />
                                                            <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1" />
                                                            <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1" />
                                                            <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light-lighten d-flex p-1 align-items-center border-bottom border-opacity-25 border-primary border-opacity-25">
                                                        <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                        <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-auto" />
                                                        <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1" />
                                                        <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1" />
                                                        <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1" />
                                                    </span>
                                                    <span className="bg-light-lighten d-block p-1" />
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Dark</h5>
                                </div>
                            </div>
                        </div>
                        <div id="layout-width">
                            <h5 className="my-3 font-16 fw-bold">Layout Mode</h5>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-check card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="fluid"
                                            id="layout-mode-fluid"
                                            name="data-layout-mode"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="layout-mode-fluid">
                                            <div id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column rounded-2">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    </span>
                                                    <span className="bg-light d-block p-1" />
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Fluid</h5>
                                </div>
                                <div className="col-4" id="layout-boxed">
                                    <div className="form-check card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="boxed"
                                            id="layout-mode-boxed"
                                            name="data-layout-mode"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100 px-2"
                                            htmlFor="layout-mode-boxed">
                                            <div className="border-start border-end" id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column rounded-2">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className="border-start border-end h-100"
                                                id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    </span>
                                                    <span className="bg-light d-block p-1" />
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Boxed</h5>
                                </div>
                                <div className="col-4" id="layout-detached">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="detached"
                                            id="data-layout-detached"
                                            name="data-layout-mode"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="data-layout-detached">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-light d-flex p-1 align-items-center border-bottom ">
                                                    <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                </span>
                                                <span className="d-flex h-100 p-1 px-2">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column p-1 px-2">
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100" />
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="bg-light d-block p-1 mt-auto px-2" />
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">
                                        Detached
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <h5 className="my-3 font-16 fw-bold">Topbar Color</h5>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input
                                        className="form-check-input"
                                        defaultValue="light"
                                        id="topbar-color-light"
                                        name="data-topbar-color"
                                        type="radio"
                                    />
                                    <label
                                        className="form-check-label p-0 avatar-md w-100"
                                        htmlFor="topbar-color-light">
                                        <div id="sidebar-size">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <div id="topnav-color">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                    <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                </span>
                                                <span className="bg-light d-block p-1" />
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <h5 className="font-14 text-center text-muted mt-2">Light</h5>
                            </div>
                            <div
                                className="col-4"
                                style={{
                                    "--ct-dark-rgb": "64,73,84",
                                }}>
                                <div className="form-check card-radio">
                                    <input
                                        className="form-check-input"
                                        defaultValue="dark"
                                        id="topbar-color-dark"
                                        name="data-topbar-color"
                                        type="radio"
                                    />
                                    <label
                                        className="form-check-label p-0 avatar-md w-100"
                                        htmlFor="topbar-color-dark">
                                        <div id="sidebar-size">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span className="d-block p-1 bg-primary-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-dark d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <div id="topnav-color">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-dark d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                    <span className="d-block p-1 bg-primary-lighten rounded me-1" />
                                                    <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-auto" />
                                                    <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1" />
                                                    <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1" />
                                                    <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1" />
                                                </span>
                                                <span className="bg-light d-block p-1" />
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <h5 className="font-14 text-center text-muted mt-2">Dark</h5>
                            </div>
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input
                                        className="form-check-input"
                                        defaultValue="brand"
                                        id="topbar-color-brand"
                                        name="data-topbar-color"
                                        type="radio"
                                    />
                                    <label
                                        className="form-check-label p-0 avatar-md w-100"
                                        htmlFor="topbar-color-brand">
                                        <div id="sidebar-size">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-primary bg-gradient d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <div id="topnav-color">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-primary bg-gradient d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                    <span className="d-block p-1 bg-light opacity-25 rounded me-1" />
                                                    <span className="d-block border border-3 border opacity-25 rounded ms-auto" />
                                                    <span className="d-block border border-3 border opacity-25 rounded ms-1" />
                                                    <span className="d-block border border-3 border opacity-25 rounded ms-1" />
                                                    <span className="d-block border border-3 border opacity-25 rounded ms-1" />
                                                </span>
                                                <span className="bg-light d-block p-1" />
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <h5 className="font-14 text-center text-muted mt-2">Brand</h5>
                            </div>
                        </div>
                        <div>
                            <h5 className="my-3 font-16 fw-bold">Menu Color</h5>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="light"
                                            id="leftbar-color-light"
                                            name="data-menu-color"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-color-light">
                                            <div id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    </span>
                                                    <span className="bg-light d-block p-1" />
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Light</h5>
                                </div>
                                <div
                                    className="col-4"
                                    style={{
                                        "--ct-dark-rgb": "64,73,84",
                                    }}>
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="dark"
                                            id="leftbar-color-dark"
                                            name="data-menu-color"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-color-dark">
                                            <div id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-dark d-flex h-100 flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                            <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1" />
                                                            <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1" />
                                                            <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1" />
                                                            <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-primary border-opacity-25">
                                                        <span className="d-block p-1 bg-primary-lighten rounded me-1" />
                                                        <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-auto" />
                                                        <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-1" />
                                                        <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-1" />
                                                        <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-1" />
                                                    </span>
                                                    <span className="bg-dark d-block p-1" />
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Dark</h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="brand"
                                            id="leftbar-color-brand"
                                            name="data-menu-color"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-color-brand">
                                            <div id="sidebar-size">
                                                <span className="d-flex h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-primary bg-gradient d-flex h-100 flex-column p-1 px-2">
                                                            <span className="d-block p-1 bg-light-lighten rounded mb-1" />
                                                            <span className="d-block border opacity-25 rounded border-3 w-100 mb-1" />
                                                            <span className="d-block border opacity-25 rounded border-3 w-100 mb-1" />
                                                            <span className="d-block border opacity-25 rounded border-3 w-100 mb-1" />
                                                            <span className="d-block border opacity-25 rounded border-3 w-100 mb-1" />
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div id="topnav-color">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary">
                                                        <span className="d-block p-1 bg-dark-lighten rounded me-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                                                    </span>
                                                    <span className="bg-primary bg-gradient d-block p-1" />
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Brand</h5>
                                </div>
                            </div>
                        </div>
                        <div id="sidebar-size">
                            <h5 className="my-3 font-16 fw-bold">Sidebar Size</h5>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="default"
                                            id="leftbar-size-default"
                                            name="data-sidenav-size"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-size-default">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Default</h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="compact"
                                            id="leftbar-size-compact"
                                            name="data-sidenav-size"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-size-compact">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 border-end  flex-column p-1">
                                                        <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">Compact</h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="condensed"
                                            id="leftbar-size-small"
                                            name="data-sidenav-size"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-size-small">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span
                                                        className="bg-light d-flex h-100 border-end flex-column"
                                                        style={{
                                                            padding: "2px",
                                                        }}>
                                                        <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">
                                        Condensed
                                    </h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="sm-hover"
                                            id="leftbar-size-small-hover"
                                            name="data-sidenav-size"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-size-small-hover">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span
                                                        className="bg-light d-flex h-100 border-end flex-column"
                                                        style={{
                                                            padding: "2px",
                                                        }}>
                                                        <span className="d-block p-1 bg-dark-lighten rounded mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">
                                        Hover View
                                    </h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="full"
                                            id="leftbar-size-full"
                                            name="data-sidenav-size"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-size-full">
                                            <span className="d-flex h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="d-block p-1 bg-dark-lighten mb-1" />
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">
                                        Full Layout
                                    </h5>
                                </div>
                                <div className="col-4">
                                    <div className="form-check sidebar-setting card-radio">
                                        <input
                                            className="form-check-input"
                                            defaultValue="fullscreen"
                                            id="leftbar-size-fullscreen"
                                            name="data-sidenav-size"
                                            type="radio"
                                        />
                                        <label
                                            className="form-check-label p-0 avatar-md w-100"
                                            htmlFor="leftbar-size-fullscreen">
                                            <span className="d-flex h-100">
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1" />
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-14 text-center text-muted mt-2">
                                        Fullscreen Layout
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div id="layout-position">
                            <h5 className="my-3 font-16 fw-bold">Layout Position</h5>
                            <div className="btn-group radio" role="group">
                                <input
                                    className="btn-check"
                                    defaultValue="fixed"
                                    id="layout-position-fixed"
                                    name="data-layout-position"
                                    type="radio"
                                />
                                <label
                                    className="btn btn-soft-primary w-sm"
                                    htmlFor="layout-position-fixed">
                                    Fixed
                                </label>
                                <input
                                    className="btn-check"
                                    defaultValue="scrollable"
                                    id="layout-position-scrollable"
                                    name="data-layout-position"
                                    type="radio"
                                />
                                <label
                                    className="btn btn-soft-primary w-sm ms-0"
                                    htmlFor="layout-position-scrollable">
                                    Scrollable
                                </label>
                            </div>
                        </div>
                        <div id="sidebar-user">
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <label
                                    className="font-16 fw-bold m-0"
                                    htmlFor="sidebaruser-check">
                                    Sidebar User Info
                                </label>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        id="sidebaruser-check"
                                        name="sidebar-user"
                                        type="checkbox"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer border-top p-3 text-center">
                <div className="row">
                    <div className="col-6">
                        <button
                            className="btn btn-light w-100"
                            id="reset-layout"
                            type="button">
                            Reset
                        </button>
                    </div>
                    <div className="col-6">
                        <a
                            className="btn btn-primary w-100"
                            href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
                            role="button"
                            target="_blank">
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
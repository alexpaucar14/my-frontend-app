export default function NotFoundPage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-4 col-lg-5">
                    <div className="card">
                        <div className="card-header py-4 text-center bg-primary">
                            <a href="index.html">
                                <span>
                                    <img src="/assets/images/logo.png" alt="logo" height={22} />
                                </span>
                            </a>
                        </div>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h1 className="text-error">
                                    4<i className="mdi mdi-emoticon-sad" />4
                                </h1>
                                <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                                <a className="btn btn-info mt-3" href="/">
                                    <i className="mdi mdi-reply" /> Return Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
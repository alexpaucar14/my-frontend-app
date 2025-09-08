import "./login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
            {/* Logo */}
            <div className="card-header py-4 text-center bg-primary">
              <a href="/">
                <span>
                  <img src="assets/images/logo.png" alt="logo" height={22} />
                </span>
              </a>
            </div>
            <div className="card-body p-4">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                <p className="text-muted mb-4">
                  Enter your email address and password to access admin panel.
                </p>
              </div>
              <form action="#">
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="emailaddress"
                    required=""
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <a href="pages-recoverpw.html" className="text-muted float-end">
                    <small>Forgot your password?</small>
                  </a>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                    <div className="input-group-text" data-password="false">
                      <span className="password-eye" />
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkbox-signin"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="checkbox-signin">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="mb-3 mb-0 text-center">
                  <button className="btn btn-primary" type="submit">
                    {" "}
                    Log In{" "}
                  </button>
                </div>
              </form>
            </div>{" "}
            {/* end card-body */}
          </div>
          {/* end card */}
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted">
                Don't have an account?{" "}
                <a href="/registrarse" className="text-muted ms-1">
                  <b>Sign Up</b>
                </a>
              </p>
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
    </div>

  );
}

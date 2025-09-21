import React, { useState } from "react";
import LoginForm from "../../features/auth/components/LoginForm";
import useAuth from "../../features/auth/hooks/useAuth";


export default function Login() {
 const { handleLogin, loading } = useAuth();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
            {/* Header */}
            <div className="card-header py-4 text-center bg-primary">
              <a href="/">
                <img src="assets/images/logo.png" alt="logo" height={22} />
              </a>
            </div>

            {/* Body */}
            <div className="card-body p-4">
              <div className="text-center w-75 m-auto">
                <h4 className="fw-bold">Sign In</h4>
                <p className="text-muted">
                  Enter your credentials to access admin panel.
                </p>
              </div>

              {/* ✅ Formik Login */}
              <LoginForm onSubmit={handleLogin} loading={loading} />
            </div>
          </div>

          {/* Footer */}
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted">
                Don't have an account?{" "}
                <a href="/registrarse" className="text-muted ms-1">
                  <b>Sign Up</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

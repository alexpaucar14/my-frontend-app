import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

import "./login.css";

// ✅ Validación con Yup
const validationSchema = Yup.object({
  username: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      // 🌐 Petición a API demo de dummyjson
      const { data } = await axios.post("https://dummyjson.com/auth/login", {
        username: values.username,
        password: values.password,
      });

      // ✅ Guardamos el token en localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
      }));


      toast.success("Login exitoso 🚀", { autoClose: 2000 });
      navigate("/"); // Redirige al dashboard
    } catch (error) {
      console.error(error);
      toast.error("Credenciales incorrectas ❌", { autoClose: 3000 });
    } finally {
      setSubmitting(false);
    }
  };

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
              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* Username */}
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <Field
                        name="username"
                        className="form-control"
                        placeholder="Enter your username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    {/* Remember me */}
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox-signin"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-signin"
                      >
                        Remember me
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Ingresando..." : "Log In"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
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

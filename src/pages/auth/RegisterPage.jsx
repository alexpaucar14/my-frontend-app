import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Registro() {
  // ✅ Definimos esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Debe ser un correo válido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
      .matches(/[0-9]/, "Debe contener al menos un número")
      .required("La contraseña es obligatoria"),
    terms: Yup.boolean()
      .oneOf([true], "Debes aceptar los términos y condiciones"),
  });

  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    terms: false,
  };

  const handleSubmit = (values) => {
    console.log("Formulario enviado ✅", values);
    // Aquí podrías hacer un fetch/axios POST al backend
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
            <div className="card-header py-4 text-center bg-primary">
              <a href="index.html">
                <span>
                  <img src="assets/images/logo.png" alt="logo" height={22} />
                </span>
              </a>
            </div>
            <div className="card-body p-4">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center mt-0 fw-bold">
                  Free Sign Up
                </h4>
                <p className="text-muted mb-4">
                  Don't have an account? Create your account, it takes less than
                  a minute.
                </p>
              </div>

              {/* ✅ Formik */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="fullname" className="form-label">
                        Full Name
                      </label>
                      <Field
                        name="fullname"
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                      <ErrorMessage
                        name="fullname"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <Field
                        name="email"
                        type="email"
                        autoComplete="off"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="mb-3">
                      <div className="form-check">
                        <Field type="checkbox" name="terms" className="form-check-input" id="checkbox-signup"/>
                        <label className="form-check-label" htmlFor="checkbox-signup">
                          I accept <a href="#" className="text-muted">Terms and Conditions</a>
                        </label>
                      </div>
                      <ErrorMessage
                        name="terms"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="mb-3 text-center">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Registering..." : "Sign Up"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted">
                Already have account?{" "}
                <a href="/login" className="text-muted ms-1">
                  <b>Log In</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

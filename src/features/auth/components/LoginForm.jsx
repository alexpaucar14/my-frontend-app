import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validación con Yup, ahora vive con el formulario
const validationSchema = Yup.object({
  username: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export default function LoginForm({ onSubmit, loading }) {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
            <label className="form-check-label" htmlFor="checkbox-signin">
              Remember me
            </label>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting || loading}
            >
              {(isSubmitting || loading) ? "Ingresando..." : "Log In"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
import React, { forwardRef, useImperativeHandle } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validaciones con Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("Correo inválido").required("El email es obligatorio"),
  phone: Yup.string()
    //.matches(/^[0-9]+$/, "Solo números")
    //.min(9, "Mínimo 9 dígitos")
    .required("El teléfono es obligatorio"),
  age: Yup.string().required("Requiere Edad")
});

// ✅ forwardRef para submit externo
const UserForm = forwardRef(({ onSubmit, initialValues }, ref) => {
  let submitForm;

  useImperativeHandle(ref, () => ({
    handleSubmit: () => {
      if (submitForm) submitForm();
    },
  }));

  return (
    <Formik
      initialValues={initialValues || { firstName: "", email: "", phone: "", age: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize // 🔑 permite actualizar los valores al cambiar initialValues
    >
      {({ submitForm: sf }) => {
        submitForm = sf;
        return (
          <Form>
            {/* Nombre */}
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <Field name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="text-danger small" />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger small" />
            </div>

            {/* Teléfono */}
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger small" />
            </div>

            {/* Edad */}
            <div className="mb-3">
              <label className="form-label">Edad</label>
              <Field name="age" className="form-control" />
              <ErrorMessage name="age" component="div" className="text-danger small" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default UserForm;
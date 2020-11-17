import React from "react";
import "./ModalForm.css";

import { Formik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";

const formSchema = yup.object().shape({
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required").min(6),
});

function ModalForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={formSchema}
      onSubmit={(data) => console.log(data)}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => {
        return (
          <form onSubmit={handleSubmit} className="modal__form">
            <label>Your Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="modal__errors">
                <ErrorIcon /> {errors.email}
              </p>
            )}
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="modal__errors">
                <ErrorIcon /> {errors.password}
              </p>
            )}
            <button
              type="submit"
              disabled={
                values.email.length <= 0 ||
                values.password.length <= 0 ||
                errors.email ||
                errors.password
              }
            >
              Log In
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default ModalForm;

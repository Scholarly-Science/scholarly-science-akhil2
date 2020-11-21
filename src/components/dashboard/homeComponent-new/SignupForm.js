import React, { useState, useEffect } from "react";
import "./ModalForm.css";
import SignupForm2 from "./SignupForm2";
import MediaQuery, { useMediaQuery } from "react-responsive";
import "./HomeComponent-new.css";
import "./SignupForm.css";
// import VerificationForm from "./VerificationForm.js";
import { Formik } from "formik";
import Dialog from "@material-ui/core/Dialog";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import modalLogo from "../../images/homeasset/modal-logo.svg";
import googleLogo from "../../images/homeasset/Google-logo.png";
import { values } from "lodash";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/.+?(?:[\s'].+?){1,}$/, "Invalid name"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)"
    ),
});

const VerificationForm = (email) => {
  return (
    <form className="modal__form form2">
      <h2 className="verifyDiv verifyTitle">We Need to Verify your Email</h2>
      <div className="infodiv verifyDiv">
        We sent an email to the address you provided when you created your
        account. Verify your email to continue
      </div>

      <input
        type="email"
        className="email-input verifyInput"
        value={email}
        disabled={true}
      />
      <hr className="verificationHr" />
      <div className="infodiv verifyDiv">
        Click on the link in that email to verify your account. You may need to
        check your <b>spam</b> folder.
      </div>
      <div className="infodiv bottomVerifyDiv ">
        <button className="create-acc verify-button">
          Don't see it? Resend
        </button>
        <div className="log-in verifyLogOut">
          Not Your Account ? <span className="log-in-link">Log Out</span>
        </div>
      </div>
    </form>
  );
};

export const SignupForm = () => {
  // const nextFunc = () => {
  //   setState(true);
  //   VerificationForm(values.email);
  // };

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [value, setValue] = useState(false);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [email, setEmail] = useState();

  return (
    <div className="home__modal">
      <Dialog
        fullScreen
        open={state}
        className="modal modal"
        onClose={() => setState(false)}
      >
        <div className="modal__container">
          <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
            <div className="modal__sec1 modal__sec1__verify">
              <img src={modalLogo} alt="logo" />
              <div className="modal__content">
                <p className="modal__welcome">Welcome Back</p>
                <p className="modal__signIn">Sign in to continue.</p>
              </div>
            </div>
          </MediaQuery>
          <div className="modal__sec2">
            <CloseRoundedIcon onClick={() => setState(false)} />
            <div className="modal__content3">
              <SignupForm2
                value={value}
                setState={setState}
                setState2={setState2}
                onChange={handleChange}
              />
            </div>
            {/* <div className="modal__contentbottom">
              <hr />
              <p>
                By signing up, you're agreeing to our <span>Terms of Use</span>
                {/* <a
                      href=""
                      onClick={() => {
                        this.setState2({ open: true }) &&
                          this.setState({ open: false });
                      }}
                    >
                      Sign Up
                    </a> 
              </p>
              <p>
                Already have an account? <span>Log In</span>
              </p>
            </div> */}
          </div>
        </div>
      </Dialog>

      <Dialog
        fullScreen
        open={state2}
        className="modal modal"
        onClose={() => setState2(false)}
      >
        <div className="modal__container ">
          <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
            <div className="modal__sec1 modal__sec1__verify">
              <img src={modalLogo} alt="logo" />
              <div className="modal__content">
                <p className="modal__welcome">Welcome Back</p>
                <p className="modal__signIn">Sign in to continue.</p>
              </div>
            </div>
          </MediaQuery>
          <div className="modal__sec2">
            <CloseRoundedIcon onClick={() => setState2(false)} />
            <div className="modal__content4">{VerificationForm(email)}</div>

            {/* <div className="modal__contentbottom">
              <hr />
              <p>
                By signing up, you're agreeing to our <span>Terms of Use</span>
                {/* <a
                      href=""
                      onClick={() => {
                        this.setState2({ open: true }) &&
                          this.setState({ open: false });
                      }}
                    >
                      Sign Up
                    </a> 
              </p>
              <p>
                Already have an account? <span>Log In</span>
              </p>
            </div> */}
          </div>
        </div>
      </Dialog>

      <Formik
        className="signupForm"
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        // validator={() => ({})}
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
            <>
              <form onSubmit={handleSubmit} className="modal__form">
                <label>Your Full Name</label>
                <input
                  placeholder="Enter Your Full Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p className="modal__errors">
                    <ErrorIcon /> {errors.name}
                  </p>
                )}
                <label>Your Email Address</label>
                <input
                  placeholder="Enter Email Address"
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
                  placeholder="Enter Password"
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
                  className="home__login"
                  type="submit"
                  // onClick={() => setState(true)}
                  // onClick={nextFunc()}
                  onClick={() => {
                    setState(true);

                    setEmail(values.email);

                    VerificationForm(values.email);
                  }}
                  disabled={
                    values.name.length <= 0 ||
                    values.email.length <= 0 ||
                    values.password.length <= 0 ||
                    errors.name ||
                    errors.email ||
                    errors.password
                  }
                >
                  Next
                </button>
              </form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;

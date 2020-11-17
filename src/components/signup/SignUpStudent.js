import React, { useState } from "react";
// import axios from "axios";
import { signUp } from "../backend/apiconnector";
import VerifyEmail from "./VerifyEmail";
import { Route } from "react-router-dom";
import "./signup.css";
import google from "../../assets/icons8-google.svg";
import GoogleLogin from "react-google-login";
import linkedin from "../../assets/icons8-linkedin.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Dashboard } from "../dashboard/Dashboard";

import { authenticate, isAuth } from "../../helpers/auth";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class SignUpStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      country: "us",
      signedup: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkcountry = this.checkcountry.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem("student-nation.com-tokens")) {
      window.location.replace("/dashboard/profile");
    }
    if (window.localStorage.getItem("student-nation.com-activation")) {
      var readls = JSON.parse(
        window.localStorage.getItem("student-nation.com-activation")
      );
      this.setState({ email: readls.email, signedup: true });
    }
  }
  componentDidMount() {
    this.checkcountry();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    var user = {
      fullName: this.state.fullName,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
    };
    signUp = (res) => {
      // .then((data) => {
      //   if (data.status === "success") {
      //     window.localStorage.setItem(
      //       "student-nation.com-activation",
      //       JSON.stringify({
      //         email: this.state.email,
      //         hash: data.tokenhash,
      //         verified: false,
      //       })
      //     );
      //     this.setState({ signedup: true });
      //   } else {
      //     document.getElementById("signinerr").style.display = "block";
      //   }
      // })
      const googleresponse = {
        Name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.googleId,

        ProviderId: "Google",
      };

      debugger;
      axios
        .post("http://localhost:5000/api/register", googleresponse)
        .then((result) => {
          let responseJson = result;
          sessionStorage.setItem("userData", JSON.stringify(result));
          this.props.history.push("/dashboard");
        });
    };
    // .catch((err) => {});

    // axios.post(`http://localhost:5000/auth/register`,{
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     phone: this.state.phone,
    //     email: this.state.email,
    //     password: this.state.password
    // }).then(res => {
    //   if(res.data.status === 'success'){
    //     window.localStorage.setItem("scholarlyscience.in-activation", JSON.stringify({
    //       email: this.state.email,
    //       hash: res.data.tokenhash,
    //       verified: false
    //     }))
    //     this.setState({signedup: true})
    //   }else alert("failed")
    // }).catch(err => {
    //   if(err.response.data.error.message==='User Exists'){
    //     alert('Email Already in Use')
    //   }
    // })
  }
  checkcountry() {
    var cc = "us";
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((result) => {
        cc = result.country_code.toLowerCase();
        this.setState({ country: cc });
      });
  }
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      if (response) {
        return <Redirect to="/dashboard" />;
      }
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    };

    return (
      <div className="main">
        {isAuth() ? <Redirect to="/dasboard/homecomponent" /> : null}
        <div className="main_banner"></div>
        {!this.state.signedup ? (
          <div className="container">
            <div className="signup-title">Sign up</div>
            <div className="with-google">
              <GoogleLogin
                clientId="109921130585-au2musc9k240m8e0n55eo4bjecoshd44.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                height="25"
                width="25"
                style={{ marginTop: "0.5rem" }}
              />
            </div>
            <div className="with-linkedin">
              <span>
                <img
                  src={linkedin}
                  alt="linkedin"
                  height="25"
                  width="25"
                  style={{ marginTop: "0.5rem", marginRight: "0.2rem" }}
                />
              </span>
              <span>Sign up with LinkedIn</span>
            </div>
            <div className="with-email">
              <span>or sign up with email</span>
            </div>

            <form onSubmit={this.handleSubmit}>
              {/* <label htmlFor="firstname" className="first-label">
                First Name
              </label>
              <div>
                <input
                  type="text"
                  className="email-input"
                  value={this.state.firstName}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                />
              </div>
              <label htmlFor="lastname" className="last-label">
                Last Name
              </label>
              <div>
                <input
                  type="text"
                  className="email-input"
                  value={this.state.lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                />
              </div> */}
              <label htmlFor="fullname" className="first-label">
                Full Name
              </label>
              <div>
                <input
                  type="text"
                  className="email-input"
                  value={this.state.fullName}
                  onChange={(e) => this.setState({ fullName: e.target.value })}
                />
              </div>
              <label htmlFor="email" className="email-label">
                Email
              </label>
              <div>
                <input
                  type="email"
                  className="email-input"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <label htmlFor="password" className="password-label">
                Password
              </label>
              <div>
                <input
                  type="password"
                  className="email-input"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <label htmlFor="contact" className="contact-label">
                Contact
              </label>
              <div>
                <PhoneInput
                  country={this.state.country}
                  value={this.state.phone}
                  onChange={(phone) => this.setState({ phone })}
                  inputStyle={{ width: "100% !important" }}
                  inputClass="signup-contact"
                  countryCodeEditable={false}
                />
              </div>
              <div id="signinerr" className="signinerr">
                You appear to already have an account.
              </div>
              <button className="create-acc">Get Started</button>
            </form>
            <div className="infodiv">
              Already have an account?{" "}
              <span
                className="log-in-link"
                onClick={() => {
                  alert("Redirect to Login Page");
                }}
              >
                Sign In
              </span>
            </div>
          </div>
        ) : (
          <VerifyEmail email={this.state.email} />
        )}
      </div>
    );
  }
}

export default SignUpStudent;

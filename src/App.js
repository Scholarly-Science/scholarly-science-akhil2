import React from "react";
import { SignUpStudent } from "./components/signup/SignUpStudent";
import { Dashboard } from "./components/dashboard/Dashboard";
import Verification from "./components/signup/verification";
import { SignupForm } from "./components/dashboard/homeComponent-new/SignupForm";

import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }
  componentWillMount() {
    if (localStorage.getItem("student-nation.com-tokens")) {
      this.setState({ auth: true });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return this.state.auth ? (
                  <Redirect to="/dashboard/company" />
                ) : (
                  <Redirect to="/signup" />
                );
              }}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUpStudent} />
            <Route
              path="/dashboard/homecomponent/signupForm"
              component={SignupForm}
            />
            <Route path="/verify/:token" children={<Verification />} />
          </Switch>
          {/* <SignUpStudent /> */}
          {/* <Dashboard /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

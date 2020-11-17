import React, { useState } from "react";
import Navbar from "./Navbar";
import { ToggleButton } from "./ToggleButton";
import { SideDrawer } from "./SideDrawer";
import { Backdrop } from "./Backdrop";
import { Company } from "./Company";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { Discover } from "./Discover";
import Profile from "./Profile";
import "./dashboard.css";
import HomeComponent from "./homeComponent-new/HomeComponent-new";
import Landing from "./CompanyDetail";
import JobOpenings from "./JobOpenings";
import JobDescription from "./JobDescription";
import JobsForYou from "./JobsForYou";
import EmployeeReferrals from "./EmployeeReferrals";
import Description from "./Description";
import Home from "./Home";
import Events from "./Events/Events.js";
import Assessment from "./Assessment/Assessment";

import { SignUpStudent } from "../signup/SignUpStudent";
import Assessment__Body from "./Assessment/Assessment__Body/Assessment__Body";
import Assignments from "./Assignments/Assignments";
import Research from "./Research/Research";

export const Dashboard = () => {
  const [isToggle, setIsToggle] = useState(false);

  let backDrop;
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const clickBackDrop = () => {
    setIsToggle(false);
  };

  if (isToggle) {
    backDrop = <Backdrop click={clickBackDrop} />;
  }
  return (
    <Switch>
      {/* <Route path="/" component={SignUpStudent} /> */}
      <Route exact path="/dashboard/assessment/:id" component={Assessment} />
      <Route exact path="/dashboard/assessment" component={Assessment} />

      <Route exact path="/dashboard/homecomponent" component={HomeComponent} />
      <div className="main-dash-container">
        <div className="left-sidebar-container">
          <Navbar />
        </div>
        <div className="dash-container">
          <div className="mobile hidenav">
            <ToggleButton click={handleToggle} />
            <SideDrawer show={isToggle} click={clickBackDrop} />
            {backDrop}
          </div>
          <div className="dash__component">
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/dashboard/profile" />;
              }}
            />
            <Route exact path="/dashboard/home" component={Home} />
            <Route exact path="/dashboard/events" component={Events} />

            <Route exact path="/dashboard/company" component={Company} />
            <Route exact path="/dashboard/discover" component={Discover} />
            <Route exact path="/dashboard/openings" component={JobOpenings} />
            <Route exact path="/dashboard/assignments" component={Assignments} />
            <Route exact path="/dashboard/research" component={Research} />
            <Route
              exact
              path="/dashboard/description"
              component={Description}
            />
            <Route exact path="/dashboard/jobs" component={JobsForYou} />
            <Route
              exact
              path="/dashboard/referrals"
              component={EmployeeReferrals}
            />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route
              exact
              path="/dashboard/openings-detail/:jobId"
              component={JobDescription}
            />
            <Route
              exact
              path="/dashboard/company-detail/:companyId/:location"
              component={Landing}
            />
          </div>
        </div>
      </div>
    </Switch>
  );
};

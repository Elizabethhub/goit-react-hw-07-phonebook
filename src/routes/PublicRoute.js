import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authorizedUser } from "../redux/auth/authSelectors";

const PublicRoute = ({ isAuth, path, component, exact, restricted }) => {
  return isAuth && restricted ? <Redirect to="/contacts" /> : <Route path={path} exact={exact} component={component} />;
};

const mapStateToProps = (state) => {
  return { isAuth: authorizedUser(state) };
};

export default connect(mapStateToProps)(PublicRoute);

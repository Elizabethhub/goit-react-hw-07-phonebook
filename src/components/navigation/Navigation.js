import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../redux/auth/authActions";
import { authorizedUser } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ isAuth, signOut }) => {
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <NavigationListItem {...route} key={route.path} isAuth={isAuth} />
        ))}
        {isAuth && (
          <li className="navLink" onClick={() => signOut()}>
            LOGOUT
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: authorizedUser(state),
  };
};

export default connect(mapStateToProps, { signOut })(Navigation);
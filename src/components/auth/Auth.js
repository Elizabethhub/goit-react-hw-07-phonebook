import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserOperation, registerUserOperation } from "../../redux/auth/authOperation";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../images/icons/sprite.svg";
import { withRouter } from "react-router-dom";

class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error !== prevProps.error) {
      if (this.props.error === "Request failed with status code 400") {
        return alert(`${this.state.email} is already exists in the Phonebook`);
      }
    }
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.location.pathname === "/signup"
      ? this.props.registerUserOperation(this.state)
      : this.props.loginUserOperation(this.state);
  };
  render() {
    const { pathname } = this.props.location;
    const { email, password } = this.state;
    return (
      <AuthContainer>
        <form onSubmit={this.onHandleSubmit} className="user-form" autoComplete="off" name="userForm">
          <label className="user-label">
            Email
            <input
              type="text"
              name="email"
              onChange={this.onHandleChange}
              value={email}
              className="user-input"
              placeholder="max@gmail.com"
              minLength="3"
              autoComplete="on"
              required
            />
            <svg className="icon-user">
              <use href={sprite + "#icon-envelop"} />
            </svg>
          </label>
          <label className="user-label">
            Password
            <input
              type="text"
              name="password"
              onChange={this.onHandleChange}
              value={password}
              className="user-input"
              required
              placeholder="AbraCadabra555"
              autoComplete="on"
            />
            <svg className="icon-user">
              <use href={sprite + "#icon-lock"} />
            </svg>
          </label>
          <button type="submit" className="user-button">
            {pathname === "/signup" ? "Register" : "Login"}
          </button>
        </form>
      </AuthContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { registerUserOperation, loginUserOperation })(withRouter(Auth));

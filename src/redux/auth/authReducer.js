import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, signOut } from "./authActions";

const authReducer = createReducer(
  {
    idToken: "",
    refreshToken: "",
    localId: "",
  },
  {
    [registerUser]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
      localId: payload.localId,
    }),
    [loginUser]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
      localId: payload.localId,
    }),
    [signOut]: () => ({
      idToken: "",
      refreshToken: "",
      localId: "",
    }),
  }
);

export default authReducer;

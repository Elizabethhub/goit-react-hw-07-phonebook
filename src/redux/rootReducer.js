import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users/usersReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
import { userReducer } from "./user/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
import contactReducer from "./contacts/contactReducer";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["idToken", "refreshToken"],

  // key: 'users',
  // storage: storage,
  // blacklist: ['error']
};

const rootReducer = combineReducers({
  contscts: contactReducer,
  phonebookUsers: usersReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  // users: persistReducer(usersPersistConfig, usersReducer),
  // auth: () => ({ isAuth: false, token: "lgfdfhgjhkkjhgh" }),
});

export default rootReducer;

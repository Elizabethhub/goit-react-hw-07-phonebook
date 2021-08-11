import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/contactReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

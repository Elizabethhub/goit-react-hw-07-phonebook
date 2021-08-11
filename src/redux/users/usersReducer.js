import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { signOut } from "../auth/authActions";

import { addUser, deleteUser, getAllUsers, resetError, setError, setFilter, setLoader } from "./usersActions";

const itemsReducer = createReducer([], {
  [getAllUsers]: (_, { payload }) => payload,
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) => state.filter((item) => item.id !== payload),
  [signOut]: () => [],
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
  [signOut]: () => "",
});
const isLoadingReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
  [signOut]: () => "",
});

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
});

export default usersReducer;

// import { createSelector } from "@reduxjs/toolkit";

export const authorizedUser = (state) => Boolean(state.auth.idToken);

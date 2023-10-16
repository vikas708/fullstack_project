import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {  registrationStart,registrationSuccess, registrationFailure, } from "./registrationRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const registration = async (dispatch, registration) => {
  dispatch( registrationStart());
  try {
    const res = await publicRequest.post("/auth/register", registration);
    dispatch(registrationSuccess(res.data));
  } catch (err) {
    dispatch(registrationFailure());
  }
};
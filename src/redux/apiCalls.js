import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  registerSuccess,
  register,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err.response);
  }
};

export const registerr = async (dispatch, user, history) => {
  dispatch(loginStart());
  console.log(user);

  try {
    const res = await publicRequest.post("/auth/register", user);
    history.push("/login");
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};
export const logoutt = async (dispatch, history) => {
  console.log("hello");
  history.push("/login");
  dispatch(logout());
};

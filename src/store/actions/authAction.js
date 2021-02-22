import { BiDotsVerticalRounded } from "react-icons/bi";
import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import Cookies from "js-cookie";

const setUser = (token) => {
  decode(token);
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signup", newUser);
      Cookies.set("mytoken", response.data.token);
      dispatch(setUser(response.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const sigin = (user, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signin", user);
      Cookies.set("mytoken", response.data.token);
      dispatch(setUser(response.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  Cookies.remove("mytoken");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkToken = () => (dispatch) => {
  const token = Cookies.get("mytoken");
  if (token) {
    const user = decode(token);
    const currtime = Date.now();
    if (currtime < user.exp) {
      dispatch(dispatch(setUser(token)));
    } else {
      signout();
    }
  }
};

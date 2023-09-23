/** @format */

import cookies from "react-cookies";

const initState = {
  user: cookies.load("current-user"),
  profile: cookies.load("profile"),
};

export function UserReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload[0],
        profile: action.payload[1],
      };
    case "LOGOUT":
      cookies.remove("current-user");
      cookies.remove("profile");
      return {
        user: null,
        profile: null,
      };
    default:
      return state;
  }
}

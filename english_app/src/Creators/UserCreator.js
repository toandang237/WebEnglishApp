/** @format */

export function UserLogin(payload) {
  return {
    type: "LOGIN",
    payload: payload,
  };
}

export function UserLogout(payload = null) {
  return {
    type: "LOGOUT",
    payload: payload,
  };
}

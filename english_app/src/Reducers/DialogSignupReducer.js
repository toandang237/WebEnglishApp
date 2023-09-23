/** @format */

const initState = {
  show: false,
};

export function DialogSignupReducer(state = initState, action) {
  switch (action.type) {
    case "SHOW_SIGNUP":
      return {
        show: true,
      };

    case "HIDDEN_SIGNUP":
      return {
        show: false,
      };
    default:
      return state;
  }
}

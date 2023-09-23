/** @format */

const initState = {
  show: false,
};

export function DialogLoginReducer(state = initState, action) {
  switch (action.type) {
    case "SHOW_LOGIN":
      return {
        show: true,
      };

    case "HIDDEN_LOGIN":
      return {
        show: false,
      };
    default:
      return state;
  }
}

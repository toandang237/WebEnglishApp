/** @format */

const initState = {
  load: false,
};

export function LoadingReducer(state = initState, action) {
  switch (action.type) {
    case "LOAD":
      return {
        load: true,
      };
    case "STOP":
      return {
        load: false,
      };
    default:
      return state;
  }
}

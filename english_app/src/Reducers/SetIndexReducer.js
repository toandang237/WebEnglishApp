/** @format */

const initState = {
  index: 0,
};

export function SetIndexReducer(state = initState, action) {
  switch (action.type) {
    case "AC":
      return {
        index: 0,
      };
    case "ST":
      return {
        index: 1,
      };
    case "FO":
      return {
        index: 2,
      };
    case "CL":
      return {
        index: 3,
      };
    default:
      return state;
  }
}

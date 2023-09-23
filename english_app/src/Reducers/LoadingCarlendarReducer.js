/** @format */

const initState = {
  load: false,
};

export function LoadingCarlendarReducer(state = initState, action) {
  switch (action.type) {
    case "LOADING_CARLENDAR":
      return {
        load: true,
      };
    case "STOP_LOADING_CARLENDAR":
      return {
        load: false,
      };
    default:
      return state;
  }
}

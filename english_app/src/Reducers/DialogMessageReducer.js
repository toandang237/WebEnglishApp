/** @format */

const initState = {
  status: false,
  title: "",
  content: "",
};

export function DialogMessageReducer(state = initState, action) {
  switch (action.type) {
    case "ON":
      return {
        ...state,
        status: true,
        title: action.payload.title,
        content: action.payload.content,
      };
    case "OFF":
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}

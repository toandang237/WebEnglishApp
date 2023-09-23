/** @format */

const initState = {
  title: "",
  sayYes: () => {},
  sayNo: () => {},
  isShow: false,
};

export function DialogConfirmReducer(state = initState, action) {
  switch (action.type) {
    case "SHOW_DIALOG_CONFIRM":
      return {
        ...state,
        title: action.payload.title,
        sayYes: action.payload.sayYes,
        sayNo: action.payload.sayNo,
        isShow: true,
      };

    case "HIDDEN_DIALOG_CONFIRM":
      return {
        ...state,
        title: "",
        sayYes: () => {},
        sayNo: () => {},
        isShow: false,
      };
    default:
      return state;
  }
}
